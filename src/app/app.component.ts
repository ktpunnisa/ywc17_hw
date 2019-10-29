import { Component, OnInit } from '@angular/core';
import { ChimShopChaiService } from './chim-shop-chai.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ywc17';

  constructor(private chimShopChaiService: ChimShopChaiService) {}

  ngOnInit() {
    this.getChimShopChai();
  }

  getChimShopChai() {
    this.chimShopChaiService.getChimShopChai().subscribe(res => {
      this.chimShopChaiService.chimShopChai = res;
    });
  }
}
