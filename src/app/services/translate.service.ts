import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../globals';


@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  data: any = {};
  constructor(private http: HttpClient,public globals:Globals) {}
  use(lang: string): Promise<{}> {
    return new Promise<{}>((resolve, reject) => {
      const langPath = `./assets/i18n/language-i18n.json`;
      this.http.get<{}>(langPath).subscribe(
        translation => {
          this.globals.header = translation["header"][lang];
          this.globals.slider = translation["slider"][lang];
          this.globals.compaineDetail = translation["compaineDetail"][lang];
          this.globals.compaine = translation["compaines"][lang];
          Object.keys(translation).forEach((key) => {
            translation[key] = translation[key][lang];
          });
          this.data = Object.assign({}, translation || {});
          resolve(this.data);
        },
        error => {
          console.log(error);
          this.data = {};
          resolve(this.data);
        }
      );
    });
  }


 

}
