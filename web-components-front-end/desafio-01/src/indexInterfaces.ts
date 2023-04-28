// Interfaces (type x interface)

type robot = {
    id: number;
    name: string;
}

const bot: robot={
    id:1,
    name: "Jonathan Junior",
};

interface robot2 {
    id: number;
    name: string;
}

const bot1: robot2 = {
    id: 1,
    name: "mensagem",
};

console.log(bot);
console.log(bot1);


