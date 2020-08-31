import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  constructor() { }

  loadHotKeys(bizId: number): string[] {
    return ['防晒', '蔓越莓', '羊奶粉', '爱他美'];
  }

  search(key: string) {

  }

}
