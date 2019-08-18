import { Component } from '@angular/core';
import { DataService } from './services/data-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private dataService: DataService) { }
  title = 'ng-angular';
  video: string = "https://www.youtube.com/embed/CD-E-LDc384"


  changeName() {
    this.dataService.changeMessage("Walter White");
  }

}
