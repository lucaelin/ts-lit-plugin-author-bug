import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js'

/**
 * test
 * 
 * @x-author lhaneklau
 */
@customElement('second-element')
class SecondElement extends LitElement {
  render() {
    return html`
      <second-element uuuu="4"></second-element>
    `;
  }
}

export { SecondElement }