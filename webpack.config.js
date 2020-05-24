const path = require("path");

module.exports = {
    mode:'development',
  entry: path.join(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        use: {
          loader: "babel-loader",
          options :{

            presets : ['@babel/preset-react'],
        },
        },
       exclude : /node_modules/
      },
    ],
  },
};
