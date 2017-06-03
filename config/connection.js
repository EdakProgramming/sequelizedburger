var Sequelize = require('sequelize');

function sequelize() {
    var se
    if (process.env.JAWSDB_URL) {
        var sequelize = new Sequelize("vuhvgnn7e6962s37", "ncfpzdi3dkd3c7ei", "o9vhxfmumt0oj6td", {
            host: "vvfv20el7sb2enn3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
            dialect: "mysql",
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            }
        });
    } else {
        var sequelize = new Sequelize('sequelizedburger_db', 'root', 'root', {
            host: 'localhost',
            dialect: 'mysql',
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            }
        });
    }
}

module.exports = sequelize();
