import { interval } from 'rxjs';
import { addMessage } from './utils';
 
const observable1 = interval(400);
const observable2 = interval(300);
 
const subscription = observable1.subscribe(x => addMessage(`first: ${x}`));
const childSubscription = observable2.subscribe(x => addMessage(`second: ${x}`, true))

subscription.add(childSubscription);
 
setTimeout(() => {
  // Unsubscribes BOTH subscription and childSubscription
  subscription.unsubscribe();
}, 3000);