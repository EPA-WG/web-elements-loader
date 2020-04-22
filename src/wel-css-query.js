class WelCssQuery extends HTMLElement
{
    static get observedAttributes(){ return ['src','dst','srcprop','dstprop']}
    connectedCallback()
    {   let  s = this.getAttribute('src'    )
        ,   sp = this.getAttribute('srcprop')
        ,    d = this.getAttribute('dst'    )
        ,   dp = this.getAttribute('dstprop');

        let v = s && document.querySelector(s);
        if( sp )
            v = v[ sp ];
        this.value = v;
        if( d )
        {   d = document.querySelector( d );
            if( d )
            {   if( dp )
                    d[ dp ] = v;
                else
                    d = v;
            }
        }
    }
}
window.customElements.define( 'wel-css-query', class extends HTMLElement
export default WelCssQuery;
