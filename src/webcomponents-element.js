import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import "@polymer/iron-ajax";
import "./load-iron-elements";
import "./load-paper-behaviors";
import "./load-paper-elements";
import "./load-vaadin-elements";

/**
 * `webcomponents-element`
 * Container of Polymer Elements and Vaadin web components pulled as lazy loaded dependencies.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class WebcomponentsElement extends PolymerElement
{
    static get template()
    {
        return html`
<template is="dom-if" if="[[ visible ]]" >
    <style>
      :host { display: block; }
    </style>
    <h2>Web Components Collections Loader</h2>
    <i>Components are pulled as lazy loaded dependencies.</i>
</template>
<load-paper-behaviors disabled$="[[disabled]]" selection=[[selection]] on-selection-changed='onCollectionChanged' class="load-collection" visible$="[[visible]]"></load-paper-behaviors>
<load-paper-elements  disabled$="[[disabled]]" selection=[[selection]] on-selection-changed='onCollectionChanged' class="load-collection" visible$="[[visible]]"></load-paper-elements>
<load-iron-elements   disabled$="[[disabled]]" selection=[[selection]] on-selection-changed='onCollectionChanged' class="load-collection" visible$="[[visible]]"></load-iron-elements>
<load-vaadin-elements disabled$="[[disabled]]" selection=[[selection]] on-selection-changed='onCollectionChanged' class="load-collection" visible$="[[visible]]"></load-vaadin-elements>
    `;
    }

    static get properties()
    {
        return  {   selection: { type: String, value: "all", notify:true, reflectToAttribute:true }
                ,    disabled: { type: String, reflectToAttribute:true }
                ,     visible: { type:Boolean, reflectToAttribute:true, value:false }
                };
    }

    ready()
    {   super.ready();
        Promise.all( [...this.shadowRoot.querySelectorAll(".load-collection")].map( el=>el.promise ) )
            .then(x=>
            {   this.status = "ready";
                document.dispatchEvent( new CustomEvent("webcomponents-element-ready", {target:this}));
            })
    }
    onCollectionChanged()
    {
        const o={};
        [...this.shadowRoot.querySelectorAll('.load-collection')]
            .map( col=> col.getSelection() ).forEach( sel=>sel.split(',').forEach( m=>o[m]=m ));

        this.set( 'selection',Object.keys(o).join(',') );
    }
}

window.customElements.define( 'webcomponents-element', WebcomponentsElement );
