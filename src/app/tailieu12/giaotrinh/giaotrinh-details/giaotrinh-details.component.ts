import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TailieuService } from '../../tailieu.service';
import { Tailieu } from '../../tailieu';
import { PdfViewerModule } from 'ng2-pdf-viewer';


import { NgxResponsiveEmbedComponent } from 'ngx-responsive-embed';
import { Observable } from 'rxjs';
import { AngularFireObject, AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-giaotrinh-details',
  templateUrl: './giaotrinh-details.component.html',
  styleUrls: ['./giaotrinh-details.component.css']
})
export class GiaotrinhDetailsComponent implements OnInit {


 
  @Input() tailieu: Tailieu;

  // submitted = false;
  // LikeRef: AngularFireObject<any>;
  // Like: Observable<any>;


constructor(private tailieuService: TailieuService, db: AngularFireDatabase ) { 

// this.LikeRef = db.object('Luotthich');
// this.Like = this.LikeRef.valueChanges();
}

ngOnInit() {
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


// save(Likeclick: number) {
//   this.LikeRef.set({ Luotthich: Likeclick });
// }
// update(Likeclick: number) {
//   this.tailieuService.update(1);
// }
// delete() {
//   this.LikeRef.remove();
// }


// clickthich(Like: number) {
//   this.tailieuService
//     .updateTailieu(this.tailieu.key, { like: Like })
//     .catch(err => console.log(err));
// }

// onSubmit() {
//   this.submitted = true;
//   this.clickthich(1);
// }

}