import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.sass']
})
export class AboutComponent implements OnInit {

  public ratings: any = [
    {
      category: 'Vieta Lietuvos paprastųjų šaškių reitinge (2015 11 24):',
      places: [
        "3. (-) Arūnas Norvaišas",
        "7. (-) Vilius Aleknavičius",
        "11. (-) Lukas Vengelis",
        "28. (-3) Anri Plaksij",
        "34. (+10) Žygimantas Lipkevičius",
        "38. (-1) Marius Šidla",
        "60. (-2) Albert Kovalevskij",
        "112. (+8) Mantas Janavičius"
      ]
    },
    {
      category: 'Vieta pasauliniame paprastųjų šaškių reitinge (2016 01 01):',
      places: [
        "16. (+11) Arūnas Norvaišas",
        "67. (+17) Vilius Aleknavičius",
        "140. (+1) Lukas Vengelis",
        "182. (+62) Anri Plaksij",
        "551. (-21) Albert Kovalevskij",
        "568. (-19) Marius Šidla",
        "1816. (+112) Žygimantas Lipkevičius",
        "1929. (-86) Mantas Janavičius"
      ]
    },
    {
      category: 'Vieta pasauliniame šimtalangių šaškių reitinge (2016 10 01):',
      places: [
        "495 (+24). Anri Plaksij",
        "1290 (-17). Mantas Janavičius"
      ]
    }
  ];

  public matchResults: any = {
    heading: "Tarpusavio susitikimų statistika (pergalės, pralaimėjimai, lygiosios; po 2016 \"100\" čempionato):",
    versus: [
      "vs. „Jaunimo“ klubas 7-5-6",
      "vs. Alytaus „Alitas“ 4-0-1",
      "vs. Kauno „JSO“ 1-0-0",
      "vs. „J.Kulikausko“ klubas 11-1-2",
      "vs. Šiaulių „Vitražas“ 1-3-3",
      "vs. Vilniaus „Riešutas“ 3-14-1",
      "vs. Marijampolės „Sūduva“ 3-0-3",
      "vs. „Jaunimo-2“ klubas 2-1-3",
      "vs. Kauno „MES“ 1-0-0",
      "vs. Klaipėdos „Pamarys“ 0-3-2",
      "vs. Kalvarijos „ŠŠSK“ 1-0-0",
      "vs. Šiaulių „Fintas“ 3-1-1",
      "vs. Šilutės „Šilutė“ 1-1-1",
      "vs. Elektrėnų „SPC“ 1-0-0",
      "vs. Akmenės „ŠK“ 1-0-0",
      "vs. Klaipėdos „Švyturys“ 1-0-0",
      "vs. Vilniaus \"Genys\" 4-0-0",
      "vs. Ukmergės \"Juodasis rikis\" 2-0-0",
      "vs. Kaišiadorių \"Baltija\" 1-0-0",
      "vs. Alytaus „Alitas-2“ 2-0-0",
    ]
  };

  constructor() {
  }

  ngOnInit() {
  }

}
