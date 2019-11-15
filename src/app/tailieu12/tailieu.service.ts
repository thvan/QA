

import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Tailieu } from './tailieu';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class TailieuService {
 

  // LikeRef: AngularFireObject<any>;
  // Like: Observable<any>;
  // private dbPath = '/news';
  private dbPath = '/tailieu';
 
  tailieu12Ref: AngularFireList<Tailieu> = null;
 
  constructor(private db: AngularFireDatabase) {
    this.tailieu12Ref = db.list(this.dbPath);

    // this.LikeRef = db.object('Luotthich');
    // this.Like = this.LikeRef.valueChanges();
  }
 
  createTailieu(tailieu12: Tailieu): void {
    this.tailieu12Ref.push(tailieu12);
  }
 
  updateTailieu(key: string, value: any): Promise<void> {
    return this.tailieu12Ref.update(key, value);
  }
 
  deleteTailieu(key: string): Promise<void> {
    return this.tailieu12Ref.remove(key);
  }
 
  getTailieuList(): AngularFireList<Tailieu> {
    return this.tailieu12Ref;
  }
 
  deleteAll(): Promise<void> {
    return this.tailieu12Ref.remove();
  }



  
}
