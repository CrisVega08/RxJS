import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { addMessage, printMessage } from './utils';

const obs = Observable.create((observer: any) => {
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

setTimeout(() => {
  const coldObs = obs.subscribe((x: any) => addMessage(`${x} Observer 3`))
}, 3000);