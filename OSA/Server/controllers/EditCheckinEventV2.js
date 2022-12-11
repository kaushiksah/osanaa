const EditCheckinEventV2 = async (req, res) => {
    const {
      body: {
        EmailAddress = "" ,
        SatVegInd ="",
        SatVeg="",
        SatNonVegInd="",
        SatNonVeg="",
        SunVegInd="",
        SunVeg="",
        SunNonVegInd="",
        SunNonVeg="",
        WeekEndVegInd="",
        WeekEndVeg="",
        WeekEndNonVegInd="",
        WeekndNonVeg="",
        SatVegPrice="",
        SatNonVegPrice="",
        SunVegPrice="",
        SunNonVegPrice="",
        WeekEndVegPrice='',
        WeekndNonVegPrice="",
        PaymentOption="",
        TotalBillingAmount=""}
    } = req;
  
    try {
        const client = global.pg_client;
        console.log(req.body);
        console.log(client);
      await client.query("BEGIN;");
      await client.query(
        `SELECT "osa"."Fn_EditOsanaCheckinEventV2"(
        '${EmailAddress}',
        '${SatVegInd}',
        '${SatVeg}',
        '${SatNonVegInd}',
        '${SatNonVeg}',
        '${SunVegInd}',
        '${SunVeg}',
        '${SunNonVegInd}',
        '${SunNonVeg}',
        '${WeekEndVegInd}',
        '${WeekEndVeg}',
        '${WeekEndNonVegInd}',
        '${WeekndNonVeg}',
        '${SatVegPrice}',
        '${SatNonVegPrice}',
        '${SunVegPrice}',
        '${SunNonVegPrice}',
        '${WeekEndVegPrice}',
        '${WeekndNonVegPrice}', 
        '${PaymentOption}',
        '${TotalBillingAmount}'
        );`
      );
      // Final commit
      await client.query("COMMIT;");
  
      res.send({ success: true });
    } catch (e) {
      console.log("Error In UpdateTable: ", e);
      res.status(400).send({ error: e });
    }
  };
  
  module.exports= EditCheckinEventV2;
  