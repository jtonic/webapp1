import { html, fixture, expect, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type { SinonStub } from 'sinon';
import { PersonFinder } from '../../../src/client/components/person-finder.js';

describe('PersonFinder', () => {
  let element: PersonFinder;
  let fetchStub: SinonStub;

  beforeEach(async () => {
    // Stub the global fetch function
    fetchStub = sinon.stub(window, 'fetch');
    element = await fixture(html`<person-finder></person-finder>`);
  });

  afterEach(() => {
    // Restore the original fetch function
    fetchStub.restore();
  });

  it('should render the component', () => {
    expect(element).to.be.an.instanceOf(PersonFinder);
  });

  it('should have an input field and a button', () => {
    const input = element.shadowRoot?.querySelector('input');
    const button = element.shadowRoot?.querySelector('button');
    expect(input).to.exist;
    expect(button).to.exist;
  });

  it('should update the ssn property on input', () => {
    const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
    input.value = '123-45-678';
    input.dispatchEvent(new Event('input'));
    expect(element['ssn']).to.equal('123-45-678');
  });

  // fixme: await for the button click to trigger the fetch, and render the result
  xit('should display the found person when the button is clicked', async () => {
    const ssn = '123-45-678';
    const person = { name: 'John Doe', ssn };

    const mockResponse = new Response(JSON.stringify(person), {
      status: 200,
      headers: { 'Content-type': 'application/json' },
    });
    fetchStub.resolves(mockResponse);

    const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
    input.value = ssn;
    input.dispatchEvent(new Event('input'));

    const button = element.shadowRoot?.querySelector('button') as HTMLButtonElement;
    button.click();

    await waitUntil(() => {
      const personDisplay = element.shadowRoot?.querySelector('#person-display');
      expect(personDisplay).to.exist;
      expect(personDisplay?.textContent).to.include(JSON.stringify(person, null, 2));
    }, "to be okay", { interval: 50, timeout: 5000 });
  });

  // fixme: await for the button click to trigger the fetch, and render the result
  xit('should display an error message if no SSN is entered', async () => {
    const button = element.shadowRoot?.querySelector('button') as HTMLButtonElement;
    button.click();

    await waitUntil(() => {
      const errorDisplay = element.shadowRoot?.querySelector('#error-display');
      expect(errorDisplay).to.exist;
      expect(errorDisplay?.textContent).to.equal('Please enter an SSN.');
    });
  });

  // fixme: await for the button click to trigger the fetch, and render the result
  xit('should display an error message if the fetch fails', async () => {
    const ssn = '123-45-678';
    fetchStub.rejects(new Error('Network error'));

    const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
    input.value = ssn;
    input.dispatchEvent(new Event('input'));

    const button = element.shadowRoot?.querySelector('button') as HTMLButtonElement;
    button.click();

    await waitUntil(() => {
      const errorDisplay = element.shadowRoot?.querySelector('#error-display');
      expect(errorDisplay).to.exist;
      expect(errorDisplay?.textContent).to.equal(
        'Person not found or an error occurred.',
      );
    });
  });
});
