import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { getPersonBySsn } from '../persons';

@customElement('person-finder')
export class PersonFinder extends LitElement {
  static readonly styles = css`
    :host {
      display: block;
      border: 1px solid #ccc;
      padding: 16px;
      border-radius: 8px;
    }
    input {
      margin-right: 8px;
    }
  `;

  @property({ type: String })
  private ssn: string = '';

  private _handleInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.ssn = input.value;
  }

  private async _findPerson() {
    if (!this.ssn) {
      alert('Please enter an SSN.');
      return;
    }
    try {
      const person = await getPersonBySsn(this.ssn);
      alert(`Found Person: ${JSON.stringify(person, null, 2)}`);
    } catch (error) {
      console.error('Error fetching person:', error);
      alert('Person not found or an error occurred.');
    }
  }

  render() {
    return html`
      <div>
        <input
          type="text"
          .value=${this.ssn}
          @input=${this._handleInput}
          placeholder="Enter SSN (e.g., 111-222-3333)"
        />
        <button @click=${this._findPerson}>Find Person</button>
      </div>
    `;
  }
}
