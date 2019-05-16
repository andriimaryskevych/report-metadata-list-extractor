exports.handler = (event, context, callback) => {
    try {
        callback(null, [
            {
                id: 1,
                createdAt: 1557989832,
                dateFrom: 1557989832,
                dateTo: 1557989832
            },
            {
                id: 2,
                createdAt: 1557989832,
                dateFrom: 1557989832,
                dateTo: 1557989832
            },
            {
                id: 3,
                createdAt: 1557989832,
                dateFrom: 1557989832,
                dateTo: 1557989832
            }
        ]);
    } catch (error) {
        console.log('Error occured', error);

        callback(error, null);
    }
};
