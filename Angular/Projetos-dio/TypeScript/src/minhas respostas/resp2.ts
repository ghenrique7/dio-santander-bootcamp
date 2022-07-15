// Como podemos melhorar o esse código usando TS? 

enum Profissao {
    Atriz,
    Padeiro
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

let maria: Pessoa = {
    nome : "maria",
    idade : 29,
    profissao : Profissao.Atriz
}

let roberto: Pessoa = {
    nome : "Roberto",
    idade : 19,
    profissao : Profissao.Padeiro
}

let laura: Pessoa = {
    nome : "maria",
    idade : 32,
    profissao : Profissao.Atriz
}

let carlos: Pessoa = {
    nome : "Carlos",
    idade : 19,
    profissao : Profissao.Padeiro
}