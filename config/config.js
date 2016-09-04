export const express = {
  port: process.env.PORT || 3000,
  ssl: process.env.HTTPS_PORT || 9999
};


export const database = {
  port: process.env.DB_PORT,
  name: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  account: process.env.DB_ACCOUNT
};

// export default {
//   express,
//   database,
// };
