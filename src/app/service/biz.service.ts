import { Injectable } from '@angular/core';
import { BizInfo } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class BizService {

  private bizInfo: BizInfo;

  constructor() {
    this.loadBizInfo();
  }

  setBizInfo(bizInfo: BizInfo) {
    this.bizInfo = bizInfo;
  }

  getBizInfo(): BizInfo {
    return this.bizInfo;
  }

  loadBizInfo() {
    this.bizInfo = {
      id: 0,
      shopName: 'Yiyun',
      logo: '/assets/images/Mee_logo.png',
      color: '#90c73e',
      shopImg: '/assets/images/shopImg.png'
    };
  }

}
