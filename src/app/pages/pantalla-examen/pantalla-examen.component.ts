import { Component, OnInit } from '@angular/core';
import { iDataPokemon } from 'src/app/interfaces/pokemonInterface';

import { MessageService } from 'primeng/api';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-pantalla-examen',
  templateUrl: './pantalla-examen.component.html',
  styleUrls: ['./pantalla-examen.component.css']
})
export class PantallaExamenComponent implements OnInit{
  listPokemon: iDataPokemon[] = [];
  columnTabla: any;
constructor ( private pokemonService: PokemonService,
              private mensajes: MessageService ){

}
  ngOnInit(): void {
    this.iniColumnaTabla();
    this.pokemonService.getAllPokemon().subscribe(
      {
        next: (res) => {
          console.log(res);
        this.listPokemon = res.results;
        console.log('Hola estoy aqui');
        this.mensajes.add({ severity: 'success', summary: 'Satisfactorio', detail: 'Exito' });
        },
        error: (err) => {
          console.log(err);
          
          this.mensajes.add({ severity: 'error', summary: 'Error', detail: 'Hubo un problema' });
        }
      }
    );
  }

  iniColumnaTabla(){
    this.columnTabla = [
        {
          field: 'name', header: 'Nombre Pokemon'
        },
        {
          field: 'url', header: 'Url imagen'
        }
    ];
  }
}
