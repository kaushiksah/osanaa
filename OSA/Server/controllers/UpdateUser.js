const UpdateUser = async (req, res) => {
    const {
      body: {
        Uid = ""}
    } = req;
  
    try {
        const client = global.pg_client;
        console.log(req.body);
        console.log(client);
      await client.query("BEGIN;");
      await client.query(
        `SELECT "osa"."Fn_UpdateOsana"('${Uid}');`
      );
      // Final commit
      await client.query("COMMIT;");
  
      res.send({ success: true });
    } catch (e) {
      console.log("Error In UpdateUser: ", e);
      res.status(400).send({ error: e });
    }
  };
  
  module.exports= UpdateUser;
  