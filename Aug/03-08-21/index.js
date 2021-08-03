// filesystems are different for every OS on the computer!

// imports >>
const fs = require("fs");
const math = require("./math"); // these are math equations

// create file
// writeFile will create or over write

// appendFile will create file
fs.appendFile("newText.txt", "I am a text from NodeJs \n", (err) => {
  if (err) throw err;
  console.log("File is done.");
});
// << this will just create a new line every time you run appendFile

// read File
fs.readFile("./longText.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// read file Sync
const data = fs.readFileSync("./longText.txt");
fs.readFileSync("./newText.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
  console.log(data.toString());
  console.log(data);
});
console.log(data.toString());
console.log("Reading sync is done.");

// rename file (and moving files)
// fs.rename("./newText.txt", "./newNameText.txt", (err, data) => {
//   if (err) throw err;
//   console.log("Rename is done.");
// });

// delete file
// const filePathName = "./something.txt";
// fs.unlink(filePathName, (err) => {
//   if (err) throw err;
//   console.log("File deleted, done ✅");
// });
// << this file will be deleted forever, not put into trash!

// copy file

// open file
// fs flags
// https://nodejs.org/docs/latest-v12.x/api/fs.html#fs_file_system_flags
fs.open("./longText.txt", "w", (err, data) => {
  if (err) throw err;
  console.log("File is opened in node now", data);
  console.log(data);
  console.log(data.length);
  console.log("data".length);
});
// w flag >> 'w': Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
// In databases and computer networking data truncation occurs when data or a data stream (such as a file)
// is stored in a location too short to hold its entire length.
// the opened file is in the memory not in hard drive?

// using the exported math functions >>
console.log(math);
let x = 3;
let y = 4;
console.log("Math: x = 3,y = 4");
console.log(`x + y = ${math.sum(x, y)}`);
console.log(`x - y = ${math.sub(x, y)}`);
console.log(`x * y = ${math.multi(x, y)}`);
