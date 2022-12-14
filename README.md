<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

```bash
# arquivo .env

MONGO_URI=mongodb://localhost:27017/app-name
JWT_SECRET=aqui-vai-a-senha
ENCRIPT_JWT_SECRET=aqui-vai-a-senha
FRONT_URL=http://localhost:3000
LOGO_EMAIL_URL=https://eliasesquadriasdealuminio.com.br/wp-content/uploads/sites/58/2020/12/seu-logo-aqui-1.png
SERVER_UMBLER=smtp.umbler.com
EMAIL_REF=email@email.com.br
PASS_EMAIL_REF=senha-do-email
APP_NAME=AppName
JWT_EXPIRATION=1d
PORT=5050
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil My??liwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

<h1 align="center">
<br>Padr??o de commits, Utilizaremos a documenta????o do **Conventional Commits**, Commits Sem??nticos
</h1>

O commit sem??ntico possui os elementos estruturais abaixo (tipos), que informam a inten????o do seu commit ao utilizador(a) de seu c??digo.

- `feat`- Commits do tipo feat indicam que seu trecho de c??digo est?? incluindo um **novo recurso** (se relaciona com o MINOR do versionamento sem??ntico).

- `fix` - Commits do tipo fix indicam que seu trecho de c??digo commitado est?? **solucionando um problema** (bug fix), (se relaciona com o PATCH do versionamento sem??ntico).

- `docs` - Commits do tipo docs indicam que houveram **mudan??as na documenta????o**, como por exemplo no Readme do seu reposit??rio. (N??o inclui altera????es em c??digo).

- `test` - Commits do tipo test s??o utilizados quando s??o realizadas **altera????es em testes**, seja criando, alterando ou excluindo testes unit??rios. (N??o inclui altera????es em c??digo)

- `build` - Commits do tipo build s??o utilizados quando s??o realizadas modifica????es em **arquivos de build e depend??ncias**.

- `perf` - Commits do tipo perf servem para identificar quaisquer altera????es de c??digo que estejam relacionadas a **performance**.

- `style` - Commits do tipo style indicam que houveram altera????es referentes a **formata????es de c??digo**, semicolons, trailing spaces, lint... (N??o inclui altera????es em c??digo).

- `refactor` - Commits do tipo refactor referem-se a mudan??as devido a **refatora????es que n??o alterem sua funcionalidade**, como por exemplo, uma altera????o no formato como ?? processada determinada parte da tela, mas que manteve a mesma funcionalidade, ou melhorias de performance devido a um code review.

- `chore` - Commits do tipo chore indicam **atualiza????es de tarefas** de build, configura????es de administrador, pacotes... como por exemplo adicionar um pacote no gitignore. (N??o inclui altera????es em c??digo)

- `ci` - Commits do tipo ci indicam mudan??as relacionadas a **integra????o cont??nua** (_continuous integration_).

## ?????? Recomenda????es

- Adicione um t??tulo consistente com o t??tulo do conte??do;
- Recomendamos que na primeira linha deve ter no m??ximo 4 palavras;
- Para descrever com detalhes, usar a descri????o do commit;
- Usar um emoji no in??cio da mensagem de commit representando sobre o commit;
- Um link precisa ser adicionado em sua forma mais aut??ntica, ou seja: sem encurtadores de link e links afiliados;

## ???? Padr??es de emojis

<table>
  <thead>
    <tr>
      <th>Tipo de commit</th>
      <th>Emojis</th>
      <th>Palavra-chave</th>
    </tr>
  </thead>
 <tbody>
    <tr>
      <td>Acessibilidade</td>
      <td>??? <code>:wheelchair:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Adicionando um teste</td>
      <td>??? <code>:white_check_mark:</code></td>
      <td><code>test</code></td>
    </tr>
    <tr>
      <td>Adicionando uma depend??ncia</td>
      <td>??? <code>:heavy_plus_sign:</code></td>
      <td><code>build</code></td>
    </tr>
    <tr>
      <td>Altera????es de revis??o de c??digo</td>
      <td>???? <code>:ok_hand:</code></td>
      <td><code>style</code></td>
    </tr>
    <tr>
      <td>Anima????es e transi????es</td>
      <td>???? <code>:dizzy:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Bugfix</td>
      <td>???? <code>:bug:</code></td>
      <td><code>fix</code></td>
    </tr>
    <tr>
      <td>Coment??rios</td>
      <td>???? <code>:bulb:</code></td>
      <td><code>docs</code></td>
    </tr>
    <tr>
      <td>Commit inicial</td>
      <td>???? <code>:tada:</code></td>
      <td><code>init</code></td>
    </tr>
    <tr>
      <td>Configura????o</td>
      <td>???? <code>:wrench:</code></td>
      <td><code>chore</code></td>
    </tr>
    <tr>
      <td>Deploy</td>
      <td>???? <code>:rocket:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Documenta????o</td>
      <td>???? <code>:books:</code></td>
      <td><code>docs</code></td>
    </tr>
    <tr>
      <td>Em progresso</td>
      <td>???? <code>:construction:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Estiliza????o de interface</td>
      <td>???? <code>:lipstick:</code></td>
      <td><code>feat</code></td>
    </tr>
    <tr>
      <td>Infraestrutura</td>
      <td>???? <code>:bricks:</code></td>
      <td><code>ci</code></td>
    </tr>
    <tr>
      <td>Lista de ideias (tasks)</td>
      <td>???? <code> :soon: </code></td>
      <td></td>
    </tr>
    <tr>
      <td>Mover/Renomear</td>
      <td>???? <code>:truck:</code></td>
      <td><code>chore</code></td>
    </tr>
    <tr>
      <td>Novo recurso</td>
      <td>??? <code>:sparkles:</code></td>
      <td><code>feat</code></td>
    </tr>
    <tr>
      <td>Package.json em JS</td>
      <td>???? <code>:package:</code></td>
      <td><code>build</code></td>
    </tr>
    <tr>
      <td>Performance</td>
      <td>??? <code>:zap:</code></td>
      <td><code>perf</code></td>
    </tr>
    <tr>
        <td>Refatora????o</td>
        <td>?????? <code>:recycle:</code></td>
        <td><code>refactor</code></td>
    </tr>
    <tr>
      <td>Removendo um arquivo</td>
      <td>???? <code>:fire:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Removendo uma depend??ncia</td>
      <td>??? <code>:heavy_minus_sign:</code></td>
      <td><code>build</code></td>
    </tr>
    <tr>
      <td>Responsividade</td>
      <td>???? <code>:iphone:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Revertendo mudan??as</td>
      <td>???? <code>:boom:</code></td>
      <td><code>fix</code></td>
    </tr>
    <tr>
      <td>Seguran??a</td>
      <td>??????? <code>:lock:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>SEO</td>
      <td>??????? <code>:mag:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Tag de vers??o</td>
      <td>???? <code>:bookmark:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Teste de aprova????o</td>
      <td>?????? <code>:heavy_check_mark:</code></td>
      <td><code>test</code></td>
    </tr>
    <tr>
      <td>Testes</td>
      <td>???? <code>:test_tube:</code></td>
      <td><code>test</code></td>
    </tr>
    <tr>
      <td>Texto</td>
      <td>???? <code>:pencil:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Tipagem</td>
      <td>??????? <code>:label:</code></td>
      <td></td>
    </tr>
    <tr>
      <td>Tratamento de erros</td>
      <td>???? <code>:goal_net:</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

## ???? Exemplos

<table>
  <thead>
    <tr>
      <th>Comando git</th>
      <th>Resultado no GitHub</th>
    </tr>
  </thead>
 <tbody>
    <tr>
      <td>
        <code>git commit -m ":tada: Commit inicial"</code>
      </td>
      <td>???? Commit inicial</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":books: docs: Atualiza??ao do README"</code>
      </td>
      <td>???? docs: Atualiza??ao do README</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":bug: fix: Loop infinito na linha 50"</code>
      </td>
      <td>???? fix: Loop infinito na linha 50</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":sparkles: feat: Pagina de login"</code>
      </td>
      <td>??? feat: Pagina de login</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":bricks: ci: Modifica??ao no Dockerfile"</code>
      </td>
      <td>???? ci: Modifica??ao no Dockerfile</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":recycle: refactor: Passando para arrow functions"</code>
      </td>
      <td>?????? refactor: Passando para arrow functions</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":zap: perf: Melhoria no tempo de resposta"</code>
      </td>
      <td>??? perf: Melhoria no tempo de resposta</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":boom: fix: Revertendo mudan??as ineficientes"</code>
      </td>
      <td>???? fix: Revertendo mudan??as ineficientes</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":lipstick: feat: Estiliza??ao CSS do formulario"</code>
      </td>
      <td>???? feat: Estiliza??ao CSS do formulario</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":test_tube: test: Criando novo teste"</code>
      </td>
      <td>???? test: Criando novo teste</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":bulb: docs: Coment??rios sobre a fun????o LoremIpsum( )"</code>
      </td>
      <td>???? docs: Coment??rios sobre a fun????o LoremIpsum( )</td>
    </tr>
  </tbody>
</table>