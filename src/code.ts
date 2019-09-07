
import { Observable } from "rxjs";

import { addMessage } from './utils';

const observable = new Observable((observer: any) => {
  observer.next('Primer mensaje');
  observer.next('Segundo mensaje');
})

observable.subscribe((x:any)=> addMessage(x))