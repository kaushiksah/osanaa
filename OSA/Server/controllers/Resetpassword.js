const Resetpassword = async (req, res) => {
    const {
      body: {
        UserName = "",
        NewPassword = "",
        RetypeNewPassword = ""
      }
    } = req;
    console.log("Test", {
        UserName,
        NewPassword,
        RetypeNewPassword
      });
  
    try {
      const client = global.pg_client;
      await client.query("BEGIN;");
      await client.query(
        `SELECT  "osa"."proc_ResetOsanaUserPassword"
        ('${UserName}',
        '${NewPassword}',
        '${RetypeNewPassword}',
        'ITEM_CURSOR1');`
      );
      const data = await client.query(`FETCH ALL IN "ITEM_CURSOR1";`);
      // Final commit
      await client.query("COMMIT;");

      const { rows } = data;
      const resObj = {
        data: rows
      };
  
      res.send({ success: true });
    } catch (e) {
      console.log("Error In ResetPwd: ", e);
      res.status(400).send({ error: e });
    }
  };
  
  module.exports= Resetpassword;