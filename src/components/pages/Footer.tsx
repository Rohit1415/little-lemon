import '../style/style.css'
import logoInWhite from '../images/logoInWhite.png'
const Footer = () => {
  return (
    <footer>
      <div className="container text-center footer">
        <h3>THANKS FOR VISIT</h3>
        <div className="row">
          <div className="col-6">
            <p>
              <b>Location :</b>
            </p>
            <p>
              B-5, KAJUPADA PIPELINE RD, NEAR HOLIDAY INN MUMBAI INTERNATIONAL
              AIRPORT, AN IHG HOTEL, SATYA NAGAR, SATHI D SOUZA NAGAR, SAKI
              NAKA, MUMBAI, MAHARASHTRA 400072
            </p>
            <p>
              <b>MONDAY TO SUNDAY :</b>
            </p>
            <p>
              <b>lunch : </b> 12:00 AM TO 03:00PM
            </p>
            <p>
              <b>dinner : </b>08:00 PM TO 01:00AM
            </p>
          </div>
          <div className='col-6'>
            <img src={logoInWhite} alt="" />
          </div>
        </div>
      
      </div>
    </footer>
  );
};

export default Footer;
