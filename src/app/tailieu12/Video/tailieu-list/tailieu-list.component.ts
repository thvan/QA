// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-tailieu-list',
//   templateUrl: './tailieu-list.component.html',
//   styleUrls: ['./tailieu-list.component.css']
// })
// export class TailieuListComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Component, OnInit } from '@angular/core';
import { TailieuService } from '../../tailieu.service';
import { map } from 'rxjs/operators';
 
@Component({
  selector: 'app-tailieu-list',
  templateUrl: './tailieu-list.component.html',
  styleUrls: ['./tailieu-list.component.css']
})
export class TailieuListComponent implements OnInit {
 
  tailieu12: any;
 
  constructor(private tailieuService: TailieuService) { }
 
  ngOnInit() {
    this.getTailieuList();
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
 
  deleteTailieu() {
    this.tailieuService.deleteAll().catch(err => console.log(err));
  }
 
}
