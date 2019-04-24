"use strict";
const release = "demo-002";
process.env.RELEASE_VERSION = release;
module.exports = {
  NODE_ENV: '"production"',
  RELEASE_VERSION: `"${release}"`
};
