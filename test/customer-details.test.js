import { html, fixture, expect } from '@open-wc/testing';
import Sinon, { stub,spy } from 'sinon';
import '../src/Customer/Customer-details.js';

const el = await fixture(html`<customer-details></customer-details>`);

describe('customer details', () => {

  let server;

  beforeEach(function () {
    Sinon.restore();
    server = Sinon.fakeServer.create();
  });

  afterEach(function () {
    server.restore();
  });

  it("should be accessible",()=>{
    expect(el).to.be.accessible;
  })

  it("should call _toEmidetails method when back button is clicked", async()=>{
    const emiDetailStub = stub(el, '_toEmidetails');

    el.requestUpdate();
    await el.updateComplete;

   const buttons = el.shadowRoot.querySelectorAll('lion-button');
   buttons[0].click();

   expect(emiDetailStub).to.have.callCount(1);

  })

  //not working -- need to ask how to handle submithandler() method inside render() 
  xit("should call submitHandler() method", async() => {
   const nxtBtn = el.shadowRoot.querySelector('#nextbtn');
   const firstName = el.shadowRoot.querySelector('#first_name');
   const lastName = el.shadowRoot.querySelector('#last_name');
   const email = el.shadowRoot.querySelector('#email');
   const mobileNum = el.shadowRoot.querySelector('#mobile_number');
   const monthlySalary = el.shadowRoot.querySelector('#monthly_salary');
   const emiAmt = el.shadowRoot.querySelector('#EMIs_amount');
   const terms = el.shadowRoot.querySelector('#terms');




   nxtBtn.click();  
   console.log(nxtBtn);

  })


});
