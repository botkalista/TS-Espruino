

declare class EspHD44780 {
    connectI2C(i2c1: I2C1, address?: number): HD44780I2C;
}


declare class HD44780I2C {
    clear(): void;
    print(str: string): void;
    cursor(block: boolean): void;
    setCursor(x: number, y: number): void;
    createChar(ch: number, data: number[])
}