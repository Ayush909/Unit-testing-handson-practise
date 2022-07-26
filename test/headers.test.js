import { html, fixture, expect } from '@open-wc/testing';
import Sinon, { spy, stub } from 'sinon';
import '../src/header/Header.js';

const headerObj = await fixture(html`<loan-header></loan-header>`)

describe('loan-header', () => {
  // Write test cases inside this block


  afterEach(function(){
    Sinon.restore();
  })

  it("should be accessible",()=>{
    expect(headerObj).to.be.accessible;
  })  


  it("should trigger localeChanged method on clicking EN/NL button", async()=>{
    const localeChangedStub = stub(headerObj,'localeChanged');
    headerObj.requestUpdate();
    await headerObj.updateComplete;

    const NLBtn = headerObj.shadowRoot.querySelector('#nl-NL');
    NLBtn.click();

    expect(localeChangedStub).to.have.callCount(1)
  })

  it("should trigger localeChanged with locale id of 'nl-NL' ", async()=>{
    const localeSpy = spy(headerObj,'localeChanged');
    const obj = {
      target : {
        id : 'nl-NL'
      }
    }

    headerObj.localeChanged(obj);

    expect(localeSpy).to.have.callCount(1);
    expect(localeSpy.calledWith(obj)).to.be.true;
  })
});
