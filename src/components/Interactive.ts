import { state } from './State'

const b1Pin = new Pin(14);
const b2Pin = new Pin(12);
b1Pin.mode('input_pullup');
b2Pin.mode('input_pullup');

export function setInteractive(interactive: true, onUp: EmptyCallback, onDown: EmptyCallback): void;
export function setInteractive(interactive: false): void;
export function setInteractive(interactive: boolean, onUp?: EmptyCallback, onDown?: EmptyCallback) {
    if (state.interactive == interactive) return;
    const opts = { repeat: true, edge: 'rising', debounce: 50 } as const;
    if (interactive) {
        console.log('SETTING INTERACTIVE MODE');
        const id1 = setWatch(onUp, b2Pin, opts);
        const id2 = setWatch(onDown, b1Pin, opts);
        state.watch_ids.push(id1);
        state.watch_ids.push(id2);
    } else {
        state.watch_ids.forEach(id => clearWatch(id));
    }
    state.interactive = interactive;
}

