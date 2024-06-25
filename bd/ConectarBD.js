require('dotenv').config();
class ConectarBD{
    constructor(){
        this.conexion=null;
        this.mysql=require("mysql2/promise");
    }
    async ConectarMySql(){
      try {
        this.conexion=await this.mysql.createConnection({
            host:process.env.MYSQL_ADDON_HOST,
            user:process.env.MYSQL_ADDON_USER,
            password:process.env.MYSQL_ADDON_PASSWORD,
            database:process.env.MYSQL_ADDON_DB,
            port:process.env.MYSQL_ADDON_PORT
        });
        console.log("Conexión creada en MySql");
        
      } catch (error) {
        console.error("Error al conectar con MySql" +error);
      }
    }
    async cerrarConeccion(){
      try {
        await this.conexion;
        console.log("Desconeción de MySql");
      } catch (error) {
        console.error("Error al desconectar de MySql" +error);
      }
    }
}
module.exports=ConectarBD;