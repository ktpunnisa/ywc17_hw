import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChimShopChai, NavbarItem } from './chim-shop-chai';

@Injectable({
  providedIn: 'root',
})
export class ChimShopChaiService {
  chimShopChai: ChimShopChai;
  footer1 = [
    {
      title: 'ข้อมูลลงทะเบียนประชาชน',
      detail: 'การรับสิทธิ การใช้งานแอปพลิเคชั่น “เป๋าตัง” และ “ถุงเงิน”',
      contact: 'ติดต่อ ชิมช้อปใช้ Call Center by Krungthai โทร.0 2111 1144',
    },
    {
      title: 'ข้อมูลลงทะเบียนผู้ประกอบการ',
      detail: 'เงื่อนไขและวิธีการเข้าร่วมมาตรการฯ',
      contact: 'ติดต่อ โทร.0 2270 6400 กด 7',
    },
    {
      title: 'ข้อมูลเที่ยวชิมช้อปใช้',
      detail: 'ติดต่อ ททท.',
      contact: 'โทร1672',
    },
  ];
  footer2 = [
    'Copyright © 2003-2019',
    'ลงทะเบียนข้าร่วมมาตรฐาน',
    'ขั้นตอนการเข้าร่วมทั้งหมด',
    'รายชื่อร้านค้าที่เข้าร่วมรายการ',
  ];
  constructor(private http: HttpClient) {}

  getChimShopChai(): Observable<any> {
    return this.http.get('https://panjs.com/ywc.json');
  }

  getNavbarItems() {
    return this.chimShopChai ? this.chimShopChai.navbarItems : null;
  }
}
