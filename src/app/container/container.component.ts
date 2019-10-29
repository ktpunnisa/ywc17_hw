import { Component, OnInit } from '@angular/core';
import { ChimShopChaiService } from '../chim-shop-chai.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  brands = ['MOF.png', 'FPO.png', 'CGD.png', 'Krungthai.png', 'MOTS.png', 'TAT.png'];
  bannerSqs = ['Banner_KTB_Sq.png', 'Banner_CGD_Sq.png', 'Banner_TAT_Hotline_Sq.png'];
  brandPath = 'assets/img/brand_logo/';
  bannerSqPath = 'assets/img/banner_sq/';

  constructor(private chimShopChaiService: ChimShopChaiService) {}

  ngOnInit() {}

  get chimShopChai() {
    return this.chimShopChaiService.chimShopChai;
  }

  getImg(img, path) {
    return `${path}${img}`;
  }
}
