import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) {}
   getData() {
    return this.http.get('https://api.rss2json.com/v1/api.json?rss_url=http://rss.cnn.com/rss/edition.rss')
   }

  //  splitingNews() {
  //   this.items.map((item) => {
  //     console.log(item)
  //     this.news.push(item);
  //     console.log(this.news)
  //   })
  //  }
  
}
