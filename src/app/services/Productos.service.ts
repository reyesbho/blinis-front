import { Injectable } from "@angular/core";
import { Firestore } from "@angular/fire/firestore";
import { collection } from "firebase/firestore";
import {AngularFirestore} from "@angular/fire/compat/firestore";



@Injectable({
    providedIn:'root'
})

export class ProductoService {

  constructor(private angularFire: AngularFirestore){
  }

  getProducts() {
      return this.angularFire.collection("productos").snapshotChanges();
  }

}
