# TypeScript Training

Este projeto reúne meus estudos iniciais com TypeScript, realizados em 2025. Organizei e publiquei esses exemplos para não esquecer os fundamentos e também para ajudar outros desenvolvedores que estão começando.

Assim como fiz no projeto de <a href="https://github.com/KaoreSactra/javascript-training">javascript</a>.

> **Organização do código:**  
> - `//?` - Título.  
> - `//!` - Importante.  
> - `//*` - Explicação.  
> - `// ==>` - Resultado esperado.

## Ferramentas Utilizadas

- **Node.js**: Para executar e testar códigos TypeScript fora do navegador.  
- **TypeScript**: A linguagem utilizada para os exemplos.  

## Estrutura do Projeto

O projeto cobre os seguintes tópicos fundamentais:

1. **Tipos Básicos**
   - `string`, `number`, `boolean`, `array`, `object`
   - Inferência automática de tipos pelo TypeScript

2. **Tuplas e Union Types**
   - Definição de tuplas com tipos fixos
   - Uso do operador `|` para múltiplos tipos

3. **Interfaces, Intersection Types (&) e Type Assertions (as)**
   - Criando e utilizando interfaces
   - Combinando tipos com `&`
   - Convertendo tipos com `as`

4. **Configuração do `tsconfig.json`**
   - `target`: Define a versão do ECMAScript
   - `module`: Define o sistema de módulos
   - `strict`: Habilita regras estritas para maior segurança
   - `rootDir` e `outDir`: Organização dos arquivos de entrada e saída
   - `allowJs` e `checkJs`: Suporte para arquivos `.js` dentro do projeto

## Exemplos

- **Tipos Básicos**:  
  ```typescript
  const firstName: string = 'Gustavo'
  let age: number = 20
  const isAlive: boolean = true
  let infosAdd: any
  ```  

- **Arrays e Tuplas**:  
  ```typescript
  const keyWords: string[] = ['Coffee', 'Programming', 'Music']

  let person: [string, number] = ['Gustavo', 20]

  let people: [string, number][] = [
    ['Gustavo', 20],
    ['Pedro', 22]
  ];
  ```  

- **Union Types (|)**:  
  ```typescript
  let id: string | number
  id = 1
  id = '1'
  ```  

- **Configuração do `tsconfig.json`**:  
  ```json
  {
    "compilerOptions": {
      "target": "ES2022",
      "module": "commonjs",
      "strict": true,
      "rootDir": "./src",
      "outDir": "./dist",
      "allowJs": true,
      "checkJs": true
    }
  }
  ```