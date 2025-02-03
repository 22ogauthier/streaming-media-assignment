const fs = require('fs'); // pull in the file system module
const path = require('path');

const getIndex = (request, response, filename) => {

    //used ChatGPT to help learn how to combine filenames into a file path as well as what the difference between path.resolve and fs.readFileSync is
    const filePath = path.resolve(__dirname, '../client', filename);
    const index = fs.readFileSync(filePath, 'utf8');

    console.log(`Trying to read file: ${filePath}`);
    if (!fs.existsSync(filePath)) {
        console.error('File not found:', filePath);
    }

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(index);
    response.end();
};

module.exports.getIndex = getIndex;
