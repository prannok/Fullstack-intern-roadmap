import * as readline from "readline";

interface User {
  name: string;
  age: number;
}

const readInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readInterface.question("ชื่อ: ", (name: string) => {
  readInterface.question("อายุ: ", (age: string) => {
    const user: User = {
      name,
      age: Number(age),
    };
    console.log(`สวัสดี ${user.name} อายุ ${user.age} ปี`);
    readInterface.close();
  });
});
