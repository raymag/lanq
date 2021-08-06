(this.webpackJsonplanq=this.webpackJsonplanq||[]).push([[0],{33:function(e,a,s){e.exports=s(67)},38:function(e,a,s){},62:function(e,a){},65:function(e,a,s){},66:function(e,a,s){},67:function(e,a,s){"use strict";s.r(a);var n=s(0),t=s.n(n),l=s(30),i=s.n(l),r=(s(38),s(32)),o=s(1),u=s(31),h=s.n(u);s(65);function g(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),s=a[0],l=a[1],i=Object(n.useState)([]),u=Object(o.a)(i,2),g=u[0],p=u[1],c=Object(n.useState)(),m=Object(o.a)(c,2),b=m[0],d=m[1],E=Object(n.useState)([]),w=Object(o.a)(E,2),v=w[0],f=w[1],j=Object(n.useState)(!0),y=Object(o.a)(j,2),k=y[0],A=y[1],O=Object(n.useState)(),Q=Object(o.a)(O,2),S=Q[0],N=Q[1];return Object(n.useEffect)((function(){k?A(!1):void 0===S?N(h()("https://language-play-back.herokuapp.com/")):(S.on("start",(function(e){console.log("[start]",e),f(e)})),S.on("update",(function(e){console.log("[update]",e),f(e)})),S.on("message",(function(e){var a=[].concat(Object(r.a)(g),[e]);g.length>=15&&a.splice(0,1),p(a)})),""!==s&&(S.emit("message",{text:s}),l(""))),void 0!==b&&b.scrollIntoView({behavior:"smooth"})}),[b,g,k,s,S]),t.a.createElement("div",{id:"game"},t.a.createElement("div",{id:"game-sidebar"},0!==v.length?Object.keys(v.players).map((function(e,a){return t.a.createElement("span",{key:a},t.a.createElement("b",null,v.players[e].username),":"," ",v.players[e].score," pts",t.a.createElement("br",null))})):""),t.a.createElement("div",{id:"game-holder"},t.a.createElement("div",{id:"game-show"},0!==v.length?t.a.createElement(t.a.Fragment,null,t.a.createElement("span",null,t.a.createElement("b",null,"What is this in ",v.lang,"?")),t.a.createElement("br",null),t.a.createElement("img",{src:v.thumbnail,alt:"thumbnail"})):""),t.a.createElement("div",{id:"game-chat"},t.a.createElement("div",{id:"game-chat-messages"},g.map((function(e,a){return e.isCorrect?t.a.createElement("span",{key:a,className:"correct-answer"},t.a.createElement("b",null,e.author,":")," ",e.text,t.a.createElement("br",null)):t.a.createElement("span",{key:a},t.a.createElement("b",null,e.author,":")," ",e.text,t.a.createElement("br",null))})),t.a.createElement("div",{style:{opacity:0},ref:function(e){return d(e)}},"END")),t.a.createElement("div",{id:"game-chat-writer"},t.a.createElement("input",{type:"text",autoFocus:!0,onKeyDown:function(e){13===e.keyCode&&""!==e.target.value.replace(/ /gi,"")&&(l(e.target.value),e.target.value="")}})))))}var p=[{thumbnail:"assets/EnglishQA/apple.png",answer:{english:"apple",spanish:"manzana",portuguese:"maca"}},{thumbnail:"assets/EnglishQA/orange.png",answer:{english:"orange",spanish:"naranja",portuguese:"laranja"}},{thumbnail:"assets/EnglishQA/heart.png",answer:{english:"love",spanish:"amor",portuguese:"amor"}},{thumbnail:"assets/EnglishQA/pillow.png",answer:{english:"pillow",spanish:"amortiguar",portuguese:"almofada"}},{thumbnail:"assets/EnglishQA/soccer-ball-variant.png",answer:{english:"ball",spanish:"pelota",portuguese:"bola"}},{thumbnail:"assets/EnglishQA/notebook.png",answer:{english:"notebook",spanish:"diario",portuguese:"caderno"}},{thumbnail:"assets/EnglishQA/glass-of-water.png",answer:{english:"glass",spanish:"vidrio",portuguese:"copo"}},{thumbnail:"assets/EnglishQA/smartphone.png",answer:{english:"phone",spanish:"tel\xe9fono m\xf3vil",portuguese:"celular"}},{thumbnail:"assets/EnglishQA/game-controller.png",answer:{english:"game",spanish:"juego",portuguese:"jogo"}},{thumbnail:"assets/EnglishQA/pencil.png",answer:{english:"pencil",spanish:"lapiz",portuguese:"lapis"}},{thumbnail:"assets/EnglishQA/book.png",answer:{english:"book",spanish:"libro",portuguese:"livro"}},{thumbnail:"assets/EnglishQA/backpack.png",answer:{englis:"backpack",spanish:"mochila",portuguese:"mochila"}},{thumbnail:"assets/EnglishQA/goggles.png",answer:{english:"glasses",spanish:"vasos",portuguese:"oculos"}},{thumbnail:"assets/EnglishQA/paper.jpg",answer:{english:"paper",spanish:"papel",portuguese:"papel"}},{thumbnail:"regua",answer:{english:"ruler",spanish:"regla",portuguese:"regua"}},{thumbnail:"violao",answer:{english:"guitar",spanish:"guitarra",portuguese:"violao"}},{thumbnail:"atividade",answer:{english:"activity",spanish:"actividad",portuguese:"atividade"}},{thumbnail:"medico",answer:{english:"doctor",spanish:"medico",portuguese:"medico"}},{thumbnail:"Abacate ",answer:{english:"avocado",spanish:"palta",portuguese:"abacate"}},{thumbnail:"cacau",answer:{english:"cocoa",spanish:"cacao",portuguese:"cacau"}},{thumbnail:"Goiaba ",answer:{english:"guava",spanish:"guayaba",portuguese:"goiaba"}},{thumbnail:"Cachorro",answer:{english:"dog",spanish:"perro",portuguese:"cachorro"}},{thumbnail:"gato",answer:{english:"cat",spanish:"gato",portuguese:"gato"}},{thumbnail:"abelha",answer:{english:"bee",spanish:"abeja",portuguese:"abelha"}},{thumbnail:"elefante",answer:{english:"elephant",spanish:"elefante",portuguese:"elefante"}},{thumbnail:"colher",answer:{english:"spoon",spanish:"cuchara",portuguese:"colher"}},{thumbnail:"supermercado",answer:{english:"supermarket",spanish:"supermercado",portuguese:"supermercado"}},{thumbnail:"hospital",answer:{english:"infirmary",spanish:"enfermer\xeda",portuguese:"hospital"}},{thumbnail:"loja",answer:{english:"store",spanish:"tienda",portuguese:"loja"}},{thumbnail:"casa",answer:{english:"home",spanish:"casa",portuguese:"casa"}}];s(66);var c=function(){return t.a.createElement("div",{className:"App"},t.a.createElement("header",{className:"App-header"},t.a.createElement("h1",null,"Lan",t.a.createElement("span",{className:"highlight"},"Q"))),t.a.createElement("main",null,t.a.createElement(g,{questionsList:p})),t.a.createElement("a",{className:"link-to-raymag",title:"Go to Raymag's Webiste",href:"https://raymag.github.io/"},"Go to Raymag?"))};i.a.render(t.a.createElement(t.a.StrictMode,null,t.a.createElement(c,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.3d79639b.chunk.js.map