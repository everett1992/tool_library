#!/usr/bin/env ts-node

import fs from 'fs'
import { renderToStaticMarkup } from 'react-dom/server';

import home from './home';

const [output] = process.argv.slice(2);

console.log(`writing ${output}...`);
fs.writeFileSync(output, renderToStaticMarkup(home()));
