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
import { get } from "request-promise";
import { writeFile } from "fs-promise";

async function getCleanCodeArticle() {
  try {
    const response = await get(
      "https://en.wikipedia.org/wiki/Robert_Cecil_Martin"
    );
    await writeFile("article.html", response);
    console.log("File written");
  } catch (err) {
    console.error(err);
  }
}
