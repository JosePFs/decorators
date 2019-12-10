import { Component, OnInit } from '@angular/core';
import { MainLogger } from '../../loggers/main.logger';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  observable$ = from([1, 2, 3]);

  constructor() { }

  ngOnInit() {
  }

  @MainLogger.log('arg one', 'arg two')
  onClick(event: Event, arg: string) {
    this.observable$.subscribe((data => {
      console.log(data);
    }));
  }

}
