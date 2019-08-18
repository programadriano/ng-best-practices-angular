import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  name: string = "";

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(name => {
      console.log(name);
      this.name = name;
    });
  

  }

}
