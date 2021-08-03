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
// if the path of the new file is different it will move the file to that location (still got to test this out)

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

// fs.open("./hello.txt", "wx", (err, data) => {
//   //   if (err) throw err;
//   let text = "this is the text to be written";
//   //   let buffer = new Buffer("text to be written in the file");

//   fs.write(data, text, (err) => {
//     if (err) throw err;
//     console.log("<< this text was written with fs.write inside fs.open!");
//     // console.log(fd);
//     console.log(data);
//     console.log(data.length);
//   });
// });

// w flag >> 'w': Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
// In databases and computer networking data truncation occurs when data or a data stream (such as a file)
// is stored in a location too short to hold its entire length.
// the opened file is in the memory not in hard drive?

// fs.read() and fs.write()
// how to read the content from an opened file or write content to the opened file:

// The fs.read() and fs.write() functions share the same parameters:
// fd:
// The fs.open() method’s callback file descriptor
// buffer:
// The buffer used to either hold data to be written or appended, or read
// offset:
// The offset where the input/output (I/O) operation begins in the buffer
// length:
// The number of bytes to read or write in the buffer
// position:
// Position in the file where to begin reading or writing.
// callback:
// The callback functions have three arguments:
// err: An error, if operation failed
// bytes: Bytes read (or written)
// buffer: The buffer.

// using the exported math functions >>
console.log(math);
let x = 3;
let y = 4;
console.log("Math: x = 3,y = 4");
console.log(`x + y = ${math.sum(x, y)}`);
console.log(`x - y = ${math.sub(x, y)}`);
console.log(`x * y = ${math.multi(x, y)}`);

// instead of throw error can also write?:
// if (err) {
//   return console.error(err);
// }
