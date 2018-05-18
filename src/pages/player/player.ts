import { HomePage } from './../home/home';
import { YoutubeProvider } from './../../providers/youtube/youtube';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController, App } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage {

  video: any;
  videoId: string;
  video_id :any;

  constructor(private navParams: NavParams,
    public sanitizer: DomSanitizer,
    private ytProvider: YoutubeProvider,
    private youtube: YoutubeVideoPlayer,
    private plt: Platform,
    public viewCtrl: ViewController,
    public appCtrl: App
  ) {
      
    this.video = this.navParams.get('id');
    this.video_id = this.video.id.videoId;
    this.videoId = "http://www.youtube.com/embed/" + this.video.id.videoId+ '?rel=0&showinfo=0'
    console.log(this.videoId)

  }

  updateVideoUrl(id: string) {
    let dangerousVideoUrl = 'https://www.youtube.com/embed/' + this.video_id + '?rel=0&showinfo=0';
    return this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
  }

  watch_on_youtube(video_id) {
    this.youtube.openVideo(video_id);
  }

  backButton(){
    const root = this.appCtrl.getRootNav (); // in this line, you have to declare a root, which is the app's root 
  root.popToRoot ();
  }
}
