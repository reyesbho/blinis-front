import { APP_ID } from "@angular/core";
import { API_KEY, AUTH_DOMAIN, DATABASE_URL, MESSAGIN_SENDER_ID, PROJECT_ID, STORAGE_BUCKET } from "../config/constants";


export const environment = {
  production : false,
  firebaseConfig : {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGIN_SENDER_ID,
    appId: APP_ID.toString()
  }
}
