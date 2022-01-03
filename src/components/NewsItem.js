import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-4">
      <div className="card" style={{ width: "25rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://images.livemint.com/img/2021/12/29/600x338/6771d0f4-418c-11ec-854b-7d0b3305a408_1640769244925_1640769256438.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
          style={{ width: "100%", height: "10vw", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5
            className="card-title"
            style={{ width: "100%", height: "3.4vw", objectFit: "cover" }}
          >
            {title}...
          </h5>
          <p
            className="card-text"
            style={{ width: "100%", height: "5vw", objectFit: "cover" }}
          >
            {description}...
          </p>
          <p
            className="card-text my-3"
            style={{ width: "100%", height: "2.3vw", objectFit: "cover" }}
          >
            <small className="text-muted">
              <i>
                {" "}
                By {!author ? "Unknown" : author.slice(0, 30)} on{" "}
                {new Date(date).toGMTString()}
              </i>
            </small>
          </p>

          <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
