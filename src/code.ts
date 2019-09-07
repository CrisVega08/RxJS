import { fromEvent } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';

import { printMessage } from './utils';

const hotObs = fromEvent(document, 'mousemove').pipe(
  map((event: any) => event.clientX),
  throttleTime(3000)
)

hotObs.subscribe((x: any) => printMessage(x, 'complete'))
// setTimeout(() => hotObs.subscribe((x: any) => printMessage(x)), 1000)
