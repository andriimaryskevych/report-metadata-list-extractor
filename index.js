var sql = require("mssql");

var config = {
    user: 'nodejsteam2',
    password: 'HelloWorld!',
    server: 'reports-db.cfgf8dz2qitj.eu-central-1.rds.amazonaws.com',
    database: 'dbo.reports-db'
};

exports.handler = async (event, context) => {
    try {
        console.log('Getting list of all reports');

        let query = `SELECT * FROM ReportsMetadata`;
        let pool = await sql.connect(config);
        let response = (await pool.request().query(query)).recordset;

        console.log(`Mapping ${response.length} values`);

        const mappedValues = JSON.stringify(response.map(item => ({
            id: item.ID,
            creationDate: item.CreatedDate,
            dateFrom: item.ReportFrom,
            dateTo: item.ReportTo
        })));

        console.log('Response', mappedValues);

        return mappedValues;
    } catch (error) {
        console.log('Error occured', error);

        return error;
    }
};
