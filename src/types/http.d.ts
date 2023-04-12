
declare class EspHttp {
    createServer(handler: (req: EspHttpRequest, res: EspHttpResponse) => any): EspHttpServer;
}

declare class EspHttpRequest {
    headers: { [key: string]: string };
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD';
    url: string;
    pipe(dst: any, options: { chunkSize?: number, end?: boolean, onComplete: EmptyCallback }): never;
    read(size: number): string;
    available(): number;
    on(event: 'close', cb: EmptyCallback): never;
    on(event: 'data', cb: Cb<number>): never;
}

declare class EspHttpResponse {
    headers: { [key: string]: string };
    setHeader(name: string, value: string): never;
    write(data: string): false;
    writeHead(status: number, headers?: { [key: string]: string }): void;
    end(data: string): never;
    on(event: 'close', cb: EmptyCallback): never;
    on(event: 'drain', cb: EmptyCallback): never;

}

declare class EspHttpServer {
    listen(port: number): never;
    cllose(): never;
}