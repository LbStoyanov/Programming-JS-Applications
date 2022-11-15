import page from './node_modules/page/page.mjs';
import{homeView} from './views/homeTemplate.js';
import {articlesView} from './views/articlesTemplate.js';
import {aboutView} from './views/aboutTemplate.js';


page('/home',homeView);
page('/article',articlesView);
page('/about',aboutView);


page.start();