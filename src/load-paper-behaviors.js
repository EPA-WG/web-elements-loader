import LoadCollection from './load-collection';
/**
 * `load-iron-elements`
 * Container of  Iron Elements pulled as lazy loaded dependencies.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class LoadPaperBehaviors extends LoadCollection
{

    static get is(){ return 'load-paper-behaviors'}

    initDependencies()
    {   const init= m => this.initModule(m);
        return [
        init("@polymer/paper-behaviors/paper-button-behavior"          ) && import( "@polymer/paper-behaviors/paper-button-behavior"           ),
        init("@polymer/paper-behaviors/paper-checked-element-behavior" ) && import( "@polymer/paper-behaviors/paper-checked-element-behavior"  ),
        init("@polymer/paper-behaviors/paper-inky-focus-behavior"      ) && import( "@polymer/paper-behaviors/paper-inky-focus-behavior"       ),
        init("@polymer/paper-behaviors/paper-ripple-behavior"          ) && import( "@polymer/paper-behaviors/paper-ripple-behavior"           ),
        ]
    }
}

window.customElements.define( LoadPaperBehaviors.is, LoadPaperBehaviors);
