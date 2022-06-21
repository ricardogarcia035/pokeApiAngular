import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CardPokeComponent } from '../card-poke/card-poke.component';


@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.scss']
})
export class PokeTableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'image', 'name','name2'];
  data: any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);




  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  pokemons = [];

  constructor(private pokemonService: PokemonService, private router: Router,private matDialog: MatDialog) { }

   ngOnInit(): void {
    this.getPokemons();
  }

 
  async getPokemons(){
    let pokemonData;

    for (let i = 1; i <= 150; i++) {
         this.pokemonService.getPokemons(i).subscribe(
         async res => {
           pokemonData = {
            position:  await res.id,
            image: await res.sprites.front_default,
            name: await res.name,
            name2: await res.sprites.back_default,
            type: await res.types[0].type.name
            
          };

           this.data.push(pokemonData);
           console.log(pokemonData.position);
          this.dataSource =   new MatTableDataSource<any>(this.data);
          this.dataSource.paginator =   this.paginator;

          
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  getRow(row: { position: any; }){
    // console.log(row);
    // this.router.navigateByUrl(`/pokeDetail/${row.position}`)
  }

  onOpenDialogClick(name: any, front: any, back: any, type:any){
    this.matDialog.open(CardPokeComponent,
      {
        data: {
          
          name: name,
          front: front,
          back: back,
          type: type
        }
      });
  }
  
}


