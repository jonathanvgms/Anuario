import { Component, OnInit, ViewChild } from "@angular/core";
import {
  faStream,
  faCodeBranch,
  faLaptopCode,
  faLightbulb,
  faBolt
} from "@fortawesome/free-solid-svg-icons";
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

export interface ValorCadena {
  value: string;
  nombre: string;
}

export interface Graduado {
  name: string;
  cicloLectivo: string;
  description: string;
  area: string;
  picture: string;
  turno: string;
}

const alumnos: Graduado[] = [
  { name: "Daniel Umiri", cicloLectivo: "2019", turno: "Mañana", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "Computación", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
  { name: "Enzo Cardona", cicloLectivo: "2019", turno: "Mañana", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "Computación", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
  { name: "Katerine Mendez", cicloLectivo: "2019", turno: "Mañana", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "Computación", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
  { name: "Lucas More", cicloLectivo: "2019", turno: "Mañana", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "Computación", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
  { name: "Martin Elias", cicloLectivo: "2019", turno: "Mañana", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "Computación", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
  { name: "Alexis Karnicki", cicloLectivo: "2019", turno: "Mañana", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "Computación", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
  { name: "Ivan Vega", cicloLectivo: "2019", turno: "Mañana", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "Computación", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
  { name: "Nayda Paniagua", cicloLectivo: "2019", turno: "Mañana", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "Computación", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
  { name: "Orlando Apaza", cicloLectivo: "2019", turno: "Tarde", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "Computación", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
  { name: "Federico Scollo", cicloLectivo: "2019", turno: "Tarde", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "Computación", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
  { name: "Nicolas Fernandez", cicloLectivo: "2019", turno: "Tarde", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "Computación", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
  { name: "Patricio Merele", cicloLectivo: "2019", turno: "Tarde", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "Computación", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
  { name: "Dustin Gutierrez", cicloLectivo: "2019", turno: "Tarde", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "Computación", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
  { name: "Veronica Choque", cicloLectivo: "2019", turno: "Tarde", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "Computación", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
  { name: "Jean Pierre Paredes", cicloLectivo: "2018", turno: "Tarde", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "Computación", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
  { name: "Cynthia Espinola", cicloLectivo: "2018", turno: "Tarde", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "Computación", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
  { name: "Franciso Scagliarini", cicloLectivo: "2018", turno: "Tarde", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "Computación", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
  { name: "Agustin Santich", cicloLectivo: "2018", turno: "Mañana", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "Computación", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
  { name: "Florencia Medina", cicloLectivo: "2018", turno: "Mañana", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "Computación", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
  { name: "Jonas Talco", cicloLectivo: "2018", turno: "Mañana", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "Computación", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
  { name: "Axel Benitez", cicloLectivo: "2018", turno: "Mañana", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "Computación", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
  { name: "Leonel Siles", cicloLectivo: "2018", turno: "Mañana", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "Computación", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
  { name: "Homero Simpson", cicloLectivo: "2019", turno: "Mañana", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "Electricidad", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
  { name: "Homero Simpson", cicloLectivo: "2019", turno: "Mañana", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "Electrónica", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" }
];

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})


export class AppComponent implements OnInit {

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  graduados = new MatTableDataSource<Graduado>(alumnos);

  title = "Nombre";

  faStream = faStream;
  faCodeBranch = faCodeBranch;
  faLaptopCode = faLaptopCode;
  faLightbulb = faLightbulb;
  faBolt = faBolt;

  columnas: string[] = ['name', 'area', 'turno', 'cicloLectivo'];

  especialidades: ValorCadena[] = [
    { value: "Computación", nombre: "Computación" },
    { value: "Electricidad", nombre: "Electricidad" },
    { value: "Electrónica", nombre: "Electrónica" }
  ];

  cicloLectivos: ValorCadena[] = [
    { value: "2019", nombre: "2019" },
    { value: "2018", nombre: "2018" },
    { value: "2017", nombre: "2017" }
  ];

  turnos: ValorCadena[] = [
    { value: "Mañana", nombre: "Mañana" },
    { value: "Tarde", nombre: "Tarde" },
    { value: "Noche", nombre: "Noche" }
  ];


  buscarAlumnos(especialidad: string, turno: string, cicloLectivo: string) {

    this.graduados.data = alumnos;

    if (especialidad)
      this.graduados.data = this.graduados.data.filter(x => x.area == especialidad);
    if (turno)
      this.graduados.data = this.graduados.data.filter(x => x.turno == turno);
    if (cicloLectivo)
      this.graduados.data = this.graduados.data.filter(x => x.cicloLectivo == cicloLectivo);
  }


  ngOnInit() {
    this.graduados.sort = this.sort;
    this.graduados.paginator = this.paginator;
  }
}
