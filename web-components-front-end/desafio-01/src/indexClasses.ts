// classes 
/* Modificadores de  acesso
 data modifiers
 public pode ser acessado em todos
 private soemtente a classe que o atributo pertence
 protected classes e subclasses
*/
class Character{
    private name: string;
    protected stregth: number;
    public Skill: number;

    constructor(name: string, stregth: number, Skill: number){
        this.name = name;
        this.stregth = stregth;
        this.Skill = Skill;
    }

    attack(): void{
        console.log(`Attack with ${this.stregth} points`);

    }
}

const p1 = new Character("Jonathan", 10, 98);
p1.attack();


// Superclass Character
// Subclasse Magician
class Magician extends Character{

    magicPoints: number;

    constructor(
        name: string,
        stregth: number,
        Skill: number,
        magicPoints: number
    ){
        super(name, stregth, Skill);
        this.magicPoints = magicPoints;
    }

}

const p2 = new Character("Jonathan Junior", 5, 98,);
p2.attack();