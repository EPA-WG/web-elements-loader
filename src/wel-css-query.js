export default class WelCssQuery extends HTMLElement
{   //   native binding:
    //      <wel-css-query src="#cornerButton" dst="#menu1" dstprop="anchor" ></wel-css-query>
    //   polymer binding:
    //      <wel-css-query json='["from","strings","array"]' value="{{ demoValue::change }}"></wel-css-query>
    static get observedAttributes(){ return ['src','dst','srcprop','dstprop'] }
    connectedCallback()
    {   let  a = x=>x && this.getAttribute(x)
        ,    $ = x=>document.querySelector(x)
        ,    s = a('src'    )
        ,   sp = a('srcprop')
        ,    d = a('dst'    )
        ,   dp = a('dstprop')
        ,    j = a('json')
        ,    v = s && $(s);
        if( !v && j )
            v = JSON.parse( j );
        if( sp )
            v = v[ sp ];
        this.value = v;
        d = $( d );
        if( d )
        {   if( dp )
                d[ dp ] = v;
            else
                d = v;
        }
        this.dispatchEvent( new CustomEvent('change') )
}   }
window.customElements.define( 'wel-css-query', WelCssQuery );
