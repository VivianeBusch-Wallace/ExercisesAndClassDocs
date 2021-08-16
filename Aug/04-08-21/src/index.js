#!/usr/bin/env node
// << this is not a comment, it is a command line for shebang
// #! for triggering, then the path to the source of the env and telling it what type of application it is
// this has to be the very first line
// what is shebang: https://en.wikipedia.org/wiki/Shebang_(Unix) >>
// When a text file with a shebang is used as if it is an executable in a Unix-like operating system,
// the program loader mechanism parses the rest of the file's initial line as an interpreter directive.
// The loader executes the specified interpreter program, passing to it as an argument the path that was initially used
// when attempting to run the script, so that the program may use the file as input data.
// For example, if a script is named with the path path/to/script, and it starts with the following line
// #!/bin/sh, then the program loader is instructed to run the program /bin/sh, passing path/to/script as the first argument.
// In Linux, this behavior is the result of both kernel and user-space code.
// The shebang line is usually ignored by the interpreter, because the "#" character is a comment marker
// in many scripting languages; some language interpreters that do not use the hash mark to begin comments
// still may ignore the shebang line in recognition of its purpose.

const weather = require("./lib/weather");

const args = process.argv.slice(2);
// console.log(args);
const [city, country] = args;
weather(city, country).then(console.log).catch(console.error);
