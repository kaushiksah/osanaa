const InsertUser = async (req, res) => {
  const {
    body: { User, Fname, Lname , Email, Pwd }
  } = req;
  console.log("Test", {
    User,
    Fname,
    Lname,
    Email,
    Pwd
  });
  try {
    const client = global.pg_client;
    // console.log(req.body);
    // console.log(client);
    await client.query("BEGIN;");
    await client.query(
      `SELECT "osa"."Fn_OsanaUser_1"(
        '${User}',
        '${Fname}',
        '${Lname}',
        '${Email}',
        '${Pwd}'
        );`
    );
    
    // Final commit
    await client.query("COMMIT;");
    // await pgclient.release();
    res.send({ success: true });
  } catch (e) {
    console.log("Error In InsertUser :", e);
    res.status(400).send({ error: e });
  }
};

module.exports = InsertUser;
