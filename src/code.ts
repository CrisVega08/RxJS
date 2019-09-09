import { ReplaySubject} from "rxjs";
import { addMessage } from './utils';

const subject = new ReplaySubject(3);
 
subject.subscribe(
  (x: any) => addMessage(`observerA: ${x}`)
);
 
subject.next('Primer mensaje');
subject.next('Segundo mensaje');
subject.next('Tercer mensaje');
subject.next('Cuarto mensaje');
 
subject.subscribe(
  (x: any) => addMessage(`observerB: ${x}`, true)
);

subject.next('Quinto Mensaje');
