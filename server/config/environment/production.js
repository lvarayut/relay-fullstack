export default {
  mongo: {
    uri: `mongodb://${process.env.DB_PORT_27017_TCP_ADDR || 'localhost'}/relay-prod`
  }
};
