// async & await , callback , promises
// ref video : https://youtu.be/bWaucYA1YRI

const obj = [
  { name: "rudra", age: "16" },
  { name: "naman", age: "14" },
];

function printData() {
  setTimeout(() => {
    let output = "";
    obj.forEach((obj) => {
      output += `<li>${obj.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      obj.push(data);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject("error");
      }
    }, 3000);
  });
}

async function start() {
  await createData({ name: "divya", age: "25" });
  printData();
}
start();

/*
With only promise

function createData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      obj.push(data);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject("error");
      }
    }, 3000);
  });
}
createData({ name: "divya", age: "25" })
  .then(printData)
  .catch(() => console.log("error hai"));
*/

/* 
With callback technique

function createData(data, callback) {
  setTimeout(() => {
    obj.push(data);
    callback(obj);
  }, 3000);
}
 */
