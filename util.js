const fs = require("fs");
const path = require("path");

const severDir = "server";
const finalDir = "appsscript";
const distDir = "dist";
const htmlFile = "index.html";

path.resolve;
console.log("__dirname", path.resolve(__dirname, distDir));
fs.copyFileSync(
  path.resolve(__dirname, distDir, htmlFile),
  path.resolve(__dirname, finalDir, htmlFile)
);

const dir = fs.readdirSync(path.resolve(__dirname, severDir));

dir.forEach((file) => {
  fs.copyFileSync(
    path.resolve(__dirname, severDir, file),
    path.resolve(__dirname, finalDir, file)
  );
});
