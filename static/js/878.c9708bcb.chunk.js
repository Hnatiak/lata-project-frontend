"use strict";(self.webpackChunklata_project_frontend=self.webpackChunklata_project_frontend||[]).push([[878],{1878:function(n,e,i){i.r(e),i.d(e,{default:function(){return D}});var t,r,o,s,l,d,c,a,p,x,u,h,f,g,m=i(9439),j=i(4719),b=i(2791),Z=i(7689),v=i(1632),y=i(168),k=i(3081),w=i(9806),C=i(7948),z=i.n(C),S=k.Z.div(t||(t=(0,y.Z)(["\n  padding: 35px 25px;\n  justify-content: flex-start;\n\n  img {\n    width: 500px;\n    margin-bottom: 25px;\n  }\n  @media screen and (max-width: 480px) {\n    display: block;\n  }\n"]))),I=k.Z.div(r||(r=(0,y.Z)(["\n  display: flex;\n  user-select: none;\n  align-items: center;\n  margin-bottom: 45px;\n  gap: 5px;\n"]))),L=(0,k.Z)(z())(o||(o=(0,y.Z)(["\n  max-width: 1000px; /* Set maximum width */\n  max-height: 800px; /* Set maximum height */\n  position: absolute;\n  inset: 40px;\n  border: 1px solid rgb(204, 204, 204);\n  background: rgb(255, 255, 255);\n  overflow: auto;\n  border-radius: 15px;\n  outline: none;\n  padding: 20px;\n  z-index: 5;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end; /* Center horizontally */\n  justify-content: center; /* Center vertically */\n  user-select: none;\n"]))),q=(0,k.Z)(w.G)(s||(s=(0,y.Z)(["\n  width: 25px;\n  height: 25px;\n  cursor: pointer;\n"]))),A=(0,k.Z)(w.G)(l||(l=(0,y.Z)(["\n  height: 25px;\n  color: #9AC43C;\n  border-radius: 50%;\n  cursor: pointer;\n"]))),G=(0,k.Z)(w.G)(d||(d=(0,y.Z)(["\n  height: 25px;\n  color: #9AC43C;\n  border-radius: 50%;\n  cursor: pointer;\n"]))),N=k.Z.div(c||(c=(0,y.Z)(["\n  display: flex;\n  overflow-x: hidden;\n  align-items: center;\n  // height: 120px;\n  img {\n    cursor: pointer;\n  }\n"]))),_=k.Z.div(a||(a=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 25px;\n  gap: 25px;\n  align-items: center;\n  user-select: none;\n  margin-bottom: 25px;\n\n  span:nth-of-type(1) {\n    color: red;\n    cursor: pointer;\n    padding: 0 5px;\n  }\n\n  input {\n    border: none;\n    background: none;\n    font-size: inherit;\n    padding: 0;\n    appearance: none;\n    max-width: 10000px;\n    width: ","px;\n    text-align: center;\n    outline: none;\n  }\n\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  span:nth-of-type(2) {\n    color: green;\n    cursor: pointer;\n    padding: 0 5px;\n  }\n"])),(function(n){return 15*(n.quantityLength+1)})),E=k.Z.div(p||(p=(0,y.Z)(["\n    border-left: 1px solid #e9e9e9;\n    padding: 0 0 0 30px;\n    max-width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n    @media screen and (max-width: 780px) {\n        border-left: none;\n        padding: 0 0;\n    }\n"]))),F=k.Z.h5(x||(x=(0,y.Z)(["\n    border-bottom: #e9e9e9 1px solid;\n    padding-bottom: 9px;\n    margin-bottom: 20px;\n    font-size: 24px;\n"]))),O=k.Z.p(u||(u=(0,y.Z)(["\n    text-align: justify;\n    color: #656565;\n    font-size: 16px;\n"]))),R=(0,k.Z)(w.G)(h||(h=(0,y.Z)(['\n  margin-right: 8px; /* \u0412\u0456\u0434\u0441\u0442\u0443\u043f \u0441\u043f\u0440\u0430\u0432\u0430 \u0432\u0456\u0434 \u0442\u0435\u043a\u0441\u0442\u0443 "\u041a\u0423\u041f\u0418\u0422\u0418" */\n']))),W=k.Z.button(f||(f=(0,y.Z)(["\n  background: #9AC43C;\n  color: #fff;\n  padding: 5px 20px;\n  font-size: 15px;\n  border-radius: 20px;\n\n&:hover {\n  background: #8ac930;\n}\n\n&:active {\n  background: #8ac930;\n  top: 2px;\n}\n\n&:before {\n  position: absolute;\n  height: 100%;\n  left: 0;\n  top: 0;\n  line-height: 3;\n  font-size: 140%;\n  width: 60px;\n}\n"]))),Y=k.Z.div(g||(g=(0,y.Z)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  @media screen and (max-width: 480px) {\n    display: block;\n  }\n"]))),B=i(3329),D=function(n){var e=n.photos,i=(0,Z.s0)(),t=(0,b.useState)(1),r=(0,m.Z)(t,2),o=r[0],s=r[1],l=(0,b.useState)(0),d=(0,m.Z)(l,2),c=d[0],a=d[1],p=(0,b.useState)(!1),x=(0,m.Z)(p,2),u=x[0],h=x[1],f=(0,b.useState)(""),g=(0,m.Z)(f,2)[1],y=(0,b.useRef)(null),k=(0,b.useState)(0),w=(0,m.Z)(k,2),C=w[0],z=w[1],D=function(n){return function(){y.current&&(y.current.scrollLeft+=175*n*3)}},H=(0,Z.UO)().photoId,P=e.find((function(n){return n.id===parseInt(H)})),U=P.url.length>3;(0,b.useEffect)((function(){P&&a(P.price*o)}),[P,o]);if(!P)return(0,B.jsx)("div",{children:"Photo not found"});return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(j.Z,{title:P.title}),(0,B.jsxs)(S,{children:[(0,B.jsxs)(Y,{children:[(0,B.jsxs)("div",{children:[(0,B.jsx)("div",{children:(0,B.jsx)("img",{src:P.url[0],alt:"".concat(P.id)})}),(0,B.jsxs)(I,{children:[U&&(0,B.jsx)(A,{icon:v.a0w,onClick:D(-1)}),(0,B.jsx)(N,{ref:y,children:P.url.map((function(n,e){return(0,B.jsx)("img",{src:n,alt:"".concat(P.id),style:{width:"165px",margin:"5px"},onClick:function(){return function(n,e){z(e),g(n),h(!0)}(n,e)}},e)}))}),U&&(0,B.jsx)(G,{icon:v.swf,onClick:D(1)})]})]}),(0,B.jsx)("div",{children:(0,B.jsx)(_,{quantityLength:o.toString().length,children:[3].includes(P.id)?(0,B.jsxs)("p",{children:["\u0417\u0430 \u0434\u0435\u0442\u0430\u043b\u044f\u043c\u0438 \u0434\u0437\u0432\u043e\u043d\u0456\u0442\u044c \u043d\u0430 \u043d\u043e\u043c\u0435\u0440: ",(0,B.jsx)("br",{}),(0,B.jsx)("a",{href:"tel:+380673231734",children:"+38 (067) 323-17-34"})]}):(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("div",{children:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c:"}),(0,B.jsxs)("div",{children:[(0,B.jsx)("span",{onClick:function(){o>1&&s(o-1)},children:"-"}),(0,B.jsx)("input",{type:"text",value:o,maxLength:10,onChange:function(n){var e=parseInt(n.target.value);isNaN(e)||s(e)}}),(0,B.jsx)("span",{onClick:function(){s(o+1)},children:"+"})]}),(0,B.jsxs)("div",{children:["\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u0446\u0456\u043d\u0430: ",(0,B.jsxs)("span",{style:{fontWeight:"bold",fontSize:"25px",color:"black"},children:[c," \u0433\u0440\u043d"]})]}),(0,B.jsxs)(W,{onClick:function(){i("/projects/".concat(H,"/buy"),{state:{photoItem:P.url,productName:P.title,quantity:o,finalAmount:c}})},children:[(0,B.jsx)(R,{icon:v.yYj}),"\u041a\u0423\u041f\u0418\u0422\u0418"]})]})})})]}),(0,B.jsxs)(E,{children:[(0,B.jsxs)("div",{children:[(0,B.jsx)(F,{children:"\u041e\u0441\u043d\u043e\u0432\u043d\u0435"}),(0,B.jsx)(O,{children:P.description})]}),(0,B.jsxs)("div",{children:[(0,B.jsx)(F,{children:"\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u0456\u0448\u0435"}),(0,B.jsx)("div",{children:P.details.split("\n").map((function(n,e){return(0,B.jsxs)("p",{children:[n,(0,B.jsx)("br",{})]},e)}))})]})]})]}),(0,B.jsxs)(L,{isOpen:u,onRequestClose:function(){return h(!1)},contentLabel:"Large Image",appElement:document.getElementById("root"),children:[(0,B.jsx)("div",{style:{display:"flex",flexDirection:"row-reverse"},children:(0,B.jsx)(q,{icon:v.YIN,onClick:function(){return h(!1)}})}),(0,B.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%"},children:[(0,B.jsx)(G,{icon:v.acZ,onClick:function(){z((C-1+P.url.length)%P.url.length)}}),(0,B.jsx)("img",{src:P.url[C],alt:"Large",style:{width:"720px",maxHeight:"750px"}}),(0,B.jsx)(G,{icon:v.eFW,onClick:function(){z((C+1)%P.url.length)}})]})]})]})}},4719:function(n,e,i){i.d(e,{Z:function(){return x}});i(2791);var t,r,o,s=i(168),l=i(3081),d=l.Z.section(t||(t=(0,s.Z)(["\n    background: #252525;\n    // position: relative;\n    margin: 0;\n    padding: 0;\n    color: #fefefe;\n    display: block;\n"]))),c=l.Z.div(r||(r=(0,s.Z)(["\n    padding: 0 20px 20px 25px;\n    // position: relative;\n    display: flex;\n    align-items: center;\n"]))),a=l.Z.h2(o||(o=(0,s.Z)(["\n    color: #fff;\n    margin: 32px 0 32px 0;\n    line-height: 1.5em;\n    font-size: 42px;\n    @media screen and (max-width: 480px) {\n        font-size: 24px;\n    }\n"]))),p=i(3329),x=function(n){var e=n.title;return(0,p.jsx)(d,{children:(0,p.jsx)(c,{children:(0,p.jsx)(a,{children:e})})})}}}]);
//# sourceMappingURL=878.c9708bcb.chunk.js.map