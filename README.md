clone the project

prerequisites: node.js, a reasonably recent version, suggest 12+

inside grid-samples 

> npm i --ignore-scripts
> npm run build
> npm run serve

if you open http://localhost/index.html you should see a grid loading instrumentPrices (needs vuu to be running )

to see a grid with local data (gives you an idea of performance diff) change url to local.html

to run against the node version of viewserver (useful to see the messaging protocol I'm currently using)
in a separate terminal, also from inside grid-samples

> npm run viewserver

then switch the browser url to node.html
