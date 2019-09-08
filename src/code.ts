import { Subject } from "rxjs";
import { addMessage } from './utils';
const subject = new Subject<string>();

subject.subscribe(
    x => addMessage(x),
    e => addMessage(e),
    () => addMessage('Complete')
)

subject.next('Primer mensaje emitido')

const observerSub = subject.subscribe(
    x => addMessage(x, true)
)

subject.next('Segundo mensaje emitido')
observerSub.unsubscribe();
subject.next('Tercer mensaje emitido')
