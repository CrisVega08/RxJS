import { Subject, from } from "rxjs";
import { addMessage } from './utils';
const subject = new Subject<number>();

subject.subscribe(
  x => addMessage(x),
  e => addMessage(e),
  () => addMessage('Complete')
);

subject.subscribe(
  x => addMessage(x, true),
  e => addMessage(e),
  () => addMessage('Complete', true)
)
 
const observable = from([1, 2, 3]);
 
observable.subscribe(subject); // You can subscribe providing a Subject
