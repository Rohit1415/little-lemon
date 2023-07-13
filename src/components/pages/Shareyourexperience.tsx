import "../style/style.css";
import logo from "../images/logo.png";
import { FloatingLabel } from "react-bootstrap";
import { ChangeEvent, useState } from "react";

interface Experience {
  [key: string]: string;
}

const Shareyourexperience = () => {
  const [ary, setary] = useState<Experience[]>([]); // Updated type annotation
  const [obj, setobj] = useState<Experience>({});
  
  const getAllExperience = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setobj((prevObj) => ({
      ...prevObj,
      [name]: value,
    }));
  };

  const getExperience = (e: React.FormEvent<HTMLFormElement>): void => { // Updated event type
    e.preventDefault();
    ary.push(obj)
    setary((prevAry) => [...prevAry, obj]);
    console.log(ary)
  };

  return (
    <div className="container sye-form-extra text-center">
      <h4>SHARE YOUR EXPERIENCE</h4>
      <img src={logo} alt="logo" />
      <div className="sye-form">
        <form onSubmit={getExperience}> {/* Added onSubmit event */}
          <div className="for-logo-set">
            <FloatingLabel
              controlId="floatingInput"
              label="Which Location did you visit"
              className="mb-3"
            >
              <input
                onChange={getAllExperience}
                name="location"
                type="text"
                className="form-control"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Which item did you try"
              className="mb-3"
            >
              <input
                onChange={getAllExperience}
                name="item"
                type="text"
                className="form-control"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Add Your Review"
              className="mb-5"
            >
              <textarea
                onChange={getAllExperience}
                name="review"
                className="form-control"
                rows={20}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Add your email"
              className="mb-3"
            >
              <input
                onChange={getAllExperience}
                name="email"
                type="email"
                className="form-control"
              />
            </FloatingLabel>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit">SUBMIT REVIEW</button> {/* Added type="submit" */}
          </div>
          <p>
            You are submitting your information to Friends & Family and Popmenu,
            which powers this site and is sponsoring this giveaway. Popmenu's
          </p>
        </form>
      </div>
    </div>
  );
};

export default Shareyourexperience;
