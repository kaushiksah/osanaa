const { Pool } = require("pg");
var config = require ("config");

module.exports= async(req,res) => {
  try {
    console.log("config",{config});
    const pool = new Pool(config.postgres);
    console.log("pool",{pool});
    pool.on("error", (err) => {
      console.log("Error in connection pool: ", err);
    });
    //const poolConnect = await pool.connect();
    console.log("OSANA database connected");
    //return poolConnect;
    return pool;
  } catch (err) {
    console.error("error while connecting OSANA database",err);
    return null;
  }
}