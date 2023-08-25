"use strict";(self.webpackChunklata_project_frontend=self.webpackChunklata_project_frontend||[]).push([[69],{8069:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var i,r,o,s,d,a,c,l,p,x,u,h,f,g,m=t(9439),j=t(4719),b=t(2791),Z=t(7689),v=t(1632),y=t(168),k=t(3081),w=t(9806),C=t(7948),z=t.n(C),I=k.Z.div(i||(i=(0,y.Z)(["\n  padding: 35px 25px;\n  justify-content: flex-start;\n\n  img {\n    width: 500px;\n    margin-bottom: 25px;\n  }\n  @media screen and (max-width: 480px) {\n    display: block;\n  }\n"]))),S=k.Z.div(r||(r=(0,y.Z)(["\n  display: flex;\n  user-select: none;\n  align-items: center;\n  margin-bottom: 45px;\n  gap: 5px;\n"]))),L=(0,k.Z)(z())(o||(o=(0,y.Z)(["\n  max-width: 900px; /* Set maximum width */\n  max-height: 600px; /* Set maximum height */\n  position: absolute;\n  inset: 40px;\n  border: 1px solid rgb(204, 204, 204);\n  background: rgb(255, 255, 255);\n  overflow: auto;\n  border-radius: 15px;\n  outline: none;\n  padding: 20px;\n  z-index: 5;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center; /* Center horizontally */\n  justify-content: space-evenly; /* Center vertically */\n"]))),q=(0,k.Z)(w.G)(s||(s=(0,y.Z)(["\n  width: 25px;\n  height: 25px;\n  cursor: pointer;\n"]))),A=(0,k.Z)(w.G)(d||(d=(0,y.Z)(["\n  height: 25px;\n  color: #9AC43C;\n  border-radius: 50%;\n  cursor: pointer;\n"]))),G=(0,k.Z)(w.G)(a||(a=(0,y.Z)(["\n  height: 25px;\n  color: #9AC43C;\n  border-radius: 50%;\n  cursor: pointer;\n"]))),N=k.Z.div(c||(c=(0,y.Z)(["\n  display: flex;\n  overflow-x: hidden;\n  align-items: center;\n  height: 140px;\n  img {\n    cursor: pointer;\n  }\n"]))),_=k.Z.div(l||(l=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 25px;\n  gap: 25px;\n  align-items: center;\n  user-select: none;\n  margin-bottom: 25px;\n\n  span:nth-of-type(1) {\n    color: red;\n    cursor: pointer;\n    padding: 0 5px;\n  }\n\n  input {\n    border: none;\n    background: none;\n    font-size: inherit;\n    padding: 0;\n    appearance: none;\n    max-width: 10000px;\n    width: ","px;\n    text-align: center;\n    outline: none;\n  }\n\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  span:nth-of-type(2) {\n    color: green;\n    cursor: pointer;\n    padding: 0 5px;\n  }\n"])),(function(n){return 15*(n.quantityLength+1)})),E=k.Z.div(p||(p=(0,y.Z)(["\n    border-left: 1px solid #e9e9e9;\n    padding: 0 0 0 30px;\n    max-width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n    @media screen and (max-width: 780px) {\n        border-left: none;\n        padding: 0 0;\n    }\n"]))),O=k.Z.h5(x||(x=(0,y.Z)(["\n    border-bottom: #e9e9e9 1px solid;\n    padding-bottom: 9px;\n    margin-bottom: 20px;\n    font-size: 24px;\n"]))),R=k.Z.p(u||(u=(0,y.Z)(["\n    text-align: justify;\n    color: #656565;\n    font-size: 16px;\n"]))),W=(0,k.Z)(w.G)(h||(h=(0,y.Z)(['\n  margin-right: 8px; /* \u0412\u0456\u0434\u0441\u0442\u0443\u043f \u0441\u043f\u0440\u0430\u0432\u0430 \u0432\u0456\u0434 \u0442\u0435\u043a\u0441\u0442\u0443 "\u041a\u0423\u041f\u0418\u0422\u0418" */\n']))),Y=k.Z.button(f||(f=(0,y.Z)(["\n  background: #9AC43C;\n  color: #fff;\n  padding: 5px 20px;\n  font-size: 15px;\n  border-radius: 20px;\n\n&:hover {\n  background: #8ac930;\n}\n\n&:active {\n  background: #8ac930;\n  top: 2px;\n}\n\n&:before {\n  position: absolute;\n  height: 100%;\n  left: 0;\n  top: 0;\n  line-height: 3;\n  font-size: 140%;\n  width: 60px;\n}\n"]))),B=k.Z.div(g||(g=(0,y.Z)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  @media screen and (max-width: 480px) {\n    display: block;\n  }\n"]))),F=t(3329),H=function(n){var e=n.machenics,t=(0,Z.s0)(),i=(0,b.useState)(1),r=(0,m.Z)(i,2),o=r[0],s=r[1],d=(0,b.useState)(0),a=(0,m.Z)(d,2),c=a[0],l=a[1],p=(0,b.useState)(!1),x=(0,m.Z)(p,2),u=x[0],h=x[1],f=(0,b.useState)(""),g=(0,m.Z)(f,2),y=g[0],k=g[1],w=(0,b.useRef)(null),C=(0,Z.UO)().photoId,z=e.find((function(n){return n.id===parseInt(C)}));(0,b.useEffect)((function(){z&&l(z.price*o)}),[z,o]);var H=function(n){return function(){w.current&&(w.current.scrollLeft+=175*n*3)}},P=e.find((function(n){return n.id===parseInt(C)})),U=P.url.length>3;if(!z)return(0,F.jsx)("div",{children:"Photo not found"});return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(j.Z,{title:z.title}),(0,F.jsxs)(I,{children:[(0,F.jsxs)(B,{children:[(0,F.jsxs)("div",{children:[(0,F.jsx)("img",{src:z.url[0],alt:"".concat(z.id),style:{width:"556px"}}),(0,F.jsxs)(S,{children:[U&&(0,F.jsx)(A,{icon:v.a0w,onClick:H(-1)}),(0,F.jsx)(N,{ref:w,children:P.url.map((function(n,e){return(0,F.jsx)("img",{src:n,alt:"".concat(P.id),style:{width:"165px",margin:"5px"},onClick:function(){return function(n){k(n),h(!0)}(n)}},e)}))}),U&&(0,F.jsx)(G,{icon:v.swf,onClick:H(1)})]})]}),(0,F.jsx)("div",{children:(0,F.jsxs)(_,{quantityLength:o.toString().length,children:[(0,F.jsxs)("div",{children:[(0,F.jsx)("span",{onClick:function(){o>1&&s(o-1)},children:"-"}),(0,F.jsx)("input",{type:"text",value:o,maxLength:10,onChange:function(n){var e=parseInt(n.target.value);isNaN(e)||s(e)}}),(0,F.jsx)("span",{onClick:function(){s(o+1)},children:"+"})]}),(0,F.jsxs)("div",{children:["\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u0446\u0456\u043d\u0430: ",(0,F.jsxs)("span",{style:{fontWeight:"bold",fontSize:"25px",color:"black"},children:[c," \u0433\u0440\u043d"]})]}),(0,F.jsx)("div",{children:(0,F.jsxs)(Y,{onClick:function(){t("/projects/".concat(C,"/buy"),{state:{photoItem:z.url,productName:z.title,quantity:o,finalAmount:c}})},children:[(0,F.jsx)(W,{icon:v.yYj}),"\u041a\u0423\u041f\u0418\u0422\u0418"]})})]})})]}),(0,F.jsxs)(E,{children:[(0,F.jsxs)("div",{children:[(0,F.jsx)(O,{children:"\u041e\u0441\u043d\u043e\u0432\u043d\u0435"}),(0,F.jsx)(R,{children:z.description})]}),(0,F.jsxs)("div",{children:[(0,F.jsx)(O,{children:"\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u0456\u0448\u0435"}),(0,F.jsx)("div",{children:z.details.split("\n").map((function(n,e){return(0,F.jsxs)("p",{children:[n,(0,F.jsx)("br",{})]},e)}))})]})]})]}),(0,F.jsxs)(L,{isOpen:u,onRequestClose:function(){return h(!1)},contentLabel:"Large Image",appElement:document.getElementById("root"),children:[(0,F.jsx)(q,{icon:v.YIN,onClick:function(){return h(!1)}}),(0,F.jsx)("div",{children:(0,F.jsx)("img",{src:y,alt:"Large",style:{maxWidth:"100%",maxHeight:"100%",width:"auto",height:"auto"}})})]})]})}},4719:function(n,e,t){t.d(e,{Z:function(){return x}});t(2791);var i,r,o,s=t(168),d=t(3081),a=d.Z.section(i||(i=(0,s.Z)(["\n    background: #252525;\n    // position: relative;\n    margin: 0;\n    padding: 0;\n    color: #fefefe;\n    display: block;\n"]))),c=d.Z.div(r||(r=(0,s.Z)(["\n    padding: 0 20px 20px 25px;\n    // position: relative;\n    display: flex;\n    align-items: center;\n"]))),l=d.Z.h2(o||(o=(0,s.Z)(["\n    color: #fff;\n    margin: 32px 0 32px 0;\n    line-height: 1.5em;\n    font-size: 42px;\n    @media screen and (max-width: 480px) {\n        font-size: 24px;\n    }\n"]))),p=t(3329),x=function(n){var e=n.title;return(0,p.jsx)(a,{children:(0,p.jsx)(c,{children:(0,p.jsx)(l,{children:e})})})}}}]);
//# sourceMappingURL=69.3ddec685.chunk.js.map