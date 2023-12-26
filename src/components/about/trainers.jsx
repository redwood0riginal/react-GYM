import team1 from "../../assets/img/team/team-1.jpg";
import team2 from "../../assets/img/team/team-2.jpg";
import team3 from "../../assets/img/team/team-3.jpg";

import "./about.css"

const Trainers = () => {
  return (
    <section id="team" className="trainers-section ">
    <div className="container py-5">
      {/* <!-- title div --> */}
      <div className="text-center">
        
        
        <h2 className="font-bold mb-4  coaches">
          Team Of Expert Coaches
        </h2>
        <p className="text-white font-medium">
          Expert team of coaches helps you succeed in any goal,
          <br /> personalized guidance and motivation provided!
        </p>
      </div>
  
      {/* <!-- trainers div --> */}
      <div className="mt-4">
        {/* <!-- Assuming TrainerBox is a Bootstrap component --> */}
        <div className="d-flex justify-content-center align-items-center">
        <div id="carouselExampleCaptions" className="carousel slide w-50">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={team1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="trainer-name">Anna June</h5>
        <p>Yoga Trainer</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={team2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="trainer-name">Jonathan Doe</h5>
        <p>Crossfit Trainer</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={team3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="trainer-name">John Lewis</h5>
        <p>Personal Trainer</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
      </div>
    </div>
  </section>
  
 
 )
}

export default Trainers