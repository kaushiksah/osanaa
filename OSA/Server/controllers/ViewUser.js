const ViewUser= async (req, res) => {
  const client = global.pg_client;
  console.log(req.body);
  const {
    query: { UserLogin = "" },
  } = req;

  console.log("UserLogin", {
    UserLogin,
  });
  try {
    await client.query("BEGIN;");
    await client.query(
      `SELECT "osa"."Fn_OsanaOrderHistory"(
          '${UserLogin}',
          'ITEM_CURSOR'
          );`
    );
    const data = await client.query(`FETCH ALL IN "ITEM_CURSOR";`);
    await client.query("COMMIT;");

    const { rows } = data;
    const resObj = {
      data: rows,
    };

    res.send(resObj);
  } catch (e) {
    res.status(400).send({ error: e });
    console.error("Error in ViewUser: ", e);
  }
};

module.exports = ViewUser;
