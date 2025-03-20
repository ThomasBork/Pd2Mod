import { Mod } from './mod';

export class Affix {
  public name: string;
  public rare: boolean;
  public level: number;
  public maxlevel: number;
  public levelreq: number;
  public frequency: number;
  public group: number;
  public mods: Mod[];
  public itypes: string[];
  public etypes: string[];
  
  public constructor(
    name: string,
    rare: string,
    level: string,
    maxlevel: string,
    levelreq: string,
    frequency: string,
    group: string,
    mod1code: string,
    mod1param: string,
    mod1min: string,
    mod1max: string,
    mod2code: string,
    mod2param: string,
    mod2min: string,
    mod2max: string,
    mod3code: string,
    mod3param: string,
    mod3min: string,
    mod3max: string,
    itype1: string,
    itype2: string,
    itype3: string,
    itype4: string,
    itype5: string,
    itype6: string,
    itype7: string,
    etype1: string,
    etype2: string,
    etype3: string,
    etype4: string,
    etype5: string
  ) {
    this.name = name;
    this.rare = rare == '1';
    this.level = parseInt(level);
    this.maxlevel = parseInt(maxlevel);
    this.levelreq = parseInt(levelreq);
    this.frequency = parseInt(frequency);
    this.group = parseInt(group);
    this.mods = [
      new Mod(mod1code, mod1param, mod1min, mod1max)
    ];
    if (mod2code) {
      this.mods.push(new Mod(mod2code, mod2param, mod2min, mod2max));
    }
    if (mod3code) {
      new Mod(mod3code, mod3param, mod3min, mod3max)
    }
    this.itypes = [
      itype1,
      itype2,
      itype3,
      itype4,
      itype5,
      itype6,
      itype7
    ].filter(i => i != '')
    this.etypes = [
      etype1,
      etype2,
      etype3,
      etype4,
      etype5
    ].filter(e => e != '')
  }

  public hasIType(t: string): boolean {
    return this.itypes.includes(t);
  }

  public hasEType(t: string): boolean {
    return this.etypes.includes(t);
  }

  public toString(): string {
    return this.fitString(this.name) + ': ' + this.frequency + ': ' + this.level + '-' + this.maxlevel + ': \t' + this.mods.map(m => m.toString()).join(',\t');
  }

  private fitString(s: string): string {
    while (s.length <= 16) {
      s += ' ';
    }
    return s;
  }
}