const RegistrationForm = async (req, res) => {
    const {
      body: {
    EmailAddress,
	OSAEmail ,
	SpouseName  ,
	Childrenname  ,
	Phone ,
	Addressln1 ,
	Addressln2  ,
	City  ,
	State  ,
	ZipCode ,
	Country  ,
	OSAMember  ,
	SubsriptionAmount ,
	RegistrationDateTime ,
	SatVegInd  ,
	SatVeg ,
	SatNonVegInd  ,
	SatNonVeg ,
	SunVegInd ,
	SunVeg ,
	SunNonVegInd  ,
	SunNonVeg ,
	WeekEndVegInd ,
	WeekEndVeg ,
	WeekEndNonVegInd  ,
	WeekndNonVeg ,
	SatVegPrice ,
	SatNonVegPrice ,
	SunVegPrice ,
	SunNonVegPrice ,
	WeekEndVegPrice ,
	WeekndNonVegPrice ,
	PaymentOption,
	TotalBillingAmount,
  CheckINStatus
      },
    } = req;
    console.log("Test", {
        EmailAddress,
        OSAEmail ,
        SpouseName  ,
        Childrenname  ,
        Phone ,
        Addressln1 ,
        Addressln2  ,
        City  ,
        State  ,
        ZipCode ,
        Country  ,
        OSAMember  ,
        SubsriptionAmount ,
        RegistrationDateTime ,
        SatVegInd  ,
        SatVeg ,
        SatNonVegInd  ,
        SatNonVeg ,
        SunVegInd ,
        SunVeg ,
        SunNonVegInd  ,
        SunNonVeg ,
        WeekEndVegInd ,
        WeekEndVeg ,
        WeekEndNonVegInd  ,
        WeekndNonVeg ,
        SatVegPrice ,
        SatNonVegPrice ,
        SunVegPrice ,
        SunNonVegPrice ,
        WeekEndVegPrice ,
        WeekndNonVegPrice ,
        PaymentOption,
        TotalBillingAmount,
        CheckINStatus
    });
    try {
      const client = global.pg_client;
      // console.log(req.body);
      // console.log(client);
      await client.query("BEGIN;");
      await client.query(
        `SELECT "osa"."Fn_Event_Registrationform"(
            '${EmailAddress}',
            '${OSAEmail}',
            '${SpouseName}',
            '${Childrenname}',
            '${Phone}',
            '${Addressln1}',
            '${Addressln2}',
            '${City}',
            '${State}',
            '${ZipCode}',
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
            '${TotalBillingAmount}',
            '${CheckINStatus}',
            'ITEM_CURSOR'
            );`
      );
      const data = await client.query(`FETCH ALL IN "ITEM_CURSOR";`);
      // Final commit
      await client.query("COMMIT;");
      // await pgclient.release();
      const { rows } = data;
      const resObj = {
        data: rows,
        success: true
      };
      res.send(resObj);
    } catch (e) {
      console.log("Error In RegistrationForm :", e);
      res.status(400).send({ error: e });
    }
  };
  
  module.exports = RegistrationForm;
  