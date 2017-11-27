const MONGO_DB_NAME = 'test';

module.exports = {
    MONGO_URL: `mongodb://codeacademy:2PpaNSPlh3C9pylF@cluster0-shard-00-00-k2lgb.mongodb.net:27017,cluster0-shard-00-01-k2lgb.mongodb.net:27017,cluster0-shard-00-02-k2lgb.mongodb.net:27017/${MONGO_DB_NAME}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`,
}