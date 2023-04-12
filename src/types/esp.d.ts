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
declare function require(module: 'http'): EspHttp;


declare function digitalPulse(pin: string | number, value: 1 | 0 | true | false, time: number): never;

declare class Pin {
    constructor(id: string | number);
    set(): void;
    reset(): void;
    write(val: 0 | 1 | true | false);
    read(): 0 | 1 | true | false;
    getInfo(): any;
}


// declare function require(module: 'WebServer'): ({
//     new(port: number, default_type: string, default_index: string): WebServer
// });

// declare class WebServer {
//     port: number;
//     on(event: 'start', cb: (req: any, webServer: WebServer) => any): never;
//     on(event: 'error', cb: (err: any, webServer: WebServer) => any): never;
//     on(event: 'request', cb: (req: any, res: any, pUrl: string, webServer: WebServer) => any): never;
// }