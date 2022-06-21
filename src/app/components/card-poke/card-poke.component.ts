import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-card-poke',
  templateUrl: './card-poke.component.html',
  styleUrls: ['./card-poke.component.scss']
})
export class CardPokeComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:
    {name:string, front:string, back:string, type:string}) { }

  ngOnInit(): void {
    // alert(this.data);
  }

}
