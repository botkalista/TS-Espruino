const HD44780 = __non_webpack_require__("HD44780");
I2C1.setup({ scl: new Pin(5), sda: new Pin(4) });
export const lcd = HD44780.connectI2C(I2C1);