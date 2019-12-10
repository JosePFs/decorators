import { Component, OnInit } from '@angular/core';
import { MainLogger } from '../../loggers/main.logger';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @MainLogger.log('arg one', 'arg two')
  onClick(event: Event): Observable<number> {
    const obs = from([1, 2, 3]);

    obs.subscribe((data => {
      console.log(data);
    }));

    return obs;
  }

}
