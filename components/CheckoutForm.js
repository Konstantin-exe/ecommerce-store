import Link from 'next/link';
import Cookies from 'js-cookie';
import { checkoutFormStyles } from '../styles/styles';

export default function CheckoutForm() {
  return (
    <div css={checkoutFormStyles}>
      <h3>Billing Address</h3>
      <div className="row">
        <div className="col-50" />
        <label HTMLfor="fname">
          <i className="fa fa-user" />
          Full Name
        </label>
        <input type="text" id="fname" placeholder="Rick Sanchez" />
        <label HTMLfor="email">
          <i className="fa fa-envelope" />
          Email
        </label>
        <input type="text" id="email" placeholder="rick@fakedomain.com" />
        <label HTMLfor="adr">
          <i className="fa fa-address-card-o" />
          Address
        </label>
        <input type="text" id="adr" placeholder="542 W. 15th Street" />
        <label HTMLfor="city">
          <i className="fa fa-institution" /> City
        </label>
        <input type="text" id="city" placeholder="Seattle" />

        <div class="row">
          <div class="col-50">
            <label HTMLfor="state">State</label>
            <input type="text" id="state" placeholder="Washington" />
          </div>
          <div class="col-50">
            <label HTMLfor="zip">Zip</label>
            <input type="text" id="zip" placeholder="10001" />
          </div>
          <div class="col-50">
            <label HTMLfor="dimension">Dimension</label>
            <input type="text" id="dimension" placeholder="C-132" />
          </div>
        </div>
      </div>
      <h3>Payment</h3>
      <div class="row">
        <div class="col-50">
          <label HTMLfor="card-name">Name on Card</label>
          <input type="text" id="card-name" placeholder="Rick Sanchez" />
        </div>
        <div class="col-50">
          <label HTMLfor="card-number">Credit card number</label>
          <input type="text" id="card-number" placeholder="111-222-666-444" />
        </div>
        <div class="col-50">
          <label HTMLfor="exp-month">Exp Month</label>
          <input type="text" id="exp-month" placeholder="January 15th" />
        </div>
      </div>
      <div class="row">
        <div class="col-50">
          <label HTMLfor="state">Exp Year</label>
          <input type="text" id="exp-year" placeholder="2020" />
        </div>
        <div class="col-50">
          <label HTMLfor="zip">CVV</label>
          <input type="text" id="cvv" placeholder="555" />
        </div>
      </div>
      <div>
        <Link href="../thankyou">
          <input
            type="submit"
            value="Continue to checkout"
            class="btn"
            onClick={() => {
              Cookies.remove('cart');
            }}
          />
        </Link>
      </div>
    </div>
  );
}
