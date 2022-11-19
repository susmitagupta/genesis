import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  

  constructor() {
    super();
    this.state = {
      articles: [],
      loding: false,
    };
  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=8ce297000d2e48a594d3a877bf5139ec";
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({articles: parsedData.articles});
  }
  render() {
    return (
      <div className="container my-3">
        <h1>Top Stories</h1>

        <div className="row">
          {this.state.articles.map((element) => {
           return  <div className="col-md-4" key={element.url} >
                <Newsitem title={element.title ? element.title.slice(0, 45) : " "} 
                description={element.description ? element.description.slice(0, 60) : " "}
                imageURL={element.urlToImage} newsURL={element.url} />
              </div>
              
  })}
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" class="btn btn-dark">&larr; Previous</button>
        <button type="button" class="btn btn-dark">Next &rarr;</button>
        </div>
      </div>
    );
  }
}
