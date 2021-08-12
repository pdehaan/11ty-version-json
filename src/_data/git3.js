const git = require("git-rev-sync");

module.exports = {
  version(pkg = {}) {
    return {
      name: pkg?.name,
      version: pkg?.version,
      homepage: pkg?.homepage,
      repository: pkg?.repository,
      short: git.short(),
      branch: git.branch(),
      // Current date/time as string.
      timestamp: new Date(),
    };
  },
};
