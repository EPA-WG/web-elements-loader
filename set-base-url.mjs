/**
 * set-base-url.mjs sets URL for deployed build by
 * overriding of basePath in polymer.json. Examples:
 * `node set-base-url.mjs https://cdn.xml4jquery.com/web-elements-loader/build/`
 * `node set-base-url.mjs https://cdn.xml4jquery.com/o/polymer13-vaadin15-portlet/web-elements-loader/build/`
 *
 * Without arguments the URL set to "/web-elements-loader/build/"
 */
import       fs from 'fs';
let         txt = fs.readFileSync('./polymer.json.template.json')
,   polymerJson = JSON.parse(txt) ;
const  basePath = process.argv.length > 2 ? process.argv.pop() : "/web-elements-loader/build/";

polymerJson.builds.forEach( build=> build.basePath = basePath+ build.name );

fs.writeFileSync( 'polymer.json', JSON.stringify(polymerJson) );
