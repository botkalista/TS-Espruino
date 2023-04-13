
export function authToChar(auth: WifiAP['authMode']) {
  if (auth === 'open') return 'O';
  if (auth === 'wep') return 'E';
  if (auth === 'wpa') return 'W';
  if (auth === 'wpa2') return '2';
  if (auth === 'wpa_wpa2') return '1';
}
