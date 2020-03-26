import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import { wrap } from "@polymer/polymer/lib/utils/wrap";

/**
 * `load-iron-elements`
 * Container of  Iron Elements pulled as lazy loaded dependencies.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
    export default class
LoadCollection extends PolymerElement
{
    constructor()
    {   super();
        this.dependencies=[];
        this.wcRoot= ["8000","8081"].includes(location.port) ? '' : '/o/polymer-vaadin-portlet/webcomponents';
    }

    static get template()
    {   return html`
<template is="dom-if" if="[[ visible ]]" >

    <style>
      :host { display: block; }
      iron-component-page,paper-drawer-panel{display: none;}
      .inactive{ border: silver dotted 1px;}
      .loading{ border: blue double 1px;}
      .loaded{ border: solid black 1px;}
      .error{ border: solid red 1px;}
    </style>
    <fieldset class$="[[status]]">            
        <details>      
            <summary><input type="checkbox" disabled$="[[disabled]]" title="toggle all"on-change="onToggleAll" /> &lt;[[getTag()]]&gt;</summary>     
            <iron-ajax auto
                url="[[wcRoot]]/package-lock.json" 
                handle-as="json"
                last-response="{{packages}}"
            ></iron-ajax>
            
            <template is="dom-if" if="[[ packages ]]" >
                <template is="dom-repeat" items="[[ blend(dependencies,packages) ]]" as="pkg">
                    <div>                        
                       <input type="checkbox" disabled$="[[disabled]]"  
                            on-change="onSelect" id="cb-[[ pkg.name ]]"
                            value="[[pkg.name]]"
                            checked="{{ pkg.active }}"                         
                        />
                       <a href="[[ docs(pkg) ]]" target="_blank" >[[pkg.name]]</a>
                            [[ pkg.version ]]
                        <span inner-h-t-m-l="<[[pkg.tag]]>\t&hellip;</[[pkg.tag]]>"></span> 
                    </div>    
                </template> 
            </template> 
        </details>          
    </fieldset>    
</template>       
      `;
    }
    static get is(){ return 'load-collection'}
    static get properties()
    {
        return  { disabled: String
                , dependencies: Array
                ,    selection: { type:String, notify:true, observer:'_onSelectionChanged' }
                ,       active: { type:Boolean, value:true }
                ,      visible: { type:Boolean, value:false }
                };
    }
    ready()
    {   super.ready();
        if( !this.active )
            return this.status = "inactive";
        this.pkg2imp={};
        this.status = "loading";
        const OK = Promise.resolve(1);
        this.promise = Promise.all( this.initDependencies().map( p=> p || OK) )
            .catch( err=>
            {
                // debugger;
                // console.error( this.status ="error", this.is, err )
            })
            .finally( x=> this.status="loaded" );
    }
    getSelection(){ return this.dependencies && this.dependencies.filter( p=>p.active ).map(p=>p.name).join(",") }

    onToggleAll(ev)
    {
        [...this.shadowRoot.querySelectorAll("input[type=checkbox]")]
            .forEach( cb=> cb.checked = ev.target.checked );
        this.dependencies && this.dependencies.forEach( p=>p.active = ev.target.checked );
        this._updateSelect();
    }
    onSelect(ev)
    {
        this.dependencies.find(d=>d.name===ev.target.id.substring(3)).active = ev.target.checked;
        if( ev.target.checked )
            this.pkg2imp[ ev.target.value ]();
        this._updateSelect();
    }
    _updateSelect()
    {
        this.set("selection", this.dependencies.filter( p=>p.active ).map(p=>p.name).join(",") );
    }

    initDependencies()
    {   // override to load collection dependencies
        // if( this.initModule("@polymer/iron-ajax"                     ) ) import("@polymer/iron-ajax"                     ).catch(errback);
    }
    isDisabledByDefault(pkg)
    {   // override & return true to avoid package load without explicit enabling in UI
        // return  [   '@polymer/paper-drawer-panel'
        //         ].includes(pkg)
    }
    initModule( imp )
    {   let  pkg = (""+imp).split('"')[1]
                    .replace(/(.*node_modules\/)/ ,'')
                    .replace(/\.js/ ,'')
        , active =  !this.isDisabledByDefault(pkg) && this.checkedAttr(pkg);
        this.dependencies.push({ name:pkg,active, tag:pkg.split('/').pop() });
        this.pkg2imp[pkg] = imp;
        return active && imp();
    }
    checkedAttr(pkg)
    {
        return ( !this.selection || this.selection ==='all'
                 || this.selection.split(',')
                        .map( x=>x.replace(/\s/g,'') )
                        .includes(pkg) )?'checked' : ''
    }
    mod( pkg ){ return pkg.split('/').pop(); }
    getTag(){ return this.localName }
    docs(pkg){ return `https://www.webcomponents.org/element/${ pkg.name }` }
    blend(dependencies,packages)
    {
        if( packages )
        {
            dependencies.forEach( m=>
            {   let p = m.name.split('/').slice(0,-1).join('/');
                let d = packages.dependencies[m.name] ;
                if( d )
                    return m.version = d.version;
                d = packages.dependencies[ p ] || {};
                m.version = d ? `${p}-${d.version}` : '?';
            });
        }
        return dependencies;
    }
    // toJson(packages){return JSON.stringify(packages.dependencies)}
    _onSelectionChanged(val)
    {
        // debugger;

    }

}

window.customElements.define( LoadCollection.is, LoadCollection); // for extending by custom collections via
