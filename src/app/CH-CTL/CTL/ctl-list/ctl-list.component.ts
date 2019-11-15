import { Component, OnInit } from '@angular/core';
import { CTLService } from '../../ctl.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-ctl-list',
  templateUrl: './ctl-list.component.html',
  styleUrls: ['./ctl-list.component.css']
})
export class CTLLISTComponent implements OnInit {

  tailieu12: any;
 
  constructor(private tailieuService: CTLService) { }
 
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
 
  
 
}
