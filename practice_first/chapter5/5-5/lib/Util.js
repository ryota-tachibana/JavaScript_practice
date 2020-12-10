//5-38 lib/Util
const AUTHOR = 'TARO, SUZUKI';
export class Member {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
    getName() {
    return this.lastName + this.firstName;
  }
}

export class Area {
  constructor(){}
  static getTriangle(base, height) {
    return base * height / 2;
  };
  static getDiamond(width, height) {
    return width * height / 2;
  };
}

//5-42 lib/Area
export default class  {
  static getTriangle(base, height) {
    return base * height / 2;
  };
}

//5-44 lib/MyApp
const SERECT_VALUE = Symbol();
export default class {
  constructor(serect) {
    this.hoge = 'hoge';
    this.foo = 'foo';
    this.[SERECT_VALUE] = serect;
    }
  checkValue(serect) {
    return this[SERECT_VALUE] === serect;
  }
}