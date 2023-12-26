function Friday() {
  return (
    <>
      <div className="mt-5">
        <div className="d-flex flex-column justify-content-center align-items-center gap-1">
        <ul className="d-flex p-0 w-100 flex-sm-row flex-column text-center">
            <li className="py-2 px-3 bg-light w-100">
              <p className="text-14 font-medium text-muted para-title">class Name</p>
              <p className="text-18 text-dark font-bold mt-3 para-text">Crossfit</p>
            </li>
            <li className="py-2 px-3 bg-light w-100 text-center-md">
              <p className="text-14 font-medium text-muted para-title">Time</p>
              <p className="text-18 text-dark font-bold mt-3 para-text">
                9:00am - 10:00am
              </p>
            </li>
            <li className="py-2 px-3  bg-light w-100 text-center-md">
              <p className="text-14 font-medium text-muted para-title">Trainer</p>
              <p className="text-18 text-dark font-bold mt-3 para-text">Mike Mich</p>
            </li>
            <li className="py-2 px-3 bg-light w-100 text-end-md ">
              <button className="btn schedule-btn p-2 btn-sm rounded-3 mt-3">
                Join Now
              </button>
            </li>
          </ul> <ul className="d-flex p-0 w-100 flex-sm-row flex-column text-center">
            <li className="py-2 px-3 bg-light w-100">
              <p className="text-14 font-medium text-muted para-title">class Name</p>
              <p className="text-18 text-dark font-bold mt-3 para-text">Body Building</p>
            </li>
            <li className="py-2 px-3 bg-light w-100 text-center-md">
              <p className="text-14 font-medium text-muted para-title">Time</p>
              <p className="text-18 text-dark font-bold mt-3 para-text">
                2:00pm - 4:00pm
              </p>
            </li>
            <li className="py-2 px-3  bg-light w-100 text-center-md">
              <p className="text-14 font-medium text-muted para-title">Trainer</p>
              <p className="text-18 text-dark font-bold mt-3 para-text">Robert Cage</p>
            </li>
            <li className="py-2 px-3 bg-light w-100 text-end-md ">
              <button className="btn schedule-btn p-2 btn-sm rounded-3 mt-3">
                Join Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Friday;
