import LoadCollection from './load-collection';
/**
 * `load-material-wc`
 * Container of  material Web Components pulled as lazy loaded dependencies.
 *
 * @customElement
 * @polymer
 * @demo demo/material-web-components-demo.html
 */
class LoadIonic extends LoadCollection
{

    static get is(){ return 'load-ionic'}
    docs(pkg){ let n=pkg.name.split('/').pop(); return `https://github.com/vaadin/${ n }` }
    isDisabledByDefault(pkg)
    {
        // return  [   '@vaadin/vaadin/vaadin'
        //         ].includes(pkg)
    }
    initDependencies()
    {   const init= i => this.initModule(i);
        return [
        init(x=>import('@ionic-native/action-sheet'                )),
        ]
    }

}

window.customElements.define( LoadIonic.is, LoadIonic);
