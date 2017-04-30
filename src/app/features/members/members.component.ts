import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.sass']
})
export class MembersComponent implements OnInit {

  public members: string[] = [
    "Vilius Alekanvičius",
    "Mantas Janavičius",
    "Albert Kovalevskij",
    "Marius Šidla",
    "Lukas Vengelis",
    "Žygimantas Lipkevičius",
    "Anri Plaksij",
    "Arūnas Norvaišas",
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
