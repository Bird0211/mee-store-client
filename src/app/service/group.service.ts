import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor() { }

  loadTopGroup(bizId: number): Observable<Group[]> {
    const result = new Observable<Group[]>((observer) => {
      const data: Group[] = [{
        id: 0,
        name: '奶粉',
      },
      {
        id: 1,
        name: '买赠专区',
      },
      {
        id: 2 ,
        name: '新品上市',
      },
      {
        id: 3 ,
        name: '清仓特惠',
      }
    ];
      observer.next(data);
    });
    return result;
  }
}
