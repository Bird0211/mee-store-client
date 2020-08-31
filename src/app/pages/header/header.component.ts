import { Component, OnInit } from '@angular/core';
import { BizInfo, User, Category, Group, Item } from 'src/app/interface';
import { BizService } from 'src/app/service/biz.service';
import { UserService } from 'src/app/service/user.service';
import { SearchService } from 'src/app/service/search.service';
import { CategoryService } from 'src/app/service/category.service';
import { GroupService } from 'src/app/service/group.service';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  bizInfo: BizInfo;

  user: User;

  hotKeys: string[];

  filter: string;

  category: Category[];

  group: Group[];

  isOpenCategory = false;

  selectCategory: Category;

  selectItem: Item[];

  items: Item[];

  constructor(private bizService: BizService,
              private userService: UserService,
              private searchService: SearchService,
              private categoryService: CategoryService,
              private groupService: GroupService,
              private itemService: ItemService
              ) { }

  ngOnInit(): void {
    this.bizInfo = this.bizService.getBizInfo();
    this.user = this.userService.getUser();
    this.loadHotKeys();
    this.loadCategory();
    this.loadTopGroup();
  }

  loadHotKeys = () => {
    this.hotKeys = this.searchService.loadHotKeys(this.bizInfo.id);
  }

  search(key: string) {
    this.searchService.search(key);
  }

  loadCategory() {
    this.categoryService.loadCategory(this.bizInfo.id).subscribe(result => this.category = result);
  }

  jumpToCategory(categoryId: number){

  }

  loadTopGroup() {
    this.groupService.loadTopGroup(this.bizInfo.id).subscribe(result => this.group = result);
  }

  mouseOver(item: Category){
    this.selectCategory = item;
    this.loadItems(item.id);
  }

  mouseLeave(item: Category) {
    /**
     * 
    if (this.selectCategory === item) {
      this.selectCategory = null;
      this.selectItem = null;
    }
     */
  }

  loadItems(categoryId: number) {
    this.itemService.loadItemByCategory(categoryId).subscribe(result => this.selectItem = result);
  }

}
