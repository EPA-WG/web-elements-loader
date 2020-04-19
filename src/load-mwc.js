import LoadCollection from './load-collection';
/**
 * `load-material-wc`
 * Container of  material Web Components pulled as lazy loaded dependencies.
 *
 * @customElement
 * @polymer
 * @demo demo/material-web-components-demo.html
 */
class LoadMaterialWC extends LoadCollection
{

    static get is(){ return 'load-mwc'}
    docs(pkg){ let n=pkg.name.split('/').pop(); return `https://github.com/vaadin/${ n }` }
    isDisabledByDefault(pkg)
    {
        // return  [   '@vaadin/vaadin/vaadin'
        //         ].includes(pkg)
    }
    initDependencies()
    {   const init= i => this.initModule(i);
        return [
        init(x=>import('@material/mwc-icon/mwc-icon')),
        init(x=>import('@material/mwc-button/mwc-button')),
        init(x=>import('@material/mwc-checkbox')),
        init(x=>import('@material/mwc-formfield')),
        ]
    }

}

window.customElements.define( LoadMaterialWC.is, LoadMaterialWC);
