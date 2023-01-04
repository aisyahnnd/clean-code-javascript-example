// Bad Code
import { get } from "request-promise";
import { writeFile } from "fs-extra";

get("https://en.wikipedia.org/wiki/Robert_Cecil_Martin")
  .then((body) => {
    return writeFile("article.html", body);
  })
  .then(() => {
    console.log("File written");
  })
  .catch((err) => {
    console.error(err);
  });

// Good Code
