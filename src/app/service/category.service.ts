import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Group } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  loadCategory(bizId: number): Observable<Category[]> {
    const result = new Observable<Category[]>((observer) => {
      const data: Category[] = [{
        id: 0,
        name: '个人护理',
        subCategory: [
          {
            id: 1001,
            name: '头发护理'
          },
          {
            id: 1002,
            name: '美容工具'
          }
        ]
      },
      {
        id: 1,
        name: '滋补保健',
        subCategory: [
          {
            id: 1001,
            name: '美体塑身'
          },
          {
            id: 1002,
            name: '男士专用'
          },
          {
            id: 1003,
            name: '女士专用'
          }
        ]
      }
    ];
      observer.next(data);
    });
    return result;
  }


}


