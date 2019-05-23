const request = require("request");
const cheerio = require("cheerio");

request("https://www.smzdm.com/youhui/", (err, res) => {
  if (!err) {
    console.log(res.body);
  }
  const $ = cheerio.load(res.body, {
    decodeEntities: false
  });
});
