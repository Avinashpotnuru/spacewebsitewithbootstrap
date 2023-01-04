const CrewItem = (props) => {
  const { crewData } = props;

  const { id, imageUrl, title, body } = crewData;

  return (
    <li className="d-flex flex-column justify-content-center align-items-center">
      <div className=" d-flex  flex-md-row flex-sm-justify-content-between flex-column justify-content-center align-items-center mx-4">
        <div className="order-1 order-md-2 mx-4 py-4">
          <img
            style={{ width: "177px", height: "222px" }}
            src={imageUrl}
            alt={`img-${id} `}
          />
        </div>
        <div className="order-2 order-md-1 mx-4 p-sm-5 ">
          <h1
            style={{ fontSize: "56px", fontFamily: "Bellefair" }}
            className="px-4 py-3"
          >
            {title}
          </h1>
          <p className=" py-3">{body}</p>
        </div>
      </div>
    </li>
  );
};

export default CrewItem;
