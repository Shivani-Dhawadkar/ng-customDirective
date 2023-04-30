import { Component, Input, OnInit } from '@angular/core';
import { Iplayer } from '../../interface/interface';
import { player } from '../../model/player';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input()
 playerArr : Array<Iplayer> = player!
 
  constructor() { }

  ngOnInit(): void {
    
  }

}
