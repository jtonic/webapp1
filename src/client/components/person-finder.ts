import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { getPersonBySsn } from '../persons';
import { personFinderStyles } from './person-finder.style';

@customElement('person-finder')
export class PersonFinder extends LitElement {
  static readonly styles = personFinderStyles;

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
          placeholder="Enter SSN (e.g., 111-22-333)"
        />
        <button @click=${this._findPerson}>Find Person</button>
      </div>
    `;
  }
}
