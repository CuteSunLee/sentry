"use strict";
const release = "demo-003";
process.env.RELEASE_VERSION = release;
module.exports = {
    NODE_ENV: '"production"',
    RELEASE_VERSION: `"${release}"`
};
