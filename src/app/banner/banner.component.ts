import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  bannerPath = 'assets/img/banner/';
  banners = ['banner-left.png', 'banner-center.png', 'banner-right.png'];
  constructor() {}

  ngOnInit() {}

  getBannerImg(banner: string) {
    return `${this.bannerPath}${banner}`;
  }

  getBannerStyle(banner: string) {
    return {
      background: `url(${this.getBannerImg(banner)}) no-repeat center center`,
      backgroundSize: 'cover',
      height: '100%',
      width: '100%',
      overflow: 'visible',
    };
  }
}
