import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageURL, newsURL, author, date, source } = this.props;
    return (
      <div>
        <div className="card">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {source}
          </span>
          <img
            src={
              !imageURL
                ? "https://c.ndtvimg.com/2022-11/leo21cp4_twitter-office_625x300_19_November_22.jpg"
                : imageURL
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small class="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsURL}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              {" "}
              Read More{" "}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
