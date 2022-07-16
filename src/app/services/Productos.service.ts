import { NULL_EXPR } from "@angular/compiler/src/output/output_ast";
import { Injectable } from "@angular/core";
import { collection, getDocs } from "firebase/firestore/lite";


@Injectable({
    providedIn:'root'
})

export class ProductoService {

  constructor(){
  }

  /*async function getCities(db) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
  } */

}
