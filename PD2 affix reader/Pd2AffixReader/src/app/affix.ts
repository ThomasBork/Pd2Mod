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
  
  static fromStrings(
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
  ): Affix {
    const newName = name;
    const newRare = rare == '1';
    const newLevel = parseInt(level);
    const newMaxlevel = parseInt(maxlevel);
    const newLevelreq = parseInt(levelreq);
    const newFrequency = parseInt(frequency);
    const newGroup = parseInt(group);
    const newMods = [
      Mod.fromStrings(mod1code, mod1param, mod1min, mod1max)
    ];
    if (mod2code) {
      newMods.push(Mod.fromStrings(mod2code, mod2param, mod2min, mod2max));
    }
    if (mod3code) {
      newMods.push(Mod.fromStrings(mod3code, mod3param, mod3min, mod3max));
    }
    const newItypes = [
      itype1,
      itype2,
      itype3,
      itype4,
      itype5,
      itype6,
      itype7
    ].filter(i => i != '')
    const newEtypes = [
      etype1,
      etype2,
      etype3,
      etype4,
      etype5
    ].filter(e => e != '')
    return new Affix(
      newName,
      newRare,
      newLevel,
      newMaxlevel,
      newLevelreq,
      newFrequency,
      newGroup,
      newMods,
      newItypes,
      newEtypes
    );
  }

  private constructor(
      name: string,
      rare: boolean,
      level: number,
      maxlevel: number,
      levelreq: number,
      frequency: number,
      group: number,
      mods: Mod[],
      itypes: string[],
      etypes: string[]
  ) {
    this.name = name;
    this.rare = rare;
    this.level = level;
    this.maxlevel = maxlevel;
    this.levelreq = levelreq;
    this.frequency = frequency;
    this.group = group;
    this.mods = mods;
    this.itypes = itypes;
    this.etypes = etypes;
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

  public clone(): Affix {
    return new Affix(
      this.name,
      this.rare,
      this.level,
      this.maxlevel,
      this.levelreq,
      this.frequency,
      this.group,
      this.mods.map(m => m.clone()),
      [...this.itypes],
      [...this.etypes]
    );
  }

  private fitString(s: string): string {
    while (s.length <= 16) {
      s += ' ';
    }
    return s;
  }
}