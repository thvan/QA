// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-create-tailieu',
//   templateUrl: './create-tailieu.component.html',
//   styleUrls: ['./create-tailieu.component.css']
// })
// export class CreateTailieuComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Component, OnInit } from '@angular/core';

import { Tailieu } from '../../tailieu';
import { TailieuService } from '../../tailieu.service';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-tailieu',
  templateUrl: './create-tailieu.component.html',
  styleUrls: ['./create-tailieu.component.css']
})
export class CreateTailieuComponent implements OnInit {
 
 

      tailieu: Tailieu = new Tailieu();
      submitted = false;
 
  constructor(private tailieuService: TailieuService) { }
 
  ngOnInit() {
  }
 
  newTailieu(): void {
    this.submitted = false;
    this.tailieu = new Tailieu();
  }
 
  save() {
    this.tailieuService.createTailieu(this.tailieu);
    this.tailieu = new Tailieu();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }
 
}
