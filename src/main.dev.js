// require("@babel/runtime");
// require("@babel/register");
//require("webpack-hot-middleware/client?reload=true");
require("./style.css");
require("./index.html");

import Espresso from './Espresso';

let espresso = window.espresso = new Espresso();

/**
 * Espresso Object
 */
export default espresso;