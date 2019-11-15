// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-tailieu-details',
//   templateUrl: './tailieu-details.component.html',
//   styleUrls: ['./tailieu-details.component.css']
// })
// export class TailieuDetailsComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TailieuService } from '../../tailieu.service';
import { Tailieu } from '../../tailieu';


import { CommonModule } from '@angular/common';
// import { NgxResponsiveEmbedComponent } from 'ngx-responsive-embed';
// import { Observable } from 'rxjs';
import { AngularFireObject, AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-tailieu-details',
  templateUrl: './tailieu-details.component.html',
  styleUrls: ['./tailieu-details.component.css']
})
export class TailieuDetailsComponent implements OnInit {


 
        @Input() tailieu: Tailieu;

        // submitted = false;
        // LikeRef: AngularFireObject<any>;
        // Like: Observable<any>;
  
 
  constructor(private tailieuService: TailieuService, db: AngularFireDatabase ) { 

    // this.LikeRef = db.object('Luotthich');
    // this.Like = this.LikeRef.valueChanges();
  }

  count: number;
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


  uploadlike(){
    this.count =this.tailieu.Luotthich+1;
    this.tailieuService
    .updateTailieu(this.tailieu.key, {Luotthich: this.count})
    .catch(err => console.log(err));
  }
}