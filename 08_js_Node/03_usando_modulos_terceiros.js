const _ = require('lodash')
setInterval(() => console.log(_.random(1, 1000)), 2000);

/* Nessa Aula instalamos o lodash
usando o comando : npm i lodash  no caminho c:\laragon\www\curso_web_moderno\08_js_Node>*/
/* Também instalamos o nodemon no caminho Global usando o comando : npm i -g nodemon
(A Flag -g é para indicar que ele será instalado de uma forma Global para que ele seja executado direto no terminal)
com o Nodemon eu consigo alterar o Código  enquanto ele esta sendo executado e ele irá rodar a versão mais atual do código
apartir do momento que ele for restartado ou Refresh */