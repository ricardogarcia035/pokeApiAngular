import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/shared/pokemon.model';

@Component({
  selector: 'app-poke-create',
  templateUrl: './poke-create.component.html',
  styleUrls: ['./poke-create.component.scss']
})
export class PokeCreateComponent implements OnInit {

  form!: FormGroup;
  submit = false;

  constructor(
    private fb: FormBuilder,
    private pokemonService: PokemonService
  
  ) { }

  ngOnInit(): void {
    this.createForm();
  }
  get f(){return this.form.controls}


  private createForm(): void{
    this.form= this.fb.group({
      nombre: ['',[Validators.required]],
      nivel: ['',Validators.required],
      especie: ['']
    });
  }

  public onSubmit(): void{

    this.submit=true;
    if(this.form.invalid){
    alert('Faltan campos');
    }else{
      alert('Entro Submit')
    }

    const model: Pokemon = Object.assign({}, this.form.value);
    console.debug(model);
  
  }


}
