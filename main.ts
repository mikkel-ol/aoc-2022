import chalk from "chalk";
import fs from "node:fs";
import "./extensions";

fs.readdir(`${__dirname}/calendar`, (_err, files) => {
  files.forEach((file) => {
    const solution = require(`${__dirname}/calendar/${file}`).default;

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
