import fs from 'fs';
// console.log(" Synchronous Code"); //top level code

// setImmediate(() => {
//     console.log(" setImmediate (Event Loop: Check Phase)");
// });

// process.nextTick(() => {
//     console.log(" process.nextTick (Microtask Queue)");
// });


fs.readFile('sample.txt', 'utf-8', function (err, data) {
  console.log("1. I/O Callback Finished (File Read)");

  setTimeout(() => {
    console.log("4. setTimeout (Event Loop: Timers Phase)");
  }, 0);

  setImmediate(() => {
    console.log("3. setImmediate (Event Loop: Check Phase)");
  });

  process.nextTick(() => {
    console.log("2. process.nextTick (Microtask VIP)");
  });
});