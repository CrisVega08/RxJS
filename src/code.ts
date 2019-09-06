import { interval, from } from 'rxjs';
import { addMessage, printMessage } from './utils';
 
const observable1 = interval(400);
const observable2 = interval(300);
 
const subscription = observable1.subscribe(x => addMessage(`first: ${x}`));
const childSubscription = observable2.subscribe(x => addMessage(`second: ${x}`, true))

subscription.add(childSubscription);
 
setTimeout(() => {
  // Unsubscribes BOTH subscription and childSubscription
  subscription.unsubscribe();
}, 3000);


// const observable = from([10, 20, 30]);
const observable = from([
  {name: 'Cris', last: 'Vega'},
  {name: 'Henricito', last: 'Rojas'},
  {name: 'Simba', last: 'Ceballos'}
]);
const subs = observable.subscribe(x => printMessage(x.name, 'complete'));
// Later:
subs.unsubscribe();