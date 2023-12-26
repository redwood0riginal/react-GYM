import  './chooseUs.css'
  import { faBicycle, faAppleAlt, faMap, faAdjust } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ChooseUs = () => {
  return (

    <section className="choseus-section spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title  ">
                        <span>Why chose us?</span>
                        <h2>PUSH YOUR LIMITS FORWARD</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div className="cs-item">
                        <span> <FontAwesomeIcon style={{fontSize:"50px"}} icon={faBicycle}/></span>
                        <h4>Modern equipment</h4>
                        <p>Experience cutting-edge fitness with state-of-the-art machines and smart gear, elevating your workout to new heights of efficiency and enjoyment.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="cs-item">
                        <span><FontAwesomeIcon style={{fontSize:"50px"}} icon={faAppleAlt}/></span>
                        <h4>Healthy nutrition plan</h4>
                        <p>Nourish your body with a personalized nutrition plan, embracing whole foods and tailored to your unique dietary needs for sustained energy and overall well-being.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="cs-item">
                        <span ><FontAwesomeIcon style={{fontSize:"50px"}} icon={faMap}/></span>
                        <h4>Professional training plan</h4>
                        <p>Unlock your athletic potential with a professionally crafted training plan, blending cardiovascular workouts, strength training, and recovery strategies for an effective fitness approach.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="cs-item">
                        <span><FontAwesomeIcon style={{fontSize:"50px"}} icon={faAdjust}/></span>
                        <h4>Unique to your needs</h4>
                        <p>Tailor your health journey to fit your individual preferences and constraints, ensuring a personalized and enjoyable path to a healthier lifestyle.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default ChooseUs