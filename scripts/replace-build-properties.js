const replace = require("replace");
var package_json = require("../package.json");

replace({
  regex: "/nuxtfiles/",
  replacement: "nuxtfiles/",
  paths: ["./dist/"],
  recursive: true,
  silent: false
});

replace({
  regex: "/assets/",
  replacement: "nuxtfiles/",
  paths: ["./dist/"],
  recursive: true,
  silent: false
});

replace({
  regex: "(href|src|\"href\"|\"src\")=\"/",
  replacement: "$1=\"../",
  paths: ["./dist/"],
  recursive: true,
  silent: false
});

replace({
  regex: "(href|src|\"href\"|\"src\"):\"/",
  replacement: "$1:\"../",
  paths: ["./dist/"],
  recursive: true,
  silent: false
});

replace({
  regex: /\r?\n|\r/g,
  replacement: "",
  paths: ["./cordova/config.xml"],
  recursive: false,
  silent: false
});

replace({
  regex: /\s\s+/g,
  replacement: "",
  paths: ["./cordova/config.xml"],
  recursive: false,
  silent: false
});

replace({
  regex: "\<name\>(.|\s)*\<\/name\>",
  replacement: "<name>" + package_json.app.name + "</name>",
  paths: ["./cordova/config.xml"],
  recursive: false,
  silent: false
});

replace({
  regex: "\<description\>(.|\s)*\<\/description\>",
  replacement: "<description>" + package_json.app.description + "</description>",
  paths: ["./cordova/config.xml"],
  recursive: false,
  silent: false
});

replace({
  regex: "\<author(.*)\>(.|\s)*\<\/author\>",
  replacement: "<author email=\"" + package_json.author.email + "\" href=\"" + package_json.author.url + "\">" + package_json.author.name + "</author>",
  paths: ["./cordova/config.xml"],
  recursive: false,
  silent: false
});
