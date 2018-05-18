// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class YoutubeProvider {

  channelID: string = 'UCfHAI3CfbvBQCX2hrEc9JZQ';
  maxResults: string = '50';
  pageToken: string; 
  googleToken: string = 'AIzaSyDJTfl8aQKUylXR2b7KSy3aNobfEPKrE0c';
  searchQuery: string = '';
  posts: any = [];
  onPlaying: boolean = false; 

  constructor(public http: Http) {  }

  getPlaylistsForChannel() {
    let url = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&channelId=' + this.channelID + '&q=' + this.searchQuery + '&type=video&order=viewCount&maxResults=' + this.maxResults + '&key=' + this.googleToken;
    console.log(url)
   
    if(this.pageToken) {
      url += '&pageToken=' + this.pageToken;
    }
    return this.http.get(url)
      .map((res) => {
        return res.json()['items'];
      })
  }

  getSearchPlaylistsForChannel(searchValue) {
    this.searchQuery = searchValue;
    let url = 'https://www.googleapis.com/youtube/v3/search?part=id,snippet&channelId=' + this.channelID + '&q=' + this.searchQuery + '&type=video&order=viewCount&maxResults=' + this.maxResults + '&key=' + this.googleToken;
    console.log(url)
   
    if(this.pageToken) {
      url += '&pageToken=' + this.pageToken;
    }
    return this.http.get(url)
      .map((res) => {
        return res.json()['items'];
      })
  }

}
