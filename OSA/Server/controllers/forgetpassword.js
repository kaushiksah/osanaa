const forgetpassword = async (req, res) => {
    const client = global.pg_client;
    console.log(req.body);
    console.log(client);
    const {
      query: { Email = "" }
    } = req;
    try {
      await client.query("BEGIN;");
      await client.query(
        `SELECT "osa"."Fn_OsanaUser_ForgetPassword"(
          '${Email}',
          'ITEM_CURSOR'
          );`
      );
      const data = await client.query(`FETCH ALL IN "ITEM_CURSOR";`);
      await client.query("COMMIT;");
  
      const { rows } = data;
      const resObj = {
        data: rows
      };
  
      res.send(resObj);
    } catch (e) {
      res.status(400).send({ error: e });
      console.error("Error in OsanaUser_ForgetPassword: ", e);
    }
  };
  
  module.exports= forgetpassword;