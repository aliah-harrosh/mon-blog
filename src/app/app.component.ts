import { Component } from '@angular/core';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
         title = 'mon-blog';

 
      Posts: Array<object> = [
    {
      title: 'mon premier post',
      content: 'Ça monte. Jour après jour, comme annoncé, le mercure grimpe, flirtant déjà avec quelques records de température. Plus des deux tiers des départements ont été placés en vigilance orange en France, à deux jours du pic attendu d’une canicule inédite pour un mois de juin. Au total, 65 départements ont été placés par Météo France en vigilance orange. Ce mercredi, ils devraient être encore plus nombreux',
      loveIts: 3,
      created_at: new Date()
    },
    {
      title: 'mon deuxieme post',
      content: 'Ça monte. Jour après jour, comme annoncé, le mercure grimpe, flirtant déjà avec quelques records de température. Plus des deux tiers des départements ont été placés en vigilance orange en France, à deux jours du pic attendu d’une canicule inédite pour un mois de juin. Au total, 65 départements ont été placés par Météo France en vigilance orange. Ce mercredi, ils devraient être encore plus nombreux',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'mon troisieme post',
      content: 'Ça monte. Jour après jour, comme annoncé, le mercure grimpe, flirtant déjà avec quelques records de température. Plus des deux tiers des départements ont été placés en vigilance orange en France, à deux jours du pic attendu d’une canicule inédite pour un mois de juin. Au total, 65 départements ont été placés par Météo France en vigilance orange. Ce mercredi, ils devraient être encore plus nombreux',
      loveIts: -2,
      created_at: new Date()
    }
  ]

           // Posts = [
             // { title: 'Premier post', content:'1ER POST CONTENUE',  loveIts:3, created_at:'20/09/2018'  },
           // { title: 'Second post', content:'2EME POSTE CONTENUE', loveIts:-2, created_at:'21/09/2018' },
          //{ title: 'Troisieme post', content:'3EME POSTE CONTEU', loveIts: 0, created_at:'22/09/2018'}
             //];

   
} 
   

   
   
 
