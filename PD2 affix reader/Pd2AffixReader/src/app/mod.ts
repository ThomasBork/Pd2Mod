export class Mod {
  code: string;
  param: string;
  min: number;
  max: number;
  public constructor(
    code: string,
    param: string,
    min: string,
    max: string
  ) {
    this.code = code;
    this.param = param;
    this.min = parseInt(min);
    this.max = parseInt(max);
  }

  public toString(): string {
    return this.fitString(this.code) + ':\t' + this.param + ':\t' + this.min + '-' + this.max;
  }

  private fitString(s: string): string {
    while (s.length <= 16) {
      s += ' ';
    }
    return s;
  }
}
