import '../style/style.css'
import visiimg from '../images/visit/VISITUS.png'
const Visitus = () => {
  return (
    <div className='container text-center mt-5 visit_us'>
        <h4 className='pb-5'>VISIT US</h4>
        <div className='row row-cols-1 row-cols-md-3'>
            <div className='col'>
                <b >MUMBAI</b>
                <p className='pt-4' style={{textTransform:'uppercase'}}>B-5, Kajupada Pipeline Rd, near Holiday Inn Mumbai International Airport, an IHG Hotel, Satya Nagar, Sathi D Souza Nagar, Saki Naka, Mumbai, Maharashtra 400072</p>
            </div>
            <div className='col visit_us_img'>
                <img src={visiimg} alt="sandwich" />
            </div>
            <div className='col'>
                <b>HOURS</b>
                <p className='pt-4'>
                    <b>Monday - Sunday:</b> <br />
                    <b className='p-0 m-0'>Lunch : </b><span>12:00 AM TO 03:00PM</span> <br />
                    <b>Dinner : </b><span>08:00 PM TO 01:00AM</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Visitus