import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import {Game} from "../../common/interfaces";
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";

//noinspection TypeScriptUnresolvedVariable
@Component({
  selector: 'game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.sass']
})
export class GameFormComponent implements OnInit{
  @Output() addGame : EventEmitter<Game> = new EventEmitter<Game>();

  public form: FormGroup;
  public submitted: boolean; // keep track on whether form is submitted
  public events: any[] = []; // use later to display form changes

  constructor(private _fb: FormBuilder) {

  }

  ngOnInit() {
    this.form = this._fb.group({
      playersNames: this._fb.group({
        firstPlayer: ['', [<any>Validators.required, <any>Validators.minLength(3)]],
        secondPlayer: ['', [<any>Validators.required, <any>Validators.minLength(3)]]
      }),
      pdnNotation: ['', [<any>Validators.required, <any>Validators.minLength(30)]]
    });


    // subscribe to form changes
    // this.subcribeToFormChanges();
  }

  subcribeToFormChanges() {
    // initialize stream
    const myFormValueChanges$ = this.form.valueChanges;

    // subscribe to the stream
    // myFormValueChanges$.subscribe(x => this.events
    //   .push({ event: 'STATUS CHANGED', object: x }));
  }

  add(model: Game, isValid: boolean){
    console.log("model-based form submitted");
    console.log(this.form);

    this.submitted = true; // set form submit to true

    // check if model is valid
    // if valid, call API to save customer
    console.log(model, isValid);

    this.addGame.emit(model);
    this.form.reset();
  }
}
