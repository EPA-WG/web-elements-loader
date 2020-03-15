import LoadCollection from './load-collection';
/**
 * `load-iron-elements`
 * Container of  Iron Elements pulled as lazy loaded dependencies.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class LoadVaadinElement extends LoadCollection
{

    static get is(){ return 'load-vaadin-elements'}
    docs(pkg){ let n=pkg.name.split('/').pop(); return `https://github.com/vaadin/${ n }` }
    isDisabledByDefault(pkg)
    {
        return  [   '@vaadin/vaadin'
                ,   '@vaadin/vaadin-core'
                ,   '@vaadin/vaadin-grid-pro'
                ,   '@vaadin/vaadin-board'
                ,   '@vaadin/vaadin-crud'
                ,   '@vaadin/vaadin-charts'
                ,   '@vaadin/vaadin-confirm-dialog'
                ,   '@vaadin/vaadin-cookie-consent'
                ,   '@vaadin/vaadin-rich-text-editor'
                ].includes(pkg)
    }
    initDependencies()
    {   const init= m => this.initModule(m);
        return [
        init('@vaadin/vaadin' ) && import('@vaadin/vaadin'),
        // @vaadin/vaadin aggregation
        init('@vaadin/vaadin-core'            ) && import('@vaadin/vaadin-core'             ),
        init('@vaadin/vaadin-board'           ) && import('@vaadin/vaadin-board'            ),
        init('@vaadin/vaadin-charts'          ) && import('@vaadin/vaadin-charts'           ),
        init('@vaadin/vaadin-confirm-dialog'  ) && import('@vaadin/vaadin-confirm-dialog'   ),
        init('@vaadin/vaadin-cookie-consent'  ) && import('@vaadin/vaadin-cookie-consent'   ),
        init('@vaadin/vaadin-crud'            ) && import('@vaadin/vaadin-crud'             ),
        init('@vaadin/vaadin-grid-pro'        ) && import('@vaadin/vaadin-grid-pro'         ),
        init('@vaadin/vaadin-rich-text-editor') && import('@vaadin/vaadin-rich-text-editor' ),

        // @vaadin/vaadin README.md
        init( "@vaadin/vaadin-accordion"      ) && import("@vaadin/vaadin-accordion"      ),
        init( "@vaadin/vaadin-app-layout"     ) && import("@vaadin/vaadin-app-layout"     ),
        init( "@vaadin/vaadin-button"         ) && import("@vaadin/vaadin-button"         ),
        init( "@vaadin/vaadin-checkbox"       ) && import("@vaadin/vaadin-checkbox"       ),
        init( "@vaadin/vaadin-combo-box"      ) && import("@vaadin/vaadin-combo-box"      ),
        init( "@vaadin/vaadin-context-menu"   ) && import("@vaadin/vaadin-context-menu"   ),
        init( "@vaadin/vaadin-custom-field"   ) && import("@vaadin/vaadin-custom-field"   ),
        init( "@vaadin/vaadin-date-picker"    ) && import("@vaadin/vaadin-date-picker"    ),
        init( "@vaadin/vaadin-details"        ) && import("@vaadin/vaadin-details"        ),
        init( "@vaadin/vaadin-dialog"         ) && import("@vaadin/vaadin-dialog"         ),
        init( "@vaadin/vaadin-form-layout"    ) && import("@vaadin/vaadin-form-layout"    ),
        init( "@vaadin/vaadin-grid"           ) && import("@vaadin/vaadin-grid"           ),
        init( "@vaadin/vaadin-icons"          ) && import("@vaadin/vaadin-icons"          ),
        init( "@vaadin/vaadin-item"           ) && import("@vaadin/vaadin-item"           ),
        init( "@vaadin/vaadin-list-box"       ) && import("@vaadin/vaadin-list-box"       ),
        init( "@vaadin/vaadin-login"          ) && import("@vaadin/vaadin-login"          ),
        init( "@vaadin/vaadin-menu-bar"       ) && import("@vaadin/vaadin-menu-bar"       ),
        init( "@vaadin/vaadin-notification"   ) && import("@vaadin/vaadin-notification"   ),
        init( "@vaadin/vaadin-ordered-layout" ) && import("@vaadin/vaadin-ordered-layout" ),
        init( "@vaadin/vaadin-progress-bar"   ) && import("@vaadin/vaadin-progress-bar"   ),
        init( "@vaadin/vaadin-radio-button"   ) && import("@vaadin/vaadin-radio-button"   ),
        init( "@vaadin/vaadin-select"         ) && import("@vaadin/vaadin-select"         ),
        init( "@vaadin/vaadin-split-layout"   ) && import("@vaadin/vaadin-split-layout"   ),
        init( "@vaadin/vaadin-tabs"           ) && import("@vaadin/vaadin-tabs"           ),
        init( "@vaadin/vaadin-text-field"     ) && import("@vaadin/vaadin-text-field"     ),
        init( "@vaadin/vaadin-time-picker"    ) && import("@vaadin/vaadin-time-picker"    ),
        init( "@vaadin/vaadin-upload"         ) && import("@vaadin/vaadin-upload"         ),


        init( "@vaadin/vaadin-lumo-styles"    ) && import("@vaadin/vaadin-lumo-styles"    ),
        init( "@vaadin/vaadin-material-styles") && import("@vaadin/vaadin-material-styles"),

        init( "@vaadin/vaadin-grid-pro"       ) && import("@vaadin/vaadin-grid-pro"       ),
        init( "@vaadin/vaadin-overlay"        ) && import("@vaadin/vaadin-overlay"        ),
        ]
    }

}

window.customElements.define( LoadVaadinElement.is, LoadVaadinElement);
