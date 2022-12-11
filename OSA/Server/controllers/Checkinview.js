const Checkinview = async (req, res) => {
    const client = global.pg_client;
    console.log(req.body);
    console.log(client);
    const {
      query: { FirstName = "" ,
               LastName = "",
               EmailAddress = ""
               }
    } = req;
    try {
      await client.query("BEGIN;");
      await client.query(
        `SELECT "osa"."Proc_CheckinEventListView"(
          '${FirstName}',
          '${LastName}',
          '${EmailAddress}',
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
      console.error("Error in CheckinEventList: ", e);
    }
  };
  
  module.exports= Checkinview;