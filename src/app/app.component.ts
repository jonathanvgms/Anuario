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
  year: number;
  description: string;
  area: string;
  picture: string;
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

  graduados: Graduado[] = [
    { name: "Homero Simpson", year: 2019, description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "computacion", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Homero Simpson", year: 2019, description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "computacion", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Homero Simpson", year: 2019, description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "computacion", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Homero Simpson", year: 2019, description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "computacion", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Homero Simpson", year: 2019, description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "computacion", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Homero Simpson", year: 2019, description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "computacion", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Homero Simpson", year: 2019, description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "computacion", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Homero Simpson", year: 2019, description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "computacion", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Homero Simpson", year: 2019, description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "computacion", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Homero Simpson", year: 2019, description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "computacion", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Homero Simpson", year: 2019, description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "electricidad", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" },
    { name: "Homero Simpson", year: 2019, description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", area: "electronica", picture: "https://i.pinimg.com/originals/c6/68/4b/c6684b9133ef7d9104b62cc4b94b4d22.jpg" }
  ];
}
