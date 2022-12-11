const InsertRegistationForm = async (req, res) => {
  const {
    body: {
      Fname,
      Lname,
      EmailAddress,
      OSAEmail,
      SpouseName,
      Childrenname,
      Addressln1,
      Addressln2,
      City,
      State,
      Zip,
      Country,
      OSAMember,
      SubsriptionAmount,
      RegistrationDateTime,
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
    },
  } = req;
  console.log("Test", {
    Fname,
    Lname,
    EmailAddress,
    OSAEmail,
    SpouseName,
    Childrenname,
    Addressln1,
    Addressln2,
    City,
    State,
    Zip,
    Country,
    OSAMember,
    SubsriptionAmount,
    RegistrationDateTime,
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
  });
  try {
    const client = global.pg_client;
    // console.log(req.body);
    // console.log(client);
    await client.query("BEGIN;");
    await client.query(
      `SELECT "osa"."Fn_Order"(
          '${Fname}',
          '${Lname}',
          '${EmailAddress}',
          '${OSAEmail}',
          '${SpouseName}',
          '${Childrenname}',
          '${Addressln1}',
          '${Addressln2}',
          '${City}',
          '${State}',
          '${Zip}',
          '${Country}',
          '${OSAMember}',
          '${SubsriptionAmount}',
          '${RegistrationDateTime}',
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
    console.log("Error In InsertRegistationForm :", e);
    res.status(400).send({ error: e });
  }
};

module.exports = InsertRegistationForm;
