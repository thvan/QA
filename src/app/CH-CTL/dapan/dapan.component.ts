// import { Component, OnInit } from '@angular/core';
// import { CTLService } from '../ctl.service';
// import { CHService } from '../ch.service';
// import { CTL } from '../CTL';
// import { CTLLISTComponent} from '../CTL/ctl-list/ctl-list.component';
// import { CTLDETAILSComponent} from '../CTL/ctl-details/ctl-details.component'

// import { map } from 'rxjs/operators';

// @Component({
//   selector: 'app-dapan',
//   templateUrl: './dapan.component.html',
//   styleUrls: ['./dapan.component.css']
// })
// export class DapanComponent implements OnInit {

//   tailieu12: any;
//   constructor(private ch:CHService, private ctl: CTLService , private l: CTLLISTComponent, private d: CTLDETAILSComponent) { }

//   ngOnInit() {
//   }

//   getcauhoi(){
//       this.ch.getTailieuList();
//   }

//   getctl(){
//     this.ctl.getTailieuList();
//   }
//   getchList() {
//     this.ch.getTailieuList().snapshotChanges().pipe(
//       map(changes =>
//         changes.map(c =>
//           ({ key: c.payload.key, ...c.payload.val() })
//         )
//       )
//     ).subscribe(tailieu12 => {
//       this.tailieu12 = tailieu12;
//     });
//   }

//   // getctlist() {
//   //   this.ctl.get().snapshotChanges().pipe(
//   //     map(changes =>
//   //       changes.map(c =>
//   //         ({ key: c.payload.key, ...c.payload.val() })
//   //       )
//   //     )
//   //   ).subscribe(tailieu12 => {
//   //     this.tailieu12 = tailieu12;
//   //   });
//   // }

// }
