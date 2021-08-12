module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("json_stringify", function (obj, indent=2) {
    return JSON.stringify(obj, null, indent);
  })

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
