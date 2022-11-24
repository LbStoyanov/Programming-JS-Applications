import page from '../node_modules/page/page.mjs';
import { renderNavigation } from './middlewares/navigationRender.js';

page(renderNavigation);

page.start();