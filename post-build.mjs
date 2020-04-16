import fs from 'fs';
import { readdirSync } from 'fs';

const builds = JSON.parse(fs.readFileSync("polymer.json").toString()).builds
, buildNames = readdirSync('./build').filter( b=> b!=="polymer.json");

buildNames.map( build=>
    {   let stubName = `./build/${build}/index.html`
        ,       stub = fs.readFileSync(stubName).toString()
        ,   basePath = builds.find( b=> b.name == build ).basePath;

        stub = stub.substring( stub.indexOf("<script>") )
            .replace( /(\<html\>|\<head\>|\<\/head\>|\<body\>|\<\/body\>|\<\/html\>)/g ,"")
            .replace( /src\=\"node_modules/g ,`src="${basePath}/node_modules`)
            .replace( /src\=\"src/g ,`src="${basePath}/src`)
            .replace( /define\(\w*\[\w*\'src/g ,`define(['${basePath}/src`)
            .replace( /.indexOf\(\"\:\/\/\"\)/ ,`.indexOf("://")&&b.indexOf("/")`) // define( absUrl ) bug fix
        ;
        fs.writeFileSync( stubName, stub );
    });

// prefix demo/* with build/*/index.html
readdirSync(`./demo`)
.filter( name => name.endsWith('.html') )
.map( name =>
{   const txt = fs.readFileSync(`./demo/${name}`).toString();

    buildNames.map( build=>
    {   let  fName = `./build/${build}/demo/${name}`
        , stubName = `./build/${build}/index.html`
        ,     stub = fs.readFileSync(stubName).toString();
        fs.writeFileSync( fName, "<!DOCTYPE html>"+stub + txt );
    })
});

fs.copyFileSync('package-lock.json', 'build/package-lock.json');