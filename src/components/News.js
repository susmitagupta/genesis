import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  articles = [
    {
      "source": { "id": "news-com-au", "name": "News.com.au" },
      "author": null,
      "title": "‘Total disrespect’: Warne’s manager’s fury",
      "description": "<p>Shane Warne&rsquo;s former manager has fumed at ABC health expert Norman Swan for linking the cricket legend's death from a heart attack to Covid.</p>",
      "url": "https://www.news.com.au/world/coronavirus/australia/shane-warnes-manager-fumes-at-dr-norman-swan-for-claiming-cricket-stars-death-was-linked-to-covid/news-story/a02d257614d93741533cf82407b87e14",
      "urlToImage": "https://content.api.news/v3/images/bin/31cb884423d0982a9b9728c6207c17aa",
      "publishedAt": "2022-11-16T08:34:00Z",
      "content": "Shane Warne’s former manager has fumed at ABC health expert Norman Swan for linking the cricket legend's death from a heart attack to Covid.\r\nWarne died aged 52 earlier this year, prompting an outpou… [+3265 chars]"
    },
    {
      "source": { "id": "google-news-au", "name": "Google News (Australia)" },
      "author": "Amanda Meade",
      "title": "Norman Swan apologises for linking Kimberley Kitching and Shane Warne’s deaths to Covid",
      "description": "Swan suggested there might be a Covid link with deaths of Labor senator and cricketing legend",
      "url": "https://www.theguardian.com/media/2022/nov/16/norman-swan-apologises-for-linking-kimberley-kitching-and-shane-warnes-deaths-to-covid",
      "urlToImage": "https://i.guim.co.uk/img/media/37debe7f59d2f8c9d82693013efdb62ecabf1905/0_41_1120_672/master/1120.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=3b55ef39d47479a2257a1b6b5729e8fb",
      "publishedAt": "2022-11-15T22:50:00+00:00",
      "content": "The ABC broadcaster Norman Swan has apologised to the late Kimberley Kitchings family for saying on ABC News the Labor senators death may have been linked to Covid-19.\r\nSwan also linked Shane Warnes … [+3867 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loding: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h1>Top Stories</h1>

        <div className="row">
          {this.state.articles.map((element) => {
           return  <div className="col-md-4" key={element.url} >
                <Newsitem title={element.title} description={element.description} imageURL={element.urlToImage} newsURL={element.url} />
              </div>
              
  })}
        </div>
      </div>
    );
  }
}
