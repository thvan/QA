import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { CHService } from '../../ch.service';
import { map } from 'rxjs/operators';
import { CTLService } from '../../ctl.service';

// import paginate = require('jw-paginate');

@Component({
  selector: 'app-ch-list',
  templateUrl: './ch-list.component.html',
  styleUrls: ['./ch-list.component.css']
})
export class CHLISTComponent implements OnInit {


  tailieu12: any;


  //  items = [];
   pageOfItems: Array<any>;


  @Input() items: Array<any>;
  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 10;
  @Input() maxPages = 10;

  pager: any = {};

  collection = [];
 
  constructor(private tailieuService: CHService,private ctl: CTLService) { }
 
  ngOnInit() {
         this.getTailieuList();
        // let Obj = this.getTailieuList();
        // this.collection.push(Obj);
        for(let i=1;i<=this.tailieu12;i++){
          let Obj = {'name': `cau hoi ${i}`,'code': `EMP00 ${i}`}
          this.collection.push(Obj);
          }
  }
 
  getTailieuList() {
    this.tailieuService.getTailieuList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(tailieu12 => {
      this.tailieu12 = tailieu12;
    });
  }
 
  getdapan(){
    this.ctl.getTailieuList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(tailieu12 => {
      this.tailieu12 = this.getTailieuList();
    });
  }

  /*-----------------------------------------------------------------------------------------------*/

  
  // onChangePage(pageOfItems: Array<any>) {
  //   // update current page of items
  //   this.pageOfItems = pageOfItems;
  // }

  // ngOnChanges(changes: SimpleChanges) {
  //   // reset page if items array has changed
  //   if (changes.items.currentValue !== changes.items.previousValue) {
  //     this.setPage(this.initialPage);
  //   }
  // }
  
  // private setPage(page: number) {
  //   // get new pager object for specified page
  //   this.pager = paginate(this.items.length, page, this.pageSize, this.maxPages);
  
  //   // get new page of items from items array
  //   var pageOfItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);
  
  //   // call change page function in parent component
  //   this.changePage.emit(pageOfItems);
  //   }

  
}
