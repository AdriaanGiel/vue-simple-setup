### A simple setup template for vue.js
1. Clone repository
2. Run npm install to get all dependencies
3. Run npm run watch to keep track of your code
4. Start coding

For a easy webpack config I am using Laravel-mix. Link to package: https://github.com/JeffreyWay/laravel-mix


If you use a different file structure, don't forget to change paths in the webpack.mix.js file.

Use npm run dev to compile code

Use npm run watch to keep track of file changes

**notes:**
I use stylus so, if you use something else you can just remove that directory. Also remove the stylus pipe from 
webpack.mix.js