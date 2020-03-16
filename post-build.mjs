import fs from 'fs';
import { readdirSync } from 'fs';

const builds = JSON.parse(fs.readFileSync("polymer.json").toString()).builds;

readdirSync(`./demo`)
.map( name =>
{   const txt = fs.readFileSync(`./demo/${name}`).toString();

    readdirSync('./build')
    .filter( b=> b!=="polymer.json")
    .map( build=>
    {   let  fName = `./build/${build}/demo/${name}`
        ,     stub = fs.readFileSync(`./build/${build}/index.html`).toString()
        , basePath = builds.find( b=> b.name == build ).basePath;

        stub = stub.substring( stub.indexOf("<script>") )
            .replace( /(\<\/head\>|\<body\>|\<\/body\>|\<\/html\>)/g ,"")
            .replace( /src\=\"node_modules/g ,`src="${basePath}/node_modules`)
            .replace( /src\=\"src/g ,`src="${basePath}/src`);
        fs.writeFileSync( fName, stub + txt );
    })
});
