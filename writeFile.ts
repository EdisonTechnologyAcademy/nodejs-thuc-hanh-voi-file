import fs from 'fs';

function createFile() {
  try {
    const csvHeaders = 'name,quantity,price'
    fs.writeFileSync('groceries.csv', csvHeaders);
  } catch (error) {
    console.error(`Got an error trying to create to a file`);
  }
}

function addGroceryItem(name: string, quantity: number, price: number) {
  try {
    const csvLine = `\n${name},${quantity},${price}`
    fs.writeFileSync('groceries.csv', csvLine, { flag: 'a' });
  } catch (error) {
    console.error(`Got an error trying to write to a file`);
  }
}

createFile();
addGroceryItem('eggs', 12, 1.50);
addGroceryItem('nutella', 1, 4);