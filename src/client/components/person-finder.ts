import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { getPersonBySsn } from '../persons';
import styles from './person-finder.style.css';

@customElement('person-finder')
export class PersonFinder extends LitElement {
  static readonly styles = css`${unsafeCSS(styles)}`;

  @property({ type: String })
  private ssn: string = '';

  @property({ type: Object })
  private person: { name: string; ssn: string } | null = null;

  @property({ type: String })
  private error: string | null = null;

  private _handleInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.ssn = input.value;
  }

  private async _findPerson() {
    if (!this.ssn) {
      this.error = 'Please enter an SSN.';
      return;
    }
    try {
      const person = await getPersonBySsn(this.ssn);
      this.person = person;
    } catch (error) {
      console.error('Error fetching person:', error);
      this.error = 'Person not found or an error occurred.';
    }
  }

  render() {
    return html`
      <div>
        <input
          type="text"
          .value=${this.ssn}
          @input=${this._handleInput}
          placeholder="Enter SSN (e.g., 111-22-333)"
        />
        <button @click=${this._findPerson}>Find Person</button>
      </div>

      ${this.person
        ? html`
            <div id="person-display">
              <p>Found Person:</p>
              <pre>${JSON.stringify(this.person, null, 2)}</pre>
            </div>
          `
        : ''}
      ${this.error
        ? html`<div id="error-display" role="alert">${this.error}</div>`
        : ''}
    `;
  }
}
