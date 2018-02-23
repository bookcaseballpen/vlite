const path = require('path');

module.exports = {
  entry: "./src/main.js", 

  output: {

    path: path.resolve(__dirname, "dist"), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)

    filename: "vlite.js", // string
    // the filename template for entry chunks

  }
}