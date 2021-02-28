const path = require('path');  
const HtmlWebpackPlugin = require('html-webpack-plugin');  
const mode = "development";      //        <- my attempt
const dev = mode === "production";
  
module.exports = {  
   entry: './main.js',  
   output: {  
      path: path.join(__dirname, '/bundle'),  
      filename: 'index_bundle.js'  
   },  
   devServer: {  
      inline: true,  
      port: 8080  
   },  
   module: {  
      rules: [  
         {  
            test: /\.jsx?$/,  
            exclude: /node_modules/,  
        use: {  
              loader: "babel-loader",  
            
            }  
         }  
      ]  
   }, 
   mode, 
   plugins:[  
      new HtmlWebpackPlugin({  
         template: './index.html'  
      })  
   ]  ,
   
} 