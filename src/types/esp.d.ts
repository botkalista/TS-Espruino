type EmptyCallback = () => any;

type Cb<T> = (e: T) => any;
type ErrCb = Cb<Partial<any>>;
type FnArgs = (...args: any[]) => any;
type Fn<T extends FnArgs> = (...args: Args<T>) => any;
type Args<T extends FnArgs> = Parameters<T>;


type Last<T extends any[]> = T extends [...infer I, infer L] ? L : never;
type Pop<T extends any[]> = T extends [...infer U, any] ? U : never

type GetLastArg<T extends (...args: any[]) => any> = Last<Parameters<T>>;
type RemoveLastArg<T extends (...args: any[]) => any> = Pop<Parameters<T>>;

type CreatePromiseResult<T extends ((...args: [...any, () => any]) => any)> = Promise<Parameters<GetLastArg<T>>[0]>;


type EventDeclaration<EName, T> = (event: EName, cb: Cb<T>) => any


declare function require(module: 'Wifi'): Wifi;
declare function __non_webpack_require__(module: 'Wifi'): Wifi;

declare function require(module: 'http'): EspHttp;
declare function __non_webpack_require__(module: 'http'): EspHttp;

declare function require(module: 'HD44780'): EspHD44780;
declare function __non_webpack_require__(module: 'HD44780'): EspHD44780;

declare class I2C1 {
    static setup(options: { scl: Pin | number | string, sda: Pin | number | string }): void;
}

declare function digitalPulse(pin: string | number, value: 1 | 0 | true | false, time: number): never;


type WatchOptions = {
    repeat: boolean,
    edge: 'rising' | 'falling' | 'both',
    debounce: number
}
type WatchCallback = {
    state: 1 | 0,
    time: number,
    lastTime: number,
    data?: any
}

declare function setWatch(fn: Cb<WatchCallback>, pin: Pin | number | string, options: WatchOptions): string;
declare function clearWatch(id: string);

declare class Pin {
    constructor(id: string | number);
    set(): void;
    reset(): void;
    write(val: 0 | 1 | true | false);
    read(): 0 | 1 | true | false;
    getInfo(): any;
    mode(mode?: 'analog' | 'input' | 'input_pullup' | 'input_pulldown' | 'output' | 'opendrain' | 'af_output' | 'af_opendrain'):void
}