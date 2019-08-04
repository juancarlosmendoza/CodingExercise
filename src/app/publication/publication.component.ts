import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../service/publication.service';
import { Publication } from '../model/publication';
import { Autor } from '../model/autor';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
  listPublication: Publication[] = [];
  id: number;

  constructor(
    private publicationService: PublicationService
  ) { }

  ngOnInit() {

    this.publicationService.getPublication()
    .subscribe(
      result => {

        this.listPublication = result;
        console.log('list publication : ', this.listPublication);
        this.id = result.length;


      });
  }

  onRowInserting(info) {
    this.id = this.listPublication.length;
    const publication = new Publication();

    publication.id = this.id + 1;
    publication.Titulo = info.data.Titulo;
    publication.Descripcion = info.data.Descripcion;
    publication.Fecha = info.data.Fecha;
    publication.Autor = new Autor();
    publication.Autor.Nombre = info.data.Autor.Nombre;
    publication.Autor.Apellido = info.data.Autor.Apellido;
    publication.Autor.Correo = info.data.Autor.Correo;
    this.publicationService.postPublicacion(publication).subscribe(
      result => {
        notify('Inserting Success', 'success', 3000);
      });

  }

  onRowUpdating(info) {
    console.log('info', info);
    const publication = new Publication();

    publication.id = info.newData.id ? info.newData.id : info.oldData.id;
    publication.Titulo = info.newData.Titulo ? info.newData.Titulo : info.oldData.Titulo;
    publication.Descripcion = info.newData.Descripcion ? info.newData.Descripcion : info.oldData.Descripcion;
    publication.Fecha = info.newData.Fecha ? info.newData.Fecha : info.oldData.Fecha;
    if (info.newData.Autor) {
    publication.Autor = new Autor();
    publication.Autor.Nombre = info.newData.Autor.Nombre ? info.newData.Autor.Nombre : info.oldData.Autor.Nombre;
    publication.Autor.Apellido = info.newData.Autor.Apellido ? info.newData.Autor.Apellido : info.oldData.Autor.Apellido;
    publication.Autor.Correo = info.newData.Autor.Correo ? info.newData.Autor.Correo : info.oldData.Autor.Correo;
    this.publicationService.putPublicacion(publication.id, publication).subscribe(
      result => {
        notify('UpDatating Success', 'success', 3000);
      }
    );
  } else {
    publication.Autor = new Autor();

    publication.Autor.Nombre = info.oldData.Autor.Nombre;
    publication.Autor.Apellido = info.oldData.Autor.Apellido;
    publication.Autor.Correo = info.oldData.Autor.Correo;

    this.publicationService.putPublicacion(publication.id, publication).subscribe(
    result => {
      notify('UpDatating Success', 'success', 3000);
    }
  );
}
}

  onRowRemoving(info) {
    this.publicationService.deletePublicacion(info.data.id).subscribe(
      result => {
        notify('Delete Success', 'success', 3000);
      });

  }

}
