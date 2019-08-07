import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { PublicationService } from '../service/publication.service';
import { Publication } from '../model/publication';

@Component({
  selector: 'app-detail-autor',
  templateUrl: './detail-autor.component.html',
  styleUrls: ['./detail-autor.component.css']
})
export class DetailAutorComponent implements OnInit {
  idAutor: number;
  detailPublication: Publication;
  autor: string;
  apellido: string;
  correo: string;
  titulo: string;
  descripcion: string;
  fecha: Date;

  constructor(
    private route: ActivatedRoute,
    private publicationService: PublicationService
  ) { }

  ngOnInit() {

       this.idAutor =  this.route.snapshot.params.idAutor;
       console.log('el autor es : ', this.idAutor);

       this.publicationService.getPublicationById(this.idAutor).subscribe(
         result => {
           this.detailPublication = result;
           this.autor = result.Autor.Nombre;
           this.apellido = result.Autor.Apellido;
           this.correo = result.Autor.Correo;
           this.fecha = result.Fecha;
           this.descripcion = result.Descripcion;
           this.titulo = result.Titulo;

                  }
       );


  }

}
