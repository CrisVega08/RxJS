import { fromEvent } from 'rxjs'; 
import { map, debounceTime, tap, filter } from 'rxjs/operators';
import { addMessage } from './utils';

const input = document.getElementById('textInput');

fromEvent(input, 'keyup').pipe(
  map((x:any) => x.target.value),
  debounceTime(300),
  filter((x) => x.length > 2),
  tap(x => addMessage(x))
).subscribe()