import React, { Component } from "react";

export class Newsitem extends Component {

  render() {
    let {title,description, imageURL, newsURL}=this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageURL? "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg":imageURL} 
          className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href={newsURL} target="_blank" className="btn btn-sm btn-primary"> Read More </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
