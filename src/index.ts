//! Tipagem define o tipo de dado que uma variável pode armazenar, melhorando segurança e legibilidade do código.

//? Tipos Básicos

const firstName: string = 'Gustavo' //* Define uma constante do tipo string (texto).
let age: number = 20 //* Define uma variável do tipo number (números inteiros ou decimais).
const isAlive: boolean = true //* Define uma constante do tipo boolean (verdadeiro ou falso).
let infosAdd: any //* Define uma variável do tipo any, que pode receber qualquer tipo de valor.

const keyWords: string[] = ['Coffee', 'Programming', 'Music'] //* É possivel definir tipo em listas.

//? Tuplas

let person: [string, number] = ["Gustavo", 20] //* Tupla

let people: [string, number][] = [ //* Lista de tuplas
    ["Gustavo", 20],
    ["Pedro", 22]
]

//* Tuplas são arrays com tipos específicos e tamanho fixo, onde cada posição tem um tipo definido.

//? Union (|)

let id: string | number
id = 1
id = '1'

//* Permite que uma variável seja de um tipo OU outro, oferecendo flexibilidade.

//? Enum

enum Color {
    red = '#E62200',
    blue = '#004DE0',
    green = '#9EE600'
}

const carColor = Color.red //* Atribui a cor à variável carColor.

//* Define um conjunto de constantes nomeadas, facilitando a organização de valores relacionados.

//? Type Assertions (as)

let someValue: any = "your car is beautiful"

let strLength: number = (someValue as string).length //* Afirma que someValue é do tipo string.

//* Permite afirmar ao compilador o tipo de uma variável, útil quando você sabe mais sobre o tipo do que o TypeScript.

//? Functions

function sum(a: number, b: number): string {
    return (a + b).toString()
}

const value = sum(1 ,2) // ==> '3'

//* Define o tipo do valores a serem recebidos (number) e dos valores a serem devolvidos (String).

//? Type

type Infos = {
    name: string,
    age: number,
    isAlive?: boolean //* o ? torna o campo opcional
}

const user1: Infos = {
    name: 'Gustavo',
    age: 20
}

//* Cria um alias (apelido) para um tipo, facilitando a reutilização e organização de tipos complexos.

const log = (msg?: boolean) => {} //* o ? torna a existencia opcional

log(user1.isAlive!) //* o ! faz o campo tratar como existente

//? Intersection (&)

type User = { name: string }
type Admin = { permissions: string[] }

type AdminUser = User & Admin //* Combina User e Admin em um único tipo.

const adminUser: AdminUser = {
    name: "Gustavo",
    permissions: ["create", "delete"]
}

//* Combina múltiplos tipos em um, criando um tipo que possui todas as propriedades dos tipos originais.

//? Interfaces

interface UserFromSite {
    readonly name: string //* readonly => propriedade que impede a variável ser reescrita
    readonly age: number
}

const user: UserFromSite = {
    name: "Gustavo",
    age: 20
}

//* Define a estrutura de um objeto, especificando as propriedades e seus tipos, muito parecido com Type.

//? Classes

interface IPerson { //* Especifica a estrutura de uma Person.
    readonly id: number

    sayName(): string
}

class Person implements IPerson { //* Implementa a interface IPerson na classe Person
    
    readonly id: number //* Só pode ser atribuído uma vez e não pode ser modificado depois.
    protected name: string //* Pode ser acessado dentro da classe e por subclasses.
    private age: number //* Só pode ser acessado dentro da própria classe.

    constructor(id: number, name: string, age: number) { //* Construtor para inicializar as propriedades da classe.
        this.id = id
        this.name = name
        this.age = age
    }

    sayName(): string { //* Método que retorna o nome da pessoa.
        return this.name
    }
}

const user2 = new Person(2, 'Pedro', 20)

//? Generics

const returnValue = <T>(value: T) => value //* <T> é o padrão da comunidade.

const text = returnValue<string>('Its a string.') //* Tipo definido como String
const number = returnValue<number>(10) //* Tipo definido como Number
const boolean = returnValue<boolean>(true) //* Tipo definido como Boolean

const returnValueArray = <T, X>(array: T[], value: X) => { //* É possivel fazer com array e colocar mais de um tipo
    return [array[0], value]
}

const arrayText = returnValueArray<string, number>(['Its a string.', 'Its a string 2.'], 10)

//* Permite criar funções, classes ou interfaces que funcionam com tipo mutável, mantendo a segurança de tipagem.