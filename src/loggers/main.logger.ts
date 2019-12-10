import { Metadata } from 'kaop-ts';
import { MainComponent } from '../app/main/main.component';
import { afterMethod } from 'kaop-ts';

export class MainLogger {

  public static log = (...args: any[]) => afterMethod((meta: Metadata<MainComponent>) => {
    console.log('Log custom args:', args);
    console.log('Log method args:', meta.args);
    meta.scope.observable$
      .subscribe((data: number) => {
        console.log('Log result:', data);
      });
  })

}
