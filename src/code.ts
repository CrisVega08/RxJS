import { BehaviorSubject} from "rxjs";
import { addMessage } from './utils';

const subject = new BehaviorSubject('mensjae por defecto'); // 0 is the initial value
 
subject.subscribe(
  (x: any) => addMessage(`observerA: ${x}`)
);
 
subject.next('Primer mensaje');
subject.next('Segundo mensaje');
 
subject.subscribe(
  (x: any) => addMessage(`observerB: ${x}`, true)
);
