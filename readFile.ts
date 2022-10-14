import fs from 'fs';

const readFile = (filePath: string) => {
  try {
    const data = fs.readFileSync(filePath);
    console.log(data.toString());
  } catch (error) {
    console.error(`Got an error trying to read the file`);
  }
}

readFile('greetings.txt');