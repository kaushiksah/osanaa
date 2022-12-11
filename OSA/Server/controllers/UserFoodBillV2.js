const UserFoodBillV2 = async (req, res) => {
    const {
      body: { Fname, 
        Lname , 
        Email, 
        OSAEmail, 
        spoucename,
        childrenname,
        addressln1,
        addressln2,
        city,
        state,
        zip,
        country,
        OSAMember,
        subsriptionAmount,
        SatVegInd,
        SatVeg,
        SatNonVegInd,
        SatNonVeg,
        SunVegInd,
        SunVeg,
        SunNonVegInd,
        SunNonVeg,
        WeekEndVegInd,
        WeekEndVeg,
        WeekEndNonVegInd,
        WeekndNonVeg,
        SatVegPrice,
        SatNonVegPrice,
        SunVegPrice,
        SunNonVegPrice,
        WeekEndVegPrice,
        WeekndNonVegPrice,
        PaymentOption,
        TotalBillingAmount
    }
    } = req;
 
try {
   const client = global.pg_client;
      console.log(req.body);
      console.log(client);
      await client.query("BEGIN;");
      await client.query(
        `SELECT "osa"."Fn_UserFoodBillV2"(
          '${User}',
          '${Fname}',
          '${Lname}',
          '${Email}',
          '${OSAEmail}',
          '${spoucename}',
          '${childrenname}',
          '${addressln1}',
          '${addressln2}',
          '${city}',
          '${state}',
          '${zip}',
          '${country}',
          '${OSAMember}',
          '${subsriptionAmount}',
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
      // await pgclient.release();
      res.send({ success: true });
    } catch (e) {
      console.log("Error In UserFoodBillV2 :", e);
      res.status(400).send({ error: e });
    }
  };
  
  module.exports = UserFoodBillV2;
  