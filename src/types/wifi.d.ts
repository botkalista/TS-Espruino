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

type WifiAP = {
    ssid: string;
    mac: MACFormat;
    authMode: 'open' | 'wep' | 'wpa' | 'wpa2' | 'wpa_wpa2';
    channel: number;
    hidden: boolean;
    rssi: number;
}

declare class Wifi {

    startAP(ssid: string, options: WifiApOptions, cb: ErrCb): void;
    stopAP(cb: EmptyCallback): void;

    setAPIP(settings: SetAPSettings, cb: ErrCb): void;
    setHostname(hostname: string, cb: ErrCb): void;

    setIP(settings: SetAPSettings, cb: ErrCb): void;
    getIP(cb: (err: any, ipinfo: SetAPSettings) => any): void;

    getHostname(cb: Cb<string>): void;
    getStatus(cb: (info: StatusInfo) => any): void;

    connect(ssid: string, options: WifiConnectOptions, cb: ErrCb): void;
    disconnect(cb?: EmptyCallback): void;

    scan(cb: Cb<WifiAP[]>): void;

    on(event: 'associated', cb: Cb<{ ssid: string, mac: MACFormat, channel: number }>): never;
    on(event: 'connected', cb: Cb<SetAPSettings>): void;
    on(event: 'sta_joined', cb: Cb<{ mac: MACFormat }>): void;
    on(event: 'dhcp_timeout', cb: EmptyCallback): void;

}