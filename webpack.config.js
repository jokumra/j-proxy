const path = require("path");

module.exports = {
 mode: 'development',
 entry: {
   vendor: ['styled-components'],
   images: '../j-service/client/src/app.jsx'
//   descriptions: '../m-service/client/index.jsx',
 //  reviews: '../v-service/client/app.jsx',
  // morehomes: '../a-service/client/MoreHomes.jsx'
 },
 externals: {
   'styled-components': 'styled'
 },
 module: {
   rules: [
     {
       test: /\.jsx?/,
       exclude: /node_modules/,
       use: {
         loader: 'babel-loader',
         options: {
           presets: ['@babel/preset-react', '@babel/preset-env']
         }
       }
     },
     {
       test: /\.css$/,
       loader: ['style-loader', 'css-loader']
     },
     {
       test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
       use: {
         loader: 'url-loader',
         options: {
           limit: 100000,
           name: '[name].[ext]'
         }
       }
     }
   ]
 },
 output: {
   filename: '[name].js',
   path: path.resolve(__dirname, 'public'),
   chunkFilename: '[id].[chunkhash].js'
 }
};
