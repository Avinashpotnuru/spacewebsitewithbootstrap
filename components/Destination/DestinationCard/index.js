function DestinationCard(props) {
  const { destinationData } = props;
  const { id, title, body, imageurl, avgspeed, time } = destinationData;

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center flex-sm-row col-md-12 "
      key={id}
    >
      <div className="col-md-5 text-center">
        <img style={{ height: "170px", width: "170px" }} src={imageurl} />
      </div>
      <div className="text-center text-lg-start col-md-7">
        <h1
          style={{ fontSize: "58px", fontFamily: "Bellefair" }}
          className="text-center my-3"
        >
          {title}
        </h1>
        <p className="text-center my-3 mx-3">{body}</p>
        <div className="d-sm-flex justify-content-around">
          <div className="text-center my-3  ">
            <p>AVG. DISTANCE</p>
            <p>{avgspeed}</p>
          </div>

          <div className="text-center my-3">
            <p>Est. travel time</p>
            <p>{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;
