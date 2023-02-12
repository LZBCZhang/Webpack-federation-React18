const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = envVars => {
  const { env } = envVars; //check the script commands in package.json for env variable
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, envConfig);
  return config;
};
