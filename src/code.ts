
import { Observable as Rx } from "rxjs";

import { addMessage, printMessage } from './utils';

const obs = Rx.create((observer: any) => {
  observer.next('Primer mensaje');
  observer.next('Segundo mensaje');
})

obs.subscribe(
  (x: any) => addMessage(x),
  () => addMessage('Se presentô un error'),
  () => printMessage('Mensaje completo', 'complete')
)

obs.subscribe(
  (x: any) => addMessage(x, true),
  () => addMessage('Se presentô un error'),
  () => printMessage('Mensaje completo', 'complete')
)