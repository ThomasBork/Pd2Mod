export class Mod {
  code: string;
  param: string;
  min: number;
  max: number;

  public static fromStrings(
    code: string,
    param: string,
    min: string,
    max: string
  ): Mod {
    const newCode = code;
    const newParam = param;
    const newMin = parseInt(min);
    const newMax = parseInt(max);
    return new Mod(
      newCode,
      newParam,
      newMin,
      newMax
    );
  }

  private constructor (
    code: string,
    param: string,
    min: number,
    max: number
  ) {
    this.code = code;
    this.param = param;
    this.min = min;
    this.max = max;
  }

  public clone(): Mod {
    return new Mod(
      this.code,
      this.param,
      this.min,
      this.max
    );
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
