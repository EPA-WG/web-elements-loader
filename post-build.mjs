import fs from 'fs';
import { lstatSync, readdirSync } from 'fs';


readdirSync(`./demo`)
.map( name =>
{   const txt = fs.readFileSync(`./demo/${name}`).toString();

    readdirSync('./build')
    .filter( b=> b!=="polymer.json")
    .map( build=>
    {   let fName = `./build/${build}/demo/${name}`
        ,    stub = fs.readFileSync(`./build/${build}/index.html`).toString();

        stub = stub.substring( stub.indexOf("<script>"))
                .replace( /(\<\/head\>|\<body\>|\<\/body\>|\<\/html\>)/g ,"");
        fs.writeFileSync( fName, stub + txt );
    })
});
