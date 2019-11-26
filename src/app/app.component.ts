import { Component } from "@angular/core";

export interface ValorCadena {
  value: string;
  nombre: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Yearbook";

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
}
