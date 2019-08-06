import { Observable as Rx, 
  fromEvent, 
  Subject,
  BehaviorSubject,
  ReplaySubject
} from "rxjs";
import { share } from "rxjs/operators";

function addMessage(x: any, second?: boolean){
  const node = document.createElement('li');
  if (second) node.className = 'right';
  const text = document.createTextNode(x)
  node.appendChild(text);
  const ul = document.getElementById('output')
  ul.appendChild(node);
}

function printMessage(message: any, type: any){
  const el = document.createElement('p');
  el.className = type;
  el.innerText = message;
  document.body.appendChild(el);
}

const observable = Rx.create((observer: any) => {
  try {
    observer.next('Primer mensaje observable');
    observer.next('Segundo mensaje');
    setInterval(() => {
      observer.next('Nuevo mensaje');
    },2000);
    // observer.complete();
  } catch(err) {
    observer.error(err);
  }
})

/** Subscribe an observable create previusly  */
// obs.subscribe(
//   (x: any) => addMessage(x),
//   () => printMessage('Observable completo', 'complete'),
//   (e: any) => addMessage('Error'),
// );

/** Unsubscribe a observable */
const observer = observable.subscribe(
    (x: any) => addMessage(x),
    (e: any) => addMessage('Error'),
    (c: any) => addMessage('Complete')
);

/** create other observer and unsubscribe both when de first unsubscribe */
const observerTwo = observable.subscribe(
  (x: any) => addMessage(x, true),
  (e: any) => addMessage('Error'),
  (c: any) => addMessage('Complete')
)

// unit both observables
// observer.add(observerTwo);

// After 4 seconds i going to to unsubscribe
setTimeout(() => {
    observer.unsubscribe();
}, 4001);

/** HOT VS COLD Observables */

 /** A “hot” Observable may begin emitting items as soon as it is 
  * created, and so any observer who later subscribes to that 
  * Observable may start observing the sequence somewhere in the middle. 
  * A “cold” Observable, on the other hand, waits until an observer 
  * subscribes to it before it begins to emit items, and so such an 
  * observer is guaranteed to see the whole sequence from the beginning.*/ 


  // const hotObs = fromEvent(document, 'mousemove')

  // setTimeout(()=> {
  //     var observer3 = hotObs.subscribe(
  //       (x: any) => addMessage(` Obs 3 ${x}`),
  //     );
  // }, 4000)

/** Subjects */

// const subject = new Subject();

// subject.subscribe(
//     x => addMessage('Obs 1 ' + x),
//     e => addMessage('Obs 1 ' + e),
//     () => addMessage('Complete')
// )

// subject.next('First thing that I emited')

// var observerSub = subject.subscribe(
//     x => addMessage('Obs 2 ' + x)
// )

// subject.next('Second thing that I emited')
// observerSub.unsubscribe();

// subject.next('Third thing that I emited')

/** BehaviorSuject */

// const subject = new BehaviorSubject('First');

// subject.subscribe(
//     x => addMessage('Obs 1 ' + x),
//     e => addMessage('Obs 1 ' + e),
//     () => addMessage('Complete')
// )

// subject.next('First thing that I emited')

// var observerSub = subject.subscribe(
//     x => addMessage('Obs 2 ' + x)
// )

// subject.next('Second thing that I emited')
// observerSub.unsubscribe();

// subject.next('Third thing that I emited')

/** ReplaySuject */

// const subject = new ReplaySubject(2); // number on events before to emit when and observer subscribes

// subject.subscribe(
//     x => addMessage('Obs 1 ' + x),
//     e => addMessage('Obs 1 ' + e),
//     () => addMessage('Complete')
// )

// subject.next('First thing that I emited')
// subject.next('Another thing that I emited')
// subject.next('Another two thing that I emited')

// var observerSub = subject.subscribe(
//     x => addMessage('Obs 2 ' + x)
// )

// subject.next('Second thing that I emited')
// observerSub.unsubscribe();

// subject.next('Third thing that I emited')