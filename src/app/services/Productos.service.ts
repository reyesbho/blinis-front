import { Injectable } from "@angular/core";



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
