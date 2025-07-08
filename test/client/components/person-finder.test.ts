import { html, fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';
import type { SinonStub } from 'sinon';
import { PersonFinder } from '../../../src/client/components/person-finder.js';
import * as personService from '../../../src/client/persons.js';

describe('PersonFinder', () => {
  let element: PersonFinder;
  let getPersonBySsnStub: SinonStub;

  beforeEach(async () => {
    getPersonBySsnStub = sinon.stub(personService, 'getPersonBySsn');
    element = await fixture(html`<person-finder></person-finder>`);
  });

  afterEach(() => {
    getPersonBySsnStub.restore();
  });

  it('should render the component', async () => {
    element = await fixture(html`<person-finder></person-finder>`);
    expect(element).to.be.an.instanceOf(PersonFinder);
  });

  it('should have an input field and a button', async () => {
    element = await fixture(html`<person-finder></person-finder>`);
    const input = element.shadowRoot?.querySelector('input');
    const button = element.shadowRoot?.querySelector('button');
    expect(input).to.exist;
    expect(button).to.exist;
  });

  it('should update the ssn property on input', async () => {
    element = await fixture(html`<person-finder></person-finder>`);
    const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
    input.value = '123-45-678';
    input.dispatchEvent(new Event('input'));
    expect(element['ssn']).to.equal('123-45-678');
  });

  it('should call getPersonBySsn with the correct SSN when the button is clicked', async () => {
    element = await fixture(html`<person-finder></person-finder>`);
    const ssn = '123-45-678';
    const person = { name: 'John Doe', ssn };
    getPersonBySsnStub.withArgs(ssn).resolves(person);

    const input = element.shadowRoot?.querySelector('input') as HTMLInputElement;
    input.value = ssn;
    input.dispatchEvent(new Event('input'));

    const button = element.shadowRoot?.querySelector('button') as HTMLButtonElement;
    button.click();

    await element.updateComplete;

    expect(getPersonBySsnStub).to.have.been.calledWith(ssn);
  });
});
