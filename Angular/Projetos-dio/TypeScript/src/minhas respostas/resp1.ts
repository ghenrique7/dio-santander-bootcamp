let employee = {
    codigo: 10,
    nome: 'Jhon'
}

let employee2, { codigo: number, nome: string } = {
    codigo: 10,
    nome: 'Jhon'
}

interface Funcionario {
    codigo: number,
    nome: string
};

const funcionario: Funcionario = {
    codigo: 10,
    nome: 'Jhon'
}

const funcionario1 = {} as Funcionario;
    funcionario1.codigo = 10;
    funcionario1.nome = 'Jhon';

const funcionario2: Funcionario = {
    codigo: 10,
    nome: 'Jhon'
}
