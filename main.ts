import chalk from "chalk";
import * as fs from "node:fs";
import "./extensions";

fs.readdir("./calendar", (_err, files) => {
  files.forEach((file) => {
    const solution = require(`./calendar/${file}`).default;

    const headline = chalk.underline(
      `Solution for day ${file.slice(0, file.indexOf("."))}`
    );

    console.log(
      `${headline}
      Part 1: ${solution[0]}
      Part 2: ${solution[1]}
      `
    );
  });
});
