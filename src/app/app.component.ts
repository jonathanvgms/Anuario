import { Component } from "@angular/core";
import {
  faStream,
  faCodeBranch,
  faLaptopCode,
  faLightbulb,
  faBolt
} from "@fortawesome/free-solid-svg-icons";

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

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent {
  title = "Nombre";

  faStream = faStream;
  faCodeBranch = faCodeBranch;
  faLaptopCode = faLaptopCode;
  faLightbulb = faLightbulb;
  faBolt = faBolt;
  graduados: Graduado[] = [];

  especialidades: ValorCadena[] = [
    { value: "computacion", nombre: "Computación" },
    { value: "electricidad", nombre: "Electricidad" },
    { value: "electronica", nombre: "Electrónica" }
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

  alumnos: Graduado[] = [
    { name: "Daniel Umiri", cicloLectivo: "2019", turno: "Mañana", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "computacion", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Enzo Cardona", cicloLectivo: "2019", turno: "Mañana", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "computacion", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Katerine Mendez", cicloLectivo: "2019", turno: "Mañana", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "computacion", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Lucas More", cicloLectivo: "2019", turno: "Mañana", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "computacion", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Martin Elias", cicloLectivo: "2019", turno: "Mañana", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "computacion", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Alexis Karnicki", cicloLectivo: "2019", turno: "Mañana", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "computacion", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Ivan Vega", cicloLectivo: "2019", turno: "Mañana", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "computacion", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Nayda Paniagua", cicloLectivo: "2019", turno: "Mañana", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "computacion", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Orlando Apaza", cicloLectivo: "2019", turno: "Tarde", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "computacion", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Federico Scollo", cicloLectivo: "2019", turno: "Tarde", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "computacion", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Nicolas Fernandez", cicloLectivo: "2019", turno: "Tarde", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "computacion", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Patricio Merele", cicloLectivo: "2019", turno: "Tarde", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "computacion", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Dustin Gutierrez", cicloLectivo: "2019", turno: "Tarde", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "computacion", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Veronica Choque", cicloLectivo: "2019", turno: "Tarde", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "computacion", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Jean Pierre Paredes", cicloLectivo: "2018", turno: "Tarde", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "computacion", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Cynthia Espinola", cicloLectivo: "2018", turno: "Tarde", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "computacion", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Franciso Scagliarini", cicloLectivo: "2018", turno: "Tarde", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "computacion", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Agustin Santich", cicloLectivo: "2018", turno: "Mañana", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "computacion", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Florencia Medina", cicloLectivo: "2018", turno: "Mañana", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "computacion", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Jonas Talco", cicloLectivo: "2018", turno: "Mañana", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "computacion", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Axel", cicloLectivo: "2018", turno: "Mañana", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "computacion", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Siles", cicloLectivo: "2018", turno: "Mañana", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "computacion", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Homero Simpson", cicloLectivo: "2019", turno: "Mañana", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "electricidad", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Homero Simpson", cicloLectivo: "2019", turno: "Mañana", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "electronica", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" }
  ];

  buscarAlumnos(especialidad: string, turno: string, cicloLectivo: string) {

    this.graduados = this.alumnos;

    if (especialidad)
      this.graduados = this.graduados.filter(a => a.area === especialidad);
    if (turno)
      this.graduados = this.graduados.filter(a => a.turno === turno);
    if (cicloLectivo)
      this.graduados = this.graduados.filter(a => a.cicloLectivo === cicloLectivo);

    this.graduados = this.graduados.sort((a, b) => a.name.localeCompare(b.name));
  }
}
