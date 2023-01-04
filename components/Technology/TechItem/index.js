function TechItem(props) {
  const { techData } = props;
  const { id, title, body, imageUrl, head } = techData;
  return (
    // <div className="container">
    //   <div className="row">
    <div
      key={id}
      className="mx-4 d-flex flex-column justify-content-around  align-items-center flex-md-row  "
    >
      <div className="order-1 order-md-2  col-md-5">
        <img
          className="w-100"
          style={{ height: "310px", width: "100%", objectFit: "scale-down" }}
          src={imageUrl}
          alt={`img_${id}`}
        />
      </div>

      <div className="text-center order-2 order-md-1 col-md-6 ">
        <p className="my-3">{head}</p>
        <h1
          style={{ fontSize: "58px", fontFamily: "Bellefair" }}
          className="my-3"
        >
          {title}
        </h1>
        <p className="my-3">{body}</p>
      </div>
    </div>
    //   </div>
    // </div>
  );
}

export default TechItem;
