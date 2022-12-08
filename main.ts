import chalk from "chalk";
import fs from "node:fs";
import "./extensions";

fs.readdir(`${__dirname}/calendar`, (_err, files) => {
  files.forEach((file) => {
    const solution = require(`${__dirname}/calendar/${file}`).default;

    const headline = `Solution for day ${file.slice(0, file.indexOf("."))}`
      .split(" ")
      .map((x, i) =>
        i % 3 === 0
          ? chalk.green(x)
          : i % 3 === 1
          ? chalk.red(x)
          : chalk.white(x)
      )
      .join(" ");

    console.log(
      `${chalk.bold(headline)} 🎄
      Part 1: ${solution[0]}
      Part 2: ${solution[1]}
      `
    );
  });
});
