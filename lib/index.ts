import fs from 'fs'
import { renderToStaticMarkup } from 'react-dom/server';

import home from './home';


console.log('writing...');
fs.writeFileSync('public/index.html', renderToStaticMarkup(home()));
