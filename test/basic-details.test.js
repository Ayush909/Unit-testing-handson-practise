import { html, fixture, expect } from '@open-wc/testing';
import Sinon, { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';
const el = await fixture(html`<basic-details></basic-details>`);

describe('Basic details', () => {
  
  it("should be accessible",()=>{
    expect(el).to.be.accessible;
  })


  it('calls _captureDetails function when a next button is clicked', async () => {
   const myFunctionStub = Sinon.stub(el, "_captureDetails");

   el.requestUpdate();
   await el.updateComplete;
   
   el.shadowRoot.querySelector('.btn-next').click();
   expect(myFunctionStub).to.have.callCount(1);


  });


  it('calls _toDashboard function when a prev button is clicked', async () => {
    const myFunctionStub = Sinon.stub(el, "_toDashboard");
 
    el.requestUpdate();
    await el.updateComplete;
    
    el.shadowRoot.querySelector('.btn-previous').click();
    expect(myFunctionStub).to.have.callCount(1);
 
   });
   
   it("should call _numToWord method when on keyUp event over amount field ", async () => {
    const numToWordStub = Sinon.stub(el, "_numToWord");
    const input_amt = el.shadowRoot.querySelector('lion-input-amount')

    el.requestUpdate();
    await el.updateComplete;   
    
    input_amt.dispatchEvent(new KeyboardEvent('keyup',{key : '1'}))
    
    expect(numToWordStub).to.have.callCount(1);

   })
});
