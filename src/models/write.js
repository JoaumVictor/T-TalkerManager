const { writeFile } = require('fs/promises');

const write = async (obj) => {
  try {
    await writeFile('talker.json', JSON.stringify(obj));
  } catch (err) {
    console.log(err);
  }
};

module.exports = write;