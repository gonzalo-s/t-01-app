import "dotenv/config";

export default {
  expo: {
    ...require("./app.json").expo,
    extra: {
      WS_HOST: process.env.WS_HOST,
      WS_PORT: process.env.WS_PORT,
    },
  },
};
