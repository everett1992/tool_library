import fs from 'fs'
import { renderToStaticMarkup } from 'react-dom/server';

import home from './home';


console.log('writing...');
fs.writeFileSync('index.html', renderToStaticMarkup(home()));
