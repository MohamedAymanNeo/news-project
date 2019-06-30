import { Component } from '@angular/core';
import { NewsService } from './news.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'channel-app';
  response: any;
  items:any = [];
  constructor(private serv:NewsService, private http:HttpClient) {}

  ngOnInit() {
    
    this.serv.getData().subscribe((response) => {
      this.response = response;
      let news = this.response.items.filter((item, index) => {
        return index < 7
      })
      this.items.push(...news)
    })
  }

  ShowMore() {
    let moreNews = this.response.items.filter((item, index) => {
      return index >= 7
    })
    this.items = [...new Set(this.items.concat(...moreNews))]
  }
}
