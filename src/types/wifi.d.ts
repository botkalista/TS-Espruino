type MACFormat = `${number}:${number}:${number}:${number}:${number}:${number}`
type IPFormat = `${number}.${number}.${number}.${number}`

type WifiApOptions = { authMode: 'open', channel: number }
type SetAPSettings = { ip: IPFormat, gw: IPFormat, netmask: IPFormat }
type WifiConnectOptions = { password: string, dnsServers?: string[], channel: number, bssid?: MACFormat }

type StatusInfo = {
    station: 'connecting' | 'connected' | 'off' | 'disconnected',
    ap: boolean,
    mode: 'off' | 'sta' | 'ap' | 'sta+ap',
    phy: '11b' | '11g' | '11n',
    powersave: 'none' | 'ps-poll',
    savedMode: 'off' | 'sta' | 'ap' | 'sta+ap'
}

declare class Wifi {

    startAP(ssid: string, options: WifiApOptions, cb: ErrCb): never;
    stopAP(cb: EmptyCallback): never;

    setAPIP(settings: SetAPSettings, cb: ErrCb): never;
    setHostname(hostname: string, cb: ErrCb): never;

    setIP(settings: SetAPSettings, cb: ErrCb): never;
    getIP(cb: (err: any, ipinfo: SetAPSettings) => any): never;

    getHostname(cb: Cb<string>): never;
    getStatus(cb: (info: StatusInfo) => any): never;

    connect(ssid: string, options: WifiConnectOptions, cb: ErrCb): never;

    on(event: 'associated', cb: Cb<{ ssid: string, mac: MACFormat, channel: number }>): never;
    on(event: 'connected', cb: Cb<SetAPSettings>): never;
    on(event: 'sta_joined', cb: Cb<{ mac: MACFormat }>): never;
    on(event: 'dhcp_timeout', cb: EmptyCallback): never;

}