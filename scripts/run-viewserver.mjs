import startServer from '@heswell/server-core/dist/index.mjs';
import {config} from '@heswell/viewserver/dist/index.mjs';

console.log('run-viewserver.js about to START SERVER');

startServer(config);