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



// function Bullet(Speed, Damage) {
//     return {
//     Speed, Damage
//     }
//     }
    
//     function Ship(HP, speed) {
//     return {
//     HP,
//     speed,
//     fireBullet() {
//     return Bullet(1,1)
//     }
//     }
//     }
    
//     const test = Ship(1,1)
//     console.log(test.fireBullet())
