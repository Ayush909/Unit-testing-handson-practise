import { html, fixture, expect } from '@open-wc/testing';
import Sinon , {spy,stub} from 'sinon'
import '../src/LoanEMIDetails/LoanEMIDetails.js';


describe('Loan EMI details', () => {

  let El;

  before(async ()=> {
    localStorage.setItem('emi', JSON.stringify({
      interestRate : '2%',
      monthlyEMI : 10,
      principal : 200,
      interest : 150,
      totalAmount : 400
    }))

    El = await fixture(html`<loanemi-details></loanemi-details>`);

    El.requestUpdate();
  })


  beforeEach(()=>{
    Sinon.restore();
  })

  
  it('checks for accessibility of component', () => {
    expect(El).to.be.accessible;
  });
  

  it("should trigger _toBasicDetails() when cancel button is clicked", async () => {
    const basicDetailStub = stub(El,'_toBasicDetails');

    El.requestUpdate();
    await El.updateComplete;

    const cancelBtn = El.shadowRoot.querySelector('.cancel-btn');
    cancelBtn.click();

    expect(basicDetailStub).to.have.callCount(1);
  })


  it("should trigger _toCustomer() when continue button is clicked", async () => {

    const toCustomerStub = stub(El,'_toCustomer');

    El.requestUpdate();
    await El.updateComplete;

    const continueBtn = El.shadowRoot.querySelector('.continue-btn');
    continueBtn.click();

    expect(toCustomerStub).to.have.callCount(1);

  })
});
