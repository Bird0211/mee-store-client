import { Injectable } from '@angular/core';
import { Item } from '../interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  loadItemByCategory(id: number): Observable<Item[]> {
    const result = new Observable<Item[]>((observer) => {
      const data: Item[] = [
        {
          id: 0,
          name: 'Merino 美丽诺 芦荟胶250 ML',
          image: 'https://oss.bestl2.com/nzh/product/hk77gL7zn8SgyJGVSftWm9vm.jpg',
          price: 47.53
        }
      ];
      observer.next(data);
    });
    return result;
  }
}
