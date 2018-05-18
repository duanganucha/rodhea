import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { YoutubeProvider } from './../../providers/youtube/youtube';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  videoId: string;
  playlists;
  time;
  items = [];
  shouldShowCancel;

  

  constructor(public navCtrl: NavController,
    private ytProvider: YoutubeProvider,
    private alertCtrl: AlertController
  ) { }

  ngOnInit(): void {
    this.onPlaylists();
  }

  searchPlaylists() {
    this.ytProvider.getSearchPlaylistsForChannel(this.videoId).subscribe(data => {
      console.log('playlists: ', data);
      this.playlists = data;
    }, err => {
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'No Playlists found for that Channel ID',
        buttons: ['OK']
      });
      alert.present();
    })
  }

  onCancel(){
    // this.videoId = "";
    // console.log('close.')
    this.ytProvider.getSearchPlaylistsForChannel(this.videoId).subscribe(data => {
      console.log('playlists: ', data);
      this.playlists = data;
    }, err => {
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'No Playlists found for that Channel ID',
        buttons: ['OK']
      });
      alert.present();
    })
  }




  onPlaylists() {
    this.ytProvider.getPlaylistsForChannel().subscribe(data => {
      console.log('playlists: ', data);
      this.playlists = data;
    }, err => {
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'No Playlists found for that Channel ID',
        buttons: ['OK']
      });
      alert.present();
    })

  }


  selectVideo(e, post): void {
    this.navCtrl.push('PlayerPage', { id: post });

  }

 


}
