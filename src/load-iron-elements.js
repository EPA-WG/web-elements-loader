import LoadCollection from './load-collection';
/**
 * `load-iron-elements`
 * Container of  Iron Elements pulled as lazy loaded dependencies.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class LoadIronElement extends LoadCollection
{

    static get is(){ return 'load-iron-elements'}
    isDisabledByDefault(pkg)
    {
        return  [   '@polymer/iron-component-page'
                ].includes(pkg)
    }
    initDependencies()
    {   const init= i => this.initModule(i);
        return [
//      init(x=>import("@polymer/iron-a11y-announcer"                          )),
//      init(x=>import("@polymer/iron-a11y-keys"                               )),
//      init(x=>import("@polymer/iron-a11y-keys-behavior"                      )),
        init(x=>import("@polymer/iron-ajax"                                 )),
        init(x=>import("@polymer/iron-autogrow-textarea"                    )),
//      init(x=>import("@polymer/iron-behaviors"                               )),
        init(x=>import("@polymer/iron-checked-element-behavior"             )),
        init(x=>import("@polymer/iron-collapse"                             )),
        init(x=>import("@polymer/iron-component-page"                       )),
//      init(x=>import("@polymer/iron-demo-helpers"                            )),
//      init(x=>import("@polymer/iron-doc-viewer"                              )),
        init(x=>import("@polymer/iron-dropdown"                             )),
        init(x=>import("@polymer/iron-fit-behavior"                         )),
        init(x=>import("@polymer/iron-flex-layout/iron-flex-layout"         )),
        init(x=>import("@polymer/iron-flex-layout/iron-flex-layout-classes" )),
        init(x=>import("@polymer/iron-form"                                 )),
        init(x=>import("@polymer/iron-form-element-behavior"                )),
        init(x=>import("@polymer/iron-icon"                                 )),
        init(x=>import("@polymer/iron-icons"                                )),
        init(x=>import("@polymer/iron-iconset"                              )),
        init(x=>import("@polymer/iron-iconset-svg"                          )),
        init(x=>import("@polymer/iron-image"                                )),
        init(x=>import("@polymer/iron-input"                                )),
        init(x=>import("@polymer/iron-jsonp-library"                        )),
        // init(x=>import("@polymer/iron-label"                                )),
        init(x=>import("@polymer/iron-list"                                 )),
        init(x=>import("@polymer/iron-localstorage"                         )),
        init(x=>import("@polymer/iron-media-query"                          )),
//      init(x=>import("@polymer/iron-menu-behavior"                           )),
        init(x=>import("@polymer/iron-meta"                                 )),
        init(x=>import("@polymer/iron-overlay-behavior"                     )),
//      init(x=>import("@polymer/iron-page-url"                                )),
        init(x=>import("@polymer/iron-pages"                                )),
        init(x=>import("@polymer/iron-range-behavior"                       )),
        init(x=>import("@polymer/iron-resizable-behavior"                   )),
        init(x=>import("@polymer/iron-scroll-target-behavior"               )),
        init(x=>import("@polymer/iron-scroll-threshold"                     )),
//      init(x=>import("@polymer/iron-selector"                                )),
//      init(x=>import("@polymer/iron-signals"                                 )),
        init(x=>import("@polymer/iron-swipeable-container"                  )),
        init(x=>import("@polymer/iron-test-helpers"                         )),
        init(x=>import("@polymer/iron-validatable-behavior"                 )),
        init(x=>import("@polymer/iron-validator-behavior"                   )),
        ]
    }
}

window.customElements.define( LoadIronElement.is, LoadIronElement);
