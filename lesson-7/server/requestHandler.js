function handleRequest(action, req, res, next) {
    return action().then(result => {
        res.json(result);
    }).catch((error) => {
        next(error);
    });
}

function handleError(err, req, res, next) {
    console.error(err);
    res.status(500);
    res.json(err);
}

module.exports = {
    handleRequest,
    handleError
}
