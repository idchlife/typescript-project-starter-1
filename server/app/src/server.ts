import "reflect-metadata";
import bootstrap from "./config/bootstrap";

async function init() {
  const app = await bootstrap();

  app.listen(10060);
  console.log("APPLICATION SERVER LISTENING ON 10060");
}

init();