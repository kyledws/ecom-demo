import { createServer } from "http";
import { readFile } from "fs/promises";

const HTTP_STATUS_OK = 200;

const HTTP_NOT_FOUND = 404;

const PORT = 8125;

const server = createServer(async (req, res) => {
  const request = /\/tours\/(?<type>\w+)\.js$/.exec(req?.url ?? "");
  if (request?.groups?.type) {
    const file = await readFile(`./dist/${request.groups.type}.js`, {
      encoding: "utf8",
    });
    res.writeHead(HTTP_STATUS_OK, { "Content-Type": "application/json" });
    res.end(file, "utf8");
  } else {
    res.writeHead(HTTP_NOT_FOUND);
    res.end();
  }
});

server.listen(PORT);
