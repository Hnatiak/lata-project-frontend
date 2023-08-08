"use strict";(self.webpackChunklata_project_frontend=self.webpackChunklata_project_frontend||[]).push([[878],{1878:function(n,e,i){i.r(e),i.d(e,{default:function(){return S}});var t,r,o,d,s,p,a,c=i(9439),l=i(4719),x=i(2791),h=i(7689),u=i(1632),f=i(168),g=i(3081),m=i(1087),j=i(9806),b=g.Z.div(t||(t=(0,f.Z)(["\n  padding: 35px 25px;\n  display: grid;\n\n  // gap: 105px 0px;\n  grid-template-columns: repeat(3, 1fr); // 2\n  justify-content: flex-start;\n\n  img {\n    width: 500px;\n    margin-bottom: 25px;\n  }\n  @media screen and (max-width: 480px) {\n    display: block;\n  }\n"]))),v=g.Z.div(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 25px;\n  gap: 25px;\n  align-items: center;\n  user-select: none;\n  margin-bottom: 25px;\n  span:nth-child(1) {\n    color: red;\n    cursor: pointer;\n    padding: 0 5px;\n  }\n\n  input {\n    border: none;\n    background: none;\n    font-size: inherit;\n    padding: 0;\n    appearance: none; /* Remove default styling in some browsers */\n    max-width: 10000px;\n    width: ","px;\n    text-align: center; /* Center the text horizontally */\n    outline: none; /* Remove the outline when the input is focused */\n  }\n\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none; /* Remove spinner buttons in Chrome */\n    margin: 0;\n  }\n\n  span:nth-child(3) {\n    color: green;\n    cursor: pointer;\n    padding: 0 5px;\n  }\n"])),(function(n){return 15*(n.quantityLength+1)})),Z=g.Z.div(o||(o=(0,f.Z)(["\n    border-left: 1px solid #e9e9e9;\n    padding: 0 0 0 30px;\n    max-width: 370px;\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n    @media screen and (max-width: 780px) {\n        border-left: none;\n        padding: 0 0;\n    }\n"]))),k=g.Z.h5(d||(d=(0,f.Z)(["\n    border-bottom: #e9e9e9 1px solid;\n    padding-bottom: 9px;\n    margin-bottom: 20px;\n    font-size: 24px;\n"]))),w=g.Z.p(s||(s=(0,f.Z)(["\n    text-align: justify;\n    color: #656565;\n"]))),y=(0,g.Z)(j.G)(p||(p=(0,f.Z)(['\n  margin-right: 8px; /* \u0412\u0456\u0434\u0441\u0442\u0443\u043f \u0441\u043f\u0440\u0430\u0432\u0430 \u0432\u0456\u0434 \u0442\u0435\u043a\u0441\u0442\u0443 "\u041a\u0423\u041f\u0418\u0422\u0418" */\n']))),z=(0,g.Z)(m.rU)(a||(a=(0,f.Z)(["\n  background: #9AC43C;\n  color: #fff;\n  padding: 5px 20px;\n  font-size: 15px;\n  border-radius: 20px;\n\n&:hover {\n  background: #8ac930;\n}\n\n&:active {\n  background: #8ac930;\n  top: 2px;\n}\n\n&:before {\n  position: absolute;\n  height: 100%;\n  left: 0;\n  top: 0;\n  line-height: 3;\n  font-size: 140%;\n  width: 60px;\n}\n"]))),C=i(3329),S=function(n){var e=n.photos,i=(0,x.useState)(1),t=(0,c.Z)(i,2),r=t[0],o=t[1],d=(0,x.useState)(0),s=(0,c.Z)(d,2),p=s[0],a=s[1],f=(0,h.UO)().photoId,g=e.find((function(n){return n.id===parseInt(f)}));(0,x.useEffect)((function(){g&&a(g.price*r)}),[g,r]);return g?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(l.Z,{title:g.title}),(0,C.jsxs)(b,{children:[(0,C.jsx)("img",{src:g.url,alt:"".concat(g.id)}),(0,C.jsxs)("div",{children:[(0,C.jsxs)("p",{children:["\u0426\u0456\u043d\u0430: ",g.price]}),(0,C.jsxs)(v,{quantityLength:r.toString().length,children:[(0,C.jsxs)("div",{children:[(0,C.jsx)("span",{onClick:function(){r>1&&o(r-1)},children:"-"}),(0,C.jsx)("input",{type:"text",value:r,maxLength:10,onChange:function(n){var e=parseInt(n.target.value);isNaN(e)||o(e)}}),(0,C.jsx)("span",{onClick:function(){o(r+1)},children:"+"})]}),(0,C.jsxs)("div",{children:["\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u0446\u0456\u043d\u0430: ",(0,C.jsx)("span",{style:{fontWeight:"bold",fontSize:"25px",color:"black"},children:p})]}),(0,C.jsx)("div",{children:(0,C.jsxs)(z,{children:[(0,C.jsx)(y,{icon:u.yYj}),"\u041a\u0423\u041f\u0418\u0422\u0418"]})})]})]}),(0,C.jsxs)(Z,{children:[(0,C.jsxs)("div",{children:[(0,C.jsx)(k,{children:"\u041e\u0441\u043d\u043e\u0432\u043d\u0435"}),(0,C.jsx)(w,{children:g.description})]}),(0,C.jsxs)("div",{children:[(0,C.jsx)(k,{children:"\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u0456\u0448\u0435"}),(0,C.jsx)(w,{children:g.details.split("\n").map((function(n,e){return(0,C.jsxs)("p",{children:[n,(0,C.jsx)("br",{})]},e)}))})]})]})]})]}):(0,C.jsx)("div",{children:"Photo not found"})}},4719:function(n,e,i){i.d(e,{Z:function(){return x}});i(2791);var t,r,o,d=i(168),s=i(3081),p=s.Z.section(t||(t=(0,d.Z)(["\n    background: #252525;\n    position: relative;\n    margin: 0;\n    padding: 0;\n    color: #fefefe;\n    display: block;\n"]))),a=s.Z.div(r||(r=(0,d.Z)(["\n    padding: 0 20px 20px 25px;\n    position: relative;\n    display: flex;\n    align-items: center;\n"]))),c=s.Z.h2(o||(o=(0,d.Z)(["\n    color: #fff;\n    margin: 32px 0 32px 0;\n    font-size: 42px;\n    @media screen and (max-width: 480px) {\n        font-size: 24px;\n    }\n"]))),l=i(3329),x=function(n){var e=n.title;return(0,l.jsx)(p,{children:(0,l.jsx)(a,{children:(0,l.jsx)(c,{children:e})})})}}}]);
//# sourceMappingURL=878.2bb30275.chunk.js.map