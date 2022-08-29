function Bullet(Speed, Damage) {
    return {
        Speed,
        Damage,
    }

}



function Ship(HP, Speed) {
    this.HP = HP;
    this.Speed = Speed;
    this.fireBullet = function () {
        return Bullet(1, 1);
    }

}

const P1 = new Ship(10, 10);

console.log(P1.fireBullet());

class Alien {
    constructor(HP,xCoord,yCoord,xSpeed,ySpeed){
        this.HP = HP;
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;

    }

    move(){
        if(this.xCoord < this.xSpeed && this.yCoord < this.ySpeed){
           this.xCoord = this.xCoord + this.xSpeed
           console.log(this.xCoord);
           this.yCoord = this.yCoord + this.ySpeed
           console.log(this.yCoord)
        }else {
            this.xCoord = this.xCoord - this.xSpeed
           this.yCoord = this.yCoord - this.ySpeed
        }

        return `${this.xCoord}, ${this.yCoord}`
    }

    
}



const test = new Alien(100, 10, 10, 1, 1)


