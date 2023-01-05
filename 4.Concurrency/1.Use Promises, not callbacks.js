// Bad Code
import { writeFile } from "fs";

get(
  "https://en.wikipedia.org/wiki/Robert_Cecil_Martin",
  (requestErr, response, body) => {
    if (requestErr) {
      console.error(requestErr);
    } else {
      writeFile("article.html", body, (writeErr) => {
        if (writeErr) {
          console.error(writeErr);
        } else {
          console.log("File written");
        }
      });
    }
  }
);

// Good Code
import { get } from "request";
import { writeFile } from "fs";

get("https://en.wikipedia.org/wiki/Robert_Cecil_Martin")
  .then((response) => {
    return writeFile("article.html", response);
  })
  .then(() => {
    console.log("File written");
  })
  .catch((err) => {
    console.error(err);
  });
