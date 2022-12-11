const EventPersonaldetails = async (req, res) => {
    const {
      body: { EmailAddress, 
        OSAEmail, 
        SpouseName , 
        Childrenname, 
        Addressln1,
        Addressln2 ,
        City,
        State,
        Zip,
        Country,
        OSAMember
    }
    } = req;
    console.log("Test", {
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
        OSAMember
    });
    try {
      const client = global.pg_client;
      // console.log(req.body);
      // console.log(client);
      await client.query("BEGIN;");
      await client.query(
        `SELECT "osa"."Fn_Event_Personaldetails_Registration"(
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
          '${OSAMember}'
          );`
      );
      
      // Final commit
      await client.query("COMMIT;");
      // await pgclient.release();
      res.send({ success: true });
    } catch (e) {
      console.log("Error In EventPersonaldetails :", e);
      res.status(400).send({ error: e });
    }
  };
  
  module.exports = EventPersonaldetails;
  