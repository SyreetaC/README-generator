const fs = require("fs");

const writeToFile = (fileName, data) => {
  const errorHandling = (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Readme file generated!");
    }
  };

  fs.writeFile(fileName, data, errorHandling);
};

module.exports = writeToFile;
