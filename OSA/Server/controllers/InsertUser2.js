const InsertUser2 = async (req, res) => {
    const {
      body: { User ="", Fname="", Lname="" , Email="", Pwd="" }
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
        `SELECT "osa"."Fn_InsertRegister"(
          '${User}',
          '${Fname}',
          '${Lname}',
          '${Email}',
          '${Pwd}',
          'ITEM_CURSOR'
          );`
      );
      const data = await client.query(`FETCH ALL IN "ITEM_CURSOR";`);
      await client.query("COMMIT;");

      const { rows } = data;
      const resObj = {
        data: rows,
        success: true
      };
      res.send(resObj);
    } catch (e) {
      console.log("Error in  InsertRegister:", e);
      res.status(400).send({ error: e });
    }
  };
  
  module.exports = InsertUser2;