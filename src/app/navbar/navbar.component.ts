import { Component, OnInit } from '@angular/core';
import { ChimShopChaiService } from '../chim-shop-chai.service';
import { ChimShopChai } from '../chim-shop-chai';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isOpen = false;
  constructor(private chimShopChaiService: ChimShopChaiService) {}

  ngOnInit() {}

  get navbarItems() {
    return this.chimShopChaiService.getNavbarItems();
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
