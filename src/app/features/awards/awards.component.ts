import {Component, OnInit} from '@angular/core';
import {Award} from "../../common/interfaces";

@Component({
  selector: 'award',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.sass']
})
export class AwardsComponent implements OnInit {

  public awards: Award[] = [
    {
      year: 2011,
      events: [
        "2011 m. LR klubų komandinis čempionatas „Riešuto taurė“ (64 skraidančios) - III vieta",
        "2011 m. LR brazliliškų šaškių čempionatas",
        "Vilius Aleknavičius - II vieta",
        "Lukas Vengelis - III vieta",
        "2011 m. Lietuvos studentų čempionatas \"100\"",
        "Lukas Vengelis - I vieta",
        "Vilius Aleknavičius - II vieta",
        "Mantas Janavičius - III vieta",
        "2011 m. Lietuvos studentų čempionatas \"64\"",
        "Vilius Aleknavičius - I vieta",
        "Lukas Vengelis - II vieta",
        "2011 m. Lietuvos greitųjų šaškių čempionatas \"64\"",
        "Lukas Vengelis - II vieta",
        "2011 m. Lietuvos \"žaibo\" čempionatas \"64\"",
        "Vilius Aleknavičius - III vieta",
        "2011 m. Lietuvos šaškių kompozicijų sprendimo čempionatas (64,100)",
        "Marius Šidla - III vieta",
        "2011 m. Lietuvos šimtalangių šaškių klubų komandinis čempionatas - III vieta",
        "2011 m. LŠF taurė \"100\"",
        "Marius Šidla - II vieta",
        "2011 m. LŠF taurė \"64\"",
        "Lukas Vengelis - I vieta",
      ]
    },
    {
      year: 2012,
      events: [
        "2012 m. Lietuvos studentų čempionatas \"64\"",
        "Vilius Aleknavičius - I vieta",
        "Albert Kovalevskij - II vieta",
        "2012 m. Lietuvos studentų čempionatas \"100\"",
        "Lukas Vengelis - I vieta",
        "Marius Šidla - II vieta",
        "Mantas Janavičius - III vieta",
        "2012 m. LR brazliliškų šaškių čempionatas",
        "Vilius Aleknavičius - II vieta",
        "Lukas Vengelis - III vieta",
        "2012 m. LR klubų komandinis čempionatas „Riešuto taurė“ (64 skraidančios) - III vieta",
        "2012 m. Lietuvos šimtalangių šaškių klubų komandinis čempionatas - III vieta",
        "2012 m. Lietuvos greitųjų šaškių čempionatas \"64\"",
        "Vilius Aleknavičius - I vieta",
        "2012 m. Lietuvos \"žaibo\" čempionatas \"64\"",
        "Vilius Aleknavičius - I vieta",
        "2012 m. Europos studentų ir jaunimo (U-26) šimtalangių šaškių čempionatas",
        "Mantas Janavičius - III vieta",
      ]
    },
    {
      year: 2013,
      events: [
        "2013 m. Lietuvos greitųjų šaškių čempionatas \"100\"",
        "Marius Šidla - III vieta",
        "2013 m. Lietuvos studentų čempionatas \"64\"",
        "Vilius Aleknavičius - I vieta",
        "Žygimantas Lipkevičius - II vieta",
        "Lukas Vengelis - II vieta",
        "2013 m. Lietuvos studentų čempionatas \"100\"",
        "Albert Kovalevskij - I vieta",
        "Lukas Vengelis - II vieta",
        "Marius Šidla - III vieta",
        "2013 m. LR brazliliškų šaškių čempionatas",
        "Lukas Vengelis - II vieta",
        "Žygimantas Lipkevičius - III vieta",
        "2013 m. LR klubų komandinis čempionatas „Riešuto taurė“ (64 skraidančios) - II vieta",
        "2013 m. Lietuvos \"žaibo\" čempionatas \"64\"",
        "Vilius Aleknavičius - III vieta",
        "2013 m. Lietuvos greitųjų šaškių čempionatas \"64\"",
        "Vilius Aleknavičius - II vieta",
      ]
    },
    {
      year: 2014,
      events: [
        "2014 m. LR brazliliškų šaškių čempionatas",
        "Lukas Vengelis - II vieta",
        "Vilius Aleknavičius - III vieta",
        "2014 m. Lietuvos jaunimo (U-23) ir studentų čempionatas \"64\"",
        "Vilius Aleknavičius - I vieta",
        "Lukas Vengelis - II vieta",
        "Žygimantas Lipkevičius - III vieta",
        "2014 m. Lietuvos jaunimo (U-26) ir studentų čempionatas \"100\"",
        "Marius Šidla - II vieta",
        "Mantas Janavičius - III vieta",
        "2014 m. Pasaulio jaunimo (U-23) \"64\" blico čempionatas",
        "Vilius Aleknavičius - III vieta",
        "2014 m. Pasaulio jaunimo (U-23) \"64\" greitųjų šaškių čempionatas",
        "Vilius Aleknavičius - II vieta",
        "2014 m. Pasaulio jaunimo (U-23) \"64\" čempionatas",
        "Vilius Aleknavičius - I vieta",
        "2014 m. Lietuvos šimtalangių šaškių klubų komandinis čempionatas - III vieta",
        "2014 m. Lietuvos šaškių kompozicijų sprendimo čempionatas (64,100)",
        "Marius Šidla - III vieta",
      ]
    },
    {
      year: 2015,
      events: [
        "2015 m. LR braziliškų šaškių čempionatas",
        "Vilius Aleknavičius - I vieta",
        "2015 m. LR klubų komandinis čempionatas (64 skraidančios) - II vieta",
        "2015 m. Lietuvos jaunimo (U-23) ir studentų čempionatas \"64\"",
        "Anri Plaksij - II vieta",
        "2015 m. Lietuvos greitųjų šaškių čempionatas \"64\"",
        "Anri Plaksij - II vieta",
        "Vilius Aleknavičius - III vieta",
        "2015 m. Lietuvos \"žaibo\" čempionatas \"64\"",
        "Vilius Aleknavičius - I vieta",
        "Anri Plaksij - III vieta",
        "2015 m. Pasaulio greitųjų \"64\" šaškių čempionatas",
        "Arūnas Norvaišas - I vieta",
        "2015 m. Lietuvos \"64\" šaškių klubų komandinis čempionatas - III vieta",
        "2015 m. Lietuvos jaunimo (U-26) ir studentų čempionatas \"100\"",
        "Marius Šidla - II vieta",
        "Lukas Vengelis - III vieta",
      ]
    },
    {
      year: 2016,
      events: [
        "2016 m. Lietuvos \"64\" šaškių čempionato finalas",
        "Arūnas Norvaišas - I vieta",
        "2016 m. Lietuvos jaunimo (U-26) ir studentų čempionatas \"100\"",
        "Anri Plaksij - I vieta",
        "Marius Šidla - II vieta",
        "2016 m. LR klubų komandinis čempionatas (64 skraidančios) - I vieta",
        "2016 m. Lietuvos šimtalangių šaškių klubų komandinis čempionatas - I vieta",
      ]
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
