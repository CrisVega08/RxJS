
import { Observable as Rx } from "rxjs";

import { addMessage, printMessage } from './utils';

const obs = Rx.create((observer: any) => {
  observer.next('Primer mensaje');
  observer.next('Segundo mensaje');
  setInterval(() => {
    observer.next('Nuevo mensaje');
  },2000);
})

const observer1 = obs.subscribe(
  (x: any) => addMessage(x),
  (e: any) => printMessage(e),
  () => printMessage('Mensaje completo', 'complete')
)

obs.subscribe(
  (x: any) => addMessage(x, true),
  (e: any) => printMessage(e),
  () => printMessage('Mensaje completo', 'complete')
)

// setTimeout(() => observer1.unsubscribe(), 5000);
