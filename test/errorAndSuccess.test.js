import { html, fixture, expect } from '@open-wc/testing';
import sinon, { spy } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

const successEl = await fixture(html`<loan-success></loan-success>`)
const errorEl = await fixture(html`<loan-error></loan-error>`)

describe('Success screen ', () => {
  // Write test cases inside this block

  beforeEach(function () {
    sinon.restore();
  });

  

  it('should call _toHome method when home button is clicked', async () => {
    const toHomeStub = sinon.stub(successEl, '_toHome');
    const homeBtn = successEl.shadowRoot.querySelector('.home-btn');

    successEl.requestUpdate();
    await successEl.updateComplete;

    homeBtn.click();

    expect(toHomeStub).to.have.callCount(1);
    
  })


});

describe('error screen', () => {
  // Write test cases inside this block

  beforeEach(function () {
    sinon.restore();
  });

  

  it('should call _toHome method when home button is clicked', async () => {
    const toHomeStub = sinon.stub(errorEl, '_toHome');
    const homeBtn = errorEl.shadowRoot.querySelector('.home-btn');

    errorEl.requestUpdate();
    await errorEl.updateComplete;

    homeBtn.click();

    expect(toHomeStub).to.have.callCount(1);
    
  })
});
