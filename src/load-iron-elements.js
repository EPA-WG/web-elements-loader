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
    {   const init= m => this.initModule(m);
        return [
//      init("@polymer/iron-a11y-announcer"               )  && import("@polymer/iron-a11y-announcer"           ),
//      init("@polymer/iron-a11y-keys"                    )  && import("@polymer/iron-a11y-keys"                ),
//      init("@polymer/iron-a11y-keys-behavior"           )  && import("@polymer/iron-a11y-keys-behavior"       ),
        init("@polymer/iron-ajax"                     )  && import("@polymer/iron-ajax"                     ),
        init("@polymer/iron-autogrow-textarea"        )  && import("@polymer/iron-autogrow-textarea"        ),
//      init("@polymer/iron-behaviors"                    )  && import("@polymer/iron-behaviors"                ),
        init("@polymer/iron-checked-element-behavior" )  && import("@polymer/iron-checked-element-behavior" ),
        init("@polymer/iron-collapse"                 )  && import("@polymer/iron-collapse"                 ),
        init("@polymer/iron-component-page"           )  && import("@polymer/iron-component-page"           ),
//      init("@polymer/iron-demo-helpers"                 )  && import("@polymer/iron-demo-helpers"             ),
//      init("@polymer/iron-doc-viewer"                   )  && import("@polymer/iron-doc-viewer"               ),
        init("@polymer/iron-dropdown"                 )  && import("@polymer/iron-dropdown"                 ),
        init("@polymer/iron-fit-behavior"             )  && import("@polymer/iron-fit-behavior"             ),
//      init("@polymer/iron-flex-layout"                  )  && import("@polymer/iron-flex-layout"              ),
        init("@polymer/iron-form"                     )  && import("@polymer/iron-form"                     ),
        init("@polymer/iron-form-element-behavior"    )  && import("@polymer/iron-form-element-behavior"    ),
        init("@polymer/iron-icon"                     )  && import("@polymer/iron-icon"                     ),
        init("@polymer/iron-icons"                    )  && import("@polymer/iron-icons"                    ),
        init("@polymer/iron-iconset"                  )  && import("@polymer/iron-iconset"                  ),
        init("@polymer/iron-iconset-svg"              )  && import("@polymer/iron-iconset-svg"              ),
        init("@polymer/iron-image"                    )  && import("@polymer/iron-image"                    ),
        init("@polymer/iron-input"                    )  && import("@polymer/iron-input"                    ),
        init("@polymer/iron-jsonp-library"            )  && import("@polymer/iron-jsonp-library"            ),
        // init("@polymer/iron-label"                     )  && import("@polymer/iron-label"                    ),
        init("@polymer/iron-list"                     )  && import("@polymer/iron-list"                     ),
        init("@polymer/iron-localstorage"             )  && import("@polymer/iron-localstorage"             ),
        init("@polymer/iron-media-query"              )  && import("@polymer/iron-media-query"              ),
//      init("@polymer/iron-menu-behavior"                )  && import("@polymer/iron-menu-behavior"            ),
        init("@polymer/iron-meta"                     )  && import("@polymer/iron-meta"                     ),
        init("@polymer/iron-overlay-behavior"         )  && import("@polymer/iron-overlay-behavior"         ),
//      init("@polymer/iron-page-url"                     )  && import("@polymer/iron-page-url"                 ),
        init("@polymer/iron-pages"                    )  && import("@polymer/iron-pages"                    ),
        init("@polymer/iron-range-behavior"           )  && import("@polymer/iron-range-behavior"           ),
        init("@polymer/iron-resizable-behavior"       )  && import("@polymer/iron-resizable-behavior"       ),
        init("@polymer/iron-scroll-target-behavior"   )  && import("@polymer/iron-scroll-target-behavior"   ),
        init("@polymer/iron-scroll-threshold"         )  && import("@polymer/iron-scroll-threshold"         ),
//      init("@polymer/iron-selector"                     )  && import("@polymer/iron-selector"                 ),
//      init("@polymer/iron-signals"                      )  && import("@polymer/iron-signals"                  ),
        init("@polymer/iron-swipeable-container"      )  && import("@polymer/iron-swipeable-container"      ),
        init("@polymer/iron-test-helpers"             )  && import("@polymer/iron-test-helpers"             ),
        init("@polymer/iron-validatable-behavior"     )  && import("@polymer/iron-validatable-behavior"     ),
        init("@polymer/iron-validator-behavior"       )  && import("@polymer/iron-validator-behavior"       ),
        ]
    }
}

window.customElements.define( LoadIronElement.is, LoadIronElement);
