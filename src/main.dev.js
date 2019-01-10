// require("@babel/runtime");
// require("@babel/register");
require("webpack-hot-middleware/client?reload=true");
require("./style.css");
require("./index.html");

import Espresso from './Espresso';

/**
 * Espresso Object
 */
const espresso = new Espresso();