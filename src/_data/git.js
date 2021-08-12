const git = require("git-rev-sync");

module.exports = {
  short: git.short(),
  long: git.long(),
  branch: git.branch(),
};
