import LoadCollection from './load-collection';
/**
 * `load-iron-elements`
 * Container of  Iron Elements pulled as lazy loaded dependencies.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class LoadPaperElement extends LoadCollection
{

    static get is(){ return 'load-paper-elements'}

    isDisabledByDefault(pkg)
    {
        return  [   '@polymer/paper-drawer-panel'
                ].includes(pkg)
    }
    initDependencies()
    {   const init= m => this.initModule(m);
        return [
        init("@polymer/paper-badge"                  )  && import( "@polymer/paper-badge"                   ),
        init("@polymer/paper-button"                 )  && import( "@polymer/paper-button"                  ),
        init("@polymer/paper-card"                   )  && import( "@polymer/paper-card"                    ),
        init("@polymer/paper-checkbox"               )  && import( "@polymer/paper-checkbox"                ),

        init("@polymer/paper-dialog"                                     )  && import( "@polymer/paper-dialog"                                     ),
        init("@polymer/paper-dialog-behavior/paper-dialog-behavior"      )  && import( "@polymer/paper-dialog-behavior/paper-dialog-behavior"      ),
        init("@polymer/paper-dialog-behavior/paper-dialog-shared-styles" )  && import( "@polymer/paper-dialog-behavior/paper-dialog-shared-styles" ),
        init("@polymer/paper-dialog-scrollable"                          )  && import( "@polymer/paper-dialog-scrollable"                          ),

        init("@polymer/paper-drawer-panel"           )  && import( "@polymer/paper-drawer-panel"            ),

        init("@polymer/paper-dropdown-menu/paper-dropdown-menu-shared-styles"    )  && import( "@polymer/paper-dropdown-menu/paper-dropdown-menu-shared-styles"   ),
        init("@polymer/paper-dropdown-menu/paper-dropdown-menu-icons"            )  && import( "@polymer/paper-dropdown-menu/paper-dropdown-menu-icons"           ),
        init("@polymer/paper-dropdown-menu/paper-dropdown-menu-light"            )  && import( "@polymer/paper-dropdown-menu/paper-dropdown-menu-light"           ),
        init("@polymer/paper-dropdown-menu/paper-dropdown-menu"                  )  && import( "@polymer/paper-dropdown-menu/paper-dropdown-menu"                 ),

        init("@polymer/paper-fab"                    )  && import( "@polymer/paper-fab"                     ),
        init("@polymer/paper-header-panel"           )  && import( "@polymer/paper-header-panel"            ),
        init("@polymer/paper-icon-button"            )  && import( "@polymer/paper-icon-button"             ),

        init("@polymer/paper-input/paper-input"                  )  && import( "@polymer/paper-input/paper-input"                  ),
        // init("@polymer/paper-input/paper-input-container"        )  && import( "@polymer/paper-input/paper-input-container"        ),
        init("@polymer/paper-input/paper-input-behavior"         )  && import( "@polymer/paper-input/paper-input-behavior"         ),
        init("@polymer/paper-input/paper-input-addon-behavior"   )  && import( "@polymer/paper-input/paper-input-addon-behavior"   ),
        init("@polymer/paper-input/paper-input-char-counter"     )  && import( "@polymer/paper-input/paper-input-char-counter"     ),
        init("@polymer/paper-input/paper-textarea"               )  && import( "@polymer/paper-input/paper-textarea"               ),
        init("@polymer/paper-input/paper-input-error"            )  && import( "@polymer/paper-input/paper-input-error"            ),

        init("@polymer/paper-item"                   )  && import( "@polymer/paper-item"                    ),
        init("@polymer/paper-listbox"                )  && import( "@polymer/paper-listbox"                 ),
        init("@polymer/paper-material"               )  && import( "@polymer/paper-material"                ),
        // init("@polymer/paper-menu"                   )  && import( "@polymer/paper-menu/"                    ),
        init("@polymer/paper-menu-button"            )  && import( "@polymer/paper-menu-button"             ),
        init("@polymer/paper-progress"               )  && import( "@polymer/paper-progress"                ),
        init("@polymer/paper-radio-button"           )  && import( "@polymer/paper-radio-button"            ),
        init("@polymer/paper-radio-group"            )  && import( "@polymer/paper-radio-group"             ),
        init("@polymer/paper-ripple"                 )  && import( "@polymer/paper-ripple"                  ),
        init("@polymer/paper-scroll-header-panel"    )  && import( "@polymer/paper-scroll-header-panel"     ),
        init("@polymer/paper-slider"                 )  && import( "@polymer/paper-slider"                  ),

        init("@polymer/paper-spinner/paper-spinner-behavior" )  && import( "@polymer/paper-spinner/paper-spinner-behavior" ),
        init("@polymer/paper-spinner/paper-spinner-lite"     )  && import( "@polymer/paper-spinner/paper-spinner-lite"     ),
        init("@polymer/paper-spinner/paper-spinner-styles"   )  && import( "@polymer/paper-spinner/paper-spinner-styles"   ),
        init("@polymer/paper-spinner/paper-spinner"          )  && import( "@polymer/paper-spinner/paper-spinner"          ),

        init("@polymer/paper-styles/default-theme"           )  && import( "@polymer/paper-styles/default-theme"           ),
        init("@polymer/paper-styles/paper-styles"            )  && import( "@polymer/paper-styles/paper-styles"            ),
        init("@polymer/paper-styles/paper-styles-classes"    )  && import( "@polymer/paper-styles/paper-styles-classes"    ),
        init("@polymer/paper-styles/shadow"                  )  && import( "@polymer/paper-styles/shadow"                  ),
        init("@polymer/paper-styles/color"                   )  && import( "@polymer/paper-styles/color"                   ),
        init("@polymer/paper-styles/typography"              )  && import( "@polymer/paper-styles/typography"              ),
        init("@polymer/paper-styles/demo-pages"              )  && import( "@polymer/paper-styles/demo-pages"              ),

        init("@polymer/paper-tabs"                   )  && import( "@polymer/paper-tabs"                    ),
        init("@polymer/paper-toast"                  )  && import( "@polymer/paper-toast"                   ),
        init("@polymer/paper-toggle-button"          )  && import( "@polymer/paper-toggle-button"           ),
        init("@polymer/paper-toolbar"                )  && import( "@polymer/paper-toolbar"                 ),
        init("@polymer/paper-tooltip"                )  && import( "@polymer/paper-tooltip"                 ),
        ]
    }
}

window.customElements.define( LoadPaperElement.is, LoadPaperElement);
