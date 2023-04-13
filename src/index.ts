import { lcd } from './components/Display';
import { setInteractive } from './components/Interactive';
import { authToChar } from './components/Utils';

import { state } from './components/State'
console.log(state);

const wifi = __non_webpack_require__('Wifi');

let aps: WifiAP[] = [];


function showScanResult() {
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print('Line ' + (state.apsLine + 1) + ' APS: ' + aps.length);

  for (let i = 1; i < 4; i++) {
    const ap = aps[i - 1 + state.apsLine];
    lcd.setCursor(0, i);
    if (!ap) {
      lcd.print('-----');
      continue;
    }
    const name = ap.ssid.substring(0, 13);
    lcd.print(name);
    lcd.setCursor(15, i);
    lcd.print(ap.rssi.toString());
    lcd.setCursor(19, i);

    lcd.print(authToChar(ap.authMode));
  }
}

lcd.clear();
lcd.print('Searching for wifi');

wifi.scan((apList) => {
  aps = apList;
  wifi.disconnect();
  showScanResult();
  setInteractive(true, () => {
    state.apsLine++;
    state.apsLine = Math.max(state.apsLine, 0);
    showScanResult();
  }, () => {
    state.apsLine--;
    state.apsLine = Math.max(state.apsLine, 0);
    showScanResult();
  });

});