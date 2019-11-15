import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { CH } from './CH';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CHService {

  private dbPath = '/cauhoi';
 
 
  tailieu12Ref: AngularFireList<CH> = null;
 
  constructor(private db: AngularFireDatabase) {
    this.tailieu12Ref = db.list(this.dbPath);

    // this.LikeRef = db.object('Luotthich');
    // this.Like = this.LikeRef.valueChanges();
  }
 
 
 
  updateTailieu(key: string, value: any): Promise<void> {
    return this.tailieu12Ref.update(key, value);
  }
 
  deleteTailieu(key: string): Promise<void> {
    return this.tailieu12Ref.remove(key);
  }
 
  getTailieuList(): AngularFireList<CH> {
    return this.tailieu12Ref;
  }

}
