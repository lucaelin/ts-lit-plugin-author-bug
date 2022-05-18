import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js'
import "./second-element";

@customElement('first-element')
class FirstElement extends LitElement {
  render() {
    return html`
      <second-element uuuu="aaaa"></second-element>
    `;
  }
}

export { FirstElement }