import React, { Component } from "react";

export class Newsitem extends Component {

  render() {
    let {title,description, imageURL, newsURL}=this.props;
    return (
      <div>
        <div className="card">
          <img src={!imageURL? "https://c.ndtvimg.com/2022-11/leo21cp4_twitter-office_625x300_19_November_22.jpg":imageURL} 
          className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href={newsURL} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark"> Read More </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
