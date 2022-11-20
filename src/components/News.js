import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'



export class News extends Component {
static defaultProps={
    country: "in",
    pageSize:5,
    category: "general"
}
static propTypes={
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
 

}
  constructor() {
    super();
    this.state = {
      articles: [],
      loding: false,
      page: 1,
      totalResults: 38
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8ce297000d2e48a594d3a877bf5139ec&page=1&pageSize=${this.props.pageSize}`; 
    this.setState({loding:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalArticles: parsedData.totalResults ,  loding:false});
  }
  handlePrevious = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8ce297000d2e48a594d3a877bf5139ec&page=${ this.state.page-1 }&pageSize=${this.props.pageSize}`; 
    this.setState({loding:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles ,
      page: this.state.page-1,
      loding:false
    });
    
  };
  handleNext = async () => {
    if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))
    {

    }
    else
    {
      console.log("next");
      console.log(this.state.page);
      console.log(this.state.page.totalResults/10);
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8ce297000d2e48a594d3a877bf5139ec&page=${ this.state.page+1 }&pageSize=${this.props.pageSize}`; 
      this.setState({loding:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      
      this.setState({ articles: parsedData.articles ,
        page: this.state.page+1,
        loding:false
      });
    }
   
   
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">Top Stories</h1>
        {this.state.loding && <Spinner/>}
        <div className="row">
          {!this.state.loding && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 45) : " "}
                  description={
                    element.description ? element.description.slice(0, 60) : " "
                  }
                  imageURL={element.urlToImage}
                  newsURL={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page === 1}
            className="btn btn-dark"
            onClick={this.handlePrevious}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)}
            className="btn btn-dark"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
