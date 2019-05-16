exports.handler = (event, context, callback) => {
    try {
        callback(null, 'Report extractor');
    } catch (error) {
        console.log('Error occured', error);

        callback(error, null);
    }
};
