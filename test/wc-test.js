import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `wc-test`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class WcTest extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'wc-test',
      },
    };
  }
}

window.customElements.define('wc-test', WcTest);
