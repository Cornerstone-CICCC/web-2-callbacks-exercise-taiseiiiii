const fs = require("fs");

fs.readFile("./firstname.txt", "utf-8", (err, data1) => {
  if (err) throw err;
  fs.readFile("./lastname.txt", "utf-8", (err, data2) => {
    if (err) throw err;
    fs.readFile("./age.txt", "utf-8", (err, data3) => {
      if (err) throw err;
      fs.readFile("./hobbies.txt", "utf-8", (err, data4) => {
        if (err) throw err;
        const arr = JSON.parse(data4);
        const hobbiesStr = arr.join(" and ");
        const res = `${data1} ${data2} is ${data3} years old and his hobbies are ${hobbiesStr}`;
        console.log(res);
      });
    });
  });
});
