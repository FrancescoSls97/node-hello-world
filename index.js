import chalk from "chalk";
import axios from "axios";

console.log("Hello Boolean");
console.log(process.env.super_secret_key);
console.log(chalk.red("Red Log"));

axios
  .get("https://lanciweb.github.io/demo/api/pictures/")
  .then((response) => {
    //codice da eseguire se la richiesta AJAX ha successo
    console.log(response.data);
  })
  .catch((error) => {
    //se la richiesta AJAX fallisce
    console.error(error);
  });
