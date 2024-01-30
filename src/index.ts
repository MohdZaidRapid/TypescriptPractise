// Class and objects

// classes

class Player {
  public readonly id: string;
  constructor(
    private height: number,
    public weight: number,
    protected power: number
  ) {
    this.id = String(Math.random() * 1000);
  }

  getMyHeight = () => this.height;
}

class Plater extends Player {
  special: boolean;
  constructor(height: number, weight: number, power: number, special: boolean) {
    super(height, weight, power);
    this.special = special;
  }
}

class Player2 extends Player {
  special: boolean;
  constructor(height: number, weight: number, power: number, special: boolean) {
    super(height, weight, power);
    this.special = special;
  }
  getMyPower = () => this.power;
}

const anas = new Player2(100, 150, 23, true);
console.log(anas.weight);
console.log(anas.getMyHeight());
console.log(anas.getMyPower());
console.log(anas.id);
