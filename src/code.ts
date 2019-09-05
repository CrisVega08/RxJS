
import { Observable as Rx } from "rxjs";

import { addMessage, printMessage } from './utils';

const obs = Rx.create((observer: any) => {
  observer.next('Primer mensaje');
  observer.next('Segundo mensaje');
  // observer.error('Error en subscripción'); // TODO show complete
  // observer.complete('Complete')
  // observer.next('Tercer mensaje');
})

obs.subscribe(
  (x: any) => addMessage(x),
  (e: any) => printMessage(e),
  () => printMessage('Mensaje completo', 'complete')
)

obs.subscribe(
  (x: any) => addMessage(x, true),
  (e: any) => printMessage(e),
  () => printMessage('Mensaje completo', 'complete')
)
