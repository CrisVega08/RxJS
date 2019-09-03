
import { Observable as Rx } from "rxjs";

import { addMessage } from './utils';

const observable = Rx.create((observer: any) => {
  observer.next('Primer mensaje');
  observer.next('Segundo mensaje');
})

observable.subscribe((x:any)=> addMessage(x))