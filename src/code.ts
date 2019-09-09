import { AsyncSubject } from 'rxjs';
import { addMessage } from './utils';

const subject = new AsyncSubject();
 
subject.subscribe(
  (x:any) => addMessage(`observerA: ${x}`)
);
 
subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);
 
subject.subscribe(
  (x:any) => addMessage(`observerB: ${x}`, true)
);
 
subject.next(5);
subject.complete();