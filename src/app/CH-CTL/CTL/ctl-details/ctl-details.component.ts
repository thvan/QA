import { Component, OnInit, Input } from '@angular/core';

import { CTLService } from '../../ctl.service';
import { CTL } from '../../CTL';
import { PdfViewerModule } from 'ng2-pdf-viewer';


import { NgxResponsiveEmbedComponent } from 'ngx-responsive-embed';
import { Observable } from 'rxjs';
import { AngularFireObject, AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-ctl-details',
  templateUrl: './ctl-details.component.html',
  styleUrls: ['./ctl-details.component.css']
})
export class CTLDETAILSComponent implements OnInit {

  @Input() tailieu: CTL;

  // submitted = false;
  // LikeRef: AngularFireObject<any>;
  // Like: Observable<any>;


constructor(private tailieuService: CTLService, db: AngularFireDatabase ) { 

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

}