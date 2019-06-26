import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
  
      @Input() PostTitleItem: string;
      @Input() PostcontentItem: string;
      @Input() PostloveItsItem: number;
      @Input() Postcreated_atItem: Date;
      
  constructor() { }

  ngOnInit() {
  }


  augmenter(){
    this.PostloveItsItem = this.PostloveItsItem+1;
  }


  diminuer(){
   this.PostloveItsItem = this.PostloveItsItem-1;
  }
}
