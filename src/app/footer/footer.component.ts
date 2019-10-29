import { Component, OnInit } from '@angular/core';
import { ChimShopChaiService } from '../chim-shop-chai.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private chimShopChaiService: ChimShopChaiService) {}

  ngOnInit() {}

  get footer1() {
    return this.chimShopChaiService.footer1;
  }

  get footer2() {
    return this.chimShopChaiService.footer2;
  }

  get navbarItems() {
    return this.chimShopChaiService.getNavbarItems();
  }
}
