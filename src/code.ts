import { BehaviorSubject} from "rxjs";
import { addMessage } from './utils';

const subject = new BehaviorSubject('mensjae por defecto');
 
subject.subscribe(
  (x: any) => addMessage(`observerA: ${x}`)
);
 
subject.next('Primer mensaje');
subject.next('Segundo mensaje');
 
subject.subscribe(
  (x: any) => addMessage(`observerB: ${x}`, true)
);
