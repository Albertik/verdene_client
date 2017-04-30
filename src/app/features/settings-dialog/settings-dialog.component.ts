import {Component} from "@angular/core";
// import {TranslateService} from "ng2-translate";

@Component({
  selector: 'settings-dialog',
  template: `
    <label>Choose your language:</label>
    <md-button-toggle-group name="language" (change)="changeLang($event)">
        <md-button-toggle value="en">
            ENG
        </md-button-toggle>
        <md-button-toggle value="lt">
            LT
        </md-button-toggle>
    </md-button-toggle-group>
  `
})
export class SettingsDialog {

  currentLang: string;
  constructor() {
  }

  changeLang(event) {}

}
