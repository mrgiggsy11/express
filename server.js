const express = require("express");
const app = express();

function logger(req, res, next) {
  console.log(req.method, "at", req.url);
  var now = new Date();
  if (now.getDay() === 6 || now.getDay() === 7) {
    if (now.getHours() < 9 || now.getHours() > 17) {
      res
        .status(404)
        .send(
          "Sorry we are out of service ! our working time is : Monday to Friday,  from 9 to 17"
        );
    }
  }

  next();
}
app.use(logger);
app.use("", express.static(__dirname + "/public"));

const port = 5000;
app.listen(port, () => {
  console.log(`the server is runining ${port}`);
});
