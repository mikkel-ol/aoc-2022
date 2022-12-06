import * as fs from "node:fs";
import "./extensions";

fs.readdir("./calendar", (_err, files) => {
  files.forEach((file) => {
    const solution = require(`./calendar/${file}`);

    console.log(
      `Solution for day ${file.slice(0, file.indexOf("."))}`,
      solution
    );
  });
});
