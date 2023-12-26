import "./background.css"


const Background = ({title}) => {
  return (
    <section className="bg-banner-section" >
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="bs-text">
            <h2>{title}</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Background