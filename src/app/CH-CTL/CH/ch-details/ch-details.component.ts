import { Component, OnInit, Input, EventEmitter, SimpleChanges, Output } from '@angular/core';

import { CHService } from '../../ch.service';
import { CH } from '../../CH';

import {  AngularFireDatabase } from '@angular/fire/database';


// import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
// import paginate = require('jw-paginate') from 'jw-paginate';
// import {paginate} from 'jw-paginate';




@Component({
  selector: 'app-ch-details',
  templateUrl: './ch-details.component.html',
  styleUrls: ['./ch-details.component.css']
})
export class CHDETAILSComponent implements OnInit {

  @Input() tailieu: CH;


  @Input() items: Array<any>;
  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 1;
  @Input() maxPages = 10;

  pager: any = {};

  
   
  pageOfItems: Array<any>;
  

constructor(private tailieuService: CHService ) { 



}
collection = [];
ngOnInit() {
  /*----------------------------------------------------------*/

  for(let i=1;i<= 100 ;i++){
    let Obj = {'name': `cau hoi ${i}`,'code': `${i}`}
    this.collection.push(Obj);
    }
 
  // if (this.items && this.items.length) {
  //   this.setPage(this.initialPage);
  // }

  /*----------------------------------------------------------*/
}

updateActive(isActive: boolean) {
this.tailieuService
.updateTailieu(this.tailieu.key, { active: isActive })
.catch(err => console.log(err));
}

deleteTailieu() {
this.tailieuService
.deleteTailieu(this.tailieu.key)
.catch(err => console.log(err));
}



/*  ------------------------------------------------------------------------------------------*/


onChangePage(pageOfItems: Array<any>) {
  // update current page of items
  this.pageOfItems = pageOfItems;
}

// ngOnChanges(changes: SimpleChanges) {
//   // reset page if items array has changed
//   if (changes.items.currentValue !== changes.items.previousValue) {
//     this.setPage(this.initialPage);
//   }
// }

// private setPage(page: number) {
//   // get new pager object for specified page
//   // this.pager = paginate(this.items.length, page, this.pageSize, this.maxPages);

//   // get new page of items from items array
//   var pageOfItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);

//   // call change page function in parent component
//   this.changePage.emit(pageOfItems);
//   }
}