export default class WelCssQuery extends HTMLElement
{   //   <wel-css-query src="#cornerButton" dst="#menu1" dstprop="anchor" ></wel-css-query>

    static get observedAttributes(){ return ['src','dst','srcprop','dstprop']}
    connectedCallback()
    {   let  a = x=>x && this.getAttribute(x)
        ,    $ = x=>document.querySelector(x)
        ,    s = a('src'    )
        ,   sp = a('srcprop')
        ,    d = a('dst'    )
        ,   dp = a('dstprop')
        ,    v = s && $(s);
        if( sp )
            v = v[ sp ];
        this.value = v;
        d = $( d );
        if( d )
        {   if( dp )
                d[ dp ] = v;
            else
                d = v;
}   }   }
window.customElements.define( 'wel-css-query', WelCssQuery );
