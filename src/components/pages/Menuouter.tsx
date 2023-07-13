import "../style/style.css";
import divside1 from "../images/menu/side1img.png";
import divside1_1 from "../images/menu/side1.1img.jpeg";
import divside2 from "../images/menu/side2img.png";
import divside2_2 from "../images/menu/side2.2img.jpg";
const Menuouter = () => {
    const goToMenu = () => {
        console.log('you redirect to menu ')
        window.location.href = '/menu'
    }
  return (
  <>

    <div className="row row-cols-1 row-cols-lg-2  forspacedetact">
      <div className="menuouter-div1-side1 col">
        <img src={divside1} alt="" />
        <h4>BAKERY & RESTAURANT</h4>
        <p>Currently open for dine in, take out & delivery</p>
        <button onClick={goToMenu}>VIEW MORE</button>
      </div>
      <div className="menuouter-div1-side2 col">
        <img src={divside1_1} alt="" />
      </div>
    </div>
    {/* /////////////////////////second menu item////////////////////////////////////// */}
      <div className="row row-cols-1 row-cols-lg-2  forspacedetact">
      <div className="menuouter-div1-side2 col">
        <img src={divside2_2} alt="" />
      </div>
      <div className="menuouter-div1-side1 col">
        <img src={divside2} alt="" />
        <h4>MARKET & CAFE WITH FRESH BAKED GOODS</h4>
        <p>Stock up on bread, pastries, and grab n' go salads and sandwiches.</p>
      </div>
    </div>
  </>
  );
};

export default Menuouter;
