(this.webpackJsonplanq=this.webpackJsonplanq||[]).push([[0],{34:function(e,a,s){e.exports=s(68)},39:function(e,a,s){},63:function(e,a){},66:function(e,a,s){},67:function(e,a,s){},68:function(e,a,s){"use strict";s.r(a);var n=s(0),t=s.n(n),l=s(31),i=s.n(l),r=(s(39),s(17)),o=s(33),g=s(3),u=s(32),p=s.n(u);s(66);function h(){var e=Object(n.useState)([]),a=Object(g.a)(e,2),s=a[0],l=a[1],i=Object(n.useState)(),u=Object(g.a)(i,2),h=u[0],c=u[1],m=Object(n.useState)([]),b=Object(g.a)(m,2),E=b[0],d=b[1],f=Object(n.useState)(void 0),w=Object(g.a)(f,2),v=w[0],A=w[1],j=Object(n.useState)(void 0),Q=Object(g.a)(j,2),y=Q[0],k=Q[1];return Object(n.useEffect)((function(){k(p()("https://language-play-back.herokuapp.com/"))}),[]),Object(n.useEffect)((function(){if(void 0!==h){var e=[].concat(Object(o.a)(s),[h]);s.length>=15&&e.splice(0,1),c(void 0),l(e)}}),[h,s]),Object(n.useEffect)((function(){void 0!==v&&(console.log("Updating players"),d(Object(r.a)(Object(r.a)({},E),{},{players:v})),A(void 0))}),[v,E]),Object(n.useEffect)((function(){void 0!==y&&(y.on("start",(function(e){console.log("\n[start]",e),d(e)})),y.on("message",(function(e){console.log("\n[message]",e),c(e)})),y.on("update",(function(e){console.log("\n[update]",e),d(e)})),y.on("playerConnect",(function(e){console.log("\n[player connect]",e),A(e.players)})))}),[y]),t.a.createElement("div",{id:"game"},t.a.createElement("div",{id:"game-sidebar"},0!==E.length?Object.keys(E.players).map((function(e,a){return t.a.createElement("span",{key:a},t.a.createElement("b",null,E.players[e].username),":"," ",E.players[e].score," pts",t.a.createElement("br",null))})):""),t.a.createElement("div",{id:"game-holder"},t.a.createElement("div",{id:"game-show"},0!==E.length?t.a.createElement(t.a.Fragment,null,t.a.createElement("span",null,t.a.createElement("b",null,"What is this in ",E.lang,"?")),t.a.createElement("br",null),t.a.createElement("img",{src:E.thumbnail,alt:"thumbnail"})):""),t.a.createElement("div",{id:"game-chat"},t.a.createElement("div",{id:"game-chat-messages"},s.map((function(e,a){return e.isCorrect?t.a.createElement("span",{key:a,className:"correct-answer"},t.a.createElement("b",null,e.author,":")," ",e.text,t.a.createElement("br",null)):t.a.createElement("span",{key:a},t.a.createElement("b",null,e.author,":")," ",e.text,t.a.createElement("br",null))}))),t.a.createElement("div",{id:"game-chat-writer"},t.a.createElement("input",{type:"text",autoFocus:!0,onKeyDown:function(e){13===e.keyCode&&""!==e.target.value.replace(/ /gi,"")&&function(e){y.emit("message",{text:e.target.value}),e.target.value=""}(e)}})))))}var c=[{thumbnail:"assets/EnglishQA/apple.png",answer:{english:"apple",spanish:"manzana",portuguese:"maca"}},{thumbnail:"assets/EnglishQA/orange.png",answer:{english:"orange",spanish:"naranja",portuguese:"laranja"}},{thumbnail:"assets/EnglishQA/heart.png",answer:{english:"love",spanish:"amor",portuguese:"amor"}},{thumbnail:"assets/EnglishQA/pillow.png",answer:{english:"pillow",spanish:"amortiguar",portuguese:"almofada"}},{thumbnail:"assets/EnglishQA/soccer-ball-variant.png",answer:{english:"ball",spanish:"pelota",portuguese:"bola"}},{thumbnail:"assets/EnglishQA/notebook.png",answer:{english:"notebook",spanish:"diario",portuguese:"caderno"}},{thumbnail:"assets/EnglishQA/glass-of-water.png",answer:{english:"glass",spanish:"vidrio",portuguese:"copo"}},{thumbnail:"assets/EnglishQA/smartphone.png",answer:{english:"phone",spanish:"telefono movil",portuguese:"celular"}},{thumbnail:"assets/EnglishQA/game-controller.png",answer:{english:"game",spanish:"juego",portuguese:"jogo"}},{thumbnail:"assets/EnglishQA/pencil.png",answer:{english:"pencil",spanish:"lapiz",portuguese:"lapis"}},{thumbnail:"assets/EnglishQA/book.png",answer:{english:"book",spanish:"libro",portuguese:"livro"}},{thumbnail:"assets/EnglishQA/backpack.png",answer:{englis:"backpack",spanish:"mochila",portuguese:"mochila"}},{thumbnail:"assets/EnglishQA/goggles.png",answer:{english:"glasses",spanish:"vasos",portuguese:"oculos"}},{thumbnail:"assets/EnglishQA/paper.jpg",answer:{english:"paper",spanish:"papel",portuguese:"papel"}},{thumbnail:"assets/EnglishQA/ferramenta-de-regua-quadrada.png",answer:{english:"ruler",spanish:"regla",portuguese:"regua"}},{thumbnail:"assets/EnglishQA/violao.png",answer:{english:"guitar",spanish:"guitarra",portuguese:"violao"}},{thumbnail:"assets/EnglishQA/medico.png",answer:{english:"doctor",spanish:"medico",portuguese:"medico"}},{thumbnail:"assets/EnglishQA/fatiador-de-abacate.png",answer:{english:"avocado",spanish:"palta",portuguese:"abacate"}},{thumbnail:"assets/EnglishQA/cacau.png",answer:{english:"cocoa",spanish:"cacao",portuguese:"cacau"}},{thumbnail:"assets/EnglishQA/goiaba.png",answer:{english:"guava",spanish:"guayaba",portuguese:"goiaba"}},{thumbnail:"assets/EnglishQA/cachorro.png",answer:{english:"dog",spanish:"perro",portuguese:"cachorro"}},{thumbnail:"assets/EnglishQA/gato-manx.png",answer:{english:"cat",spanish:"gato",portuguese:"gato"}},{thumbnail:"assets/EnglishQA/abelhas.png",answer:{english:"bee",spanish:"abeja",portuguese:"abelha"}},{thumbnail:"assets/EnglishQA/elephant.jpg",answer:{english:"elephant",spanish:"elefante",portuguese:"elefante"}},{thumbnail:"assets/EnglishQA/spoon.jpg",answer:{english:"spoon",spanish:"cuchara",portuguese:"colher"}},{thumbnail:"assets/EnglishQA/supermarket.jpg",answer:{english:"supermarket",spanish:"supermercado",portuguese:"supermercado"}},{thumbnail:"assets/EnglishQA/hospital.jpg",answer:{english:"hospital",spanish:"enfermeria",portuguese:"hospital"}},{thumbnail:"assets/EnglishQA/Loja.png",answer:{english:"store",spanish:"tienda",portuguese:"loja"}},{thumbnail:"assets/EnglishQA/casa.png",answer:{english:"home",spanish:"casa",portuguese:"casa"}}];s(67);var m=function(){return t.a.createElement("div",{className:"App"},t.a.createElement("header",{className:"App-header"},t.a.createElement("h1",null,"Lan",t.a.createElement("span",{className:"highlight"},"Q"))),t.a.createElement("main",null,t.a.createElement(h,{questionsList:c})),t.a.createElement("a",{className:"link-to-raymag",title:"Go to Raymag's Webiste",href:"https://raymag.github.io/"},"Go to Raymag?"))};i.a.render(t.a.createElement(t.a.StrictMode,null,t.a.createElement(m,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.18a0d8b7.chunk.js.map