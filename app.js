// const http = require("http");
const express = require("express");
const app = express();
// const router = require("./routes.js")
// console.log(router.someText);
// const server = http.createServer(router.handlre )

app.use((req, res, next) => {
  res.send("hi this is test");
  console.log("next =>", next); 
  next();
});
// const server = http.createServer(app);
// server.listen(80, () => {
//   console.log("run server port 80");
// });
app.listen(3000,()=>{
    console.log('run server port 3000');
})
