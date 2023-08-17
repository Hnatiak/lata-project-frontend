"use strict";(self.webpackChunklata_project_frontend=self.webpackChunklata_project_frontend||[]).push([[848],{7981:function(n,e,r){r.r(e),r.d(e,{default:function(){return wn}});var t,i,o,a,p,s,l,d,x,c,h,g,u,m,f=r(7689),w=r(4165),Z=r(5861),v=r(9439),b=r(2791),j=r(5822),y=r(5705),k=r(9434),C=r(6727),z=r(1632),N=r(168),_=r(9806),A=r(4553),B=r(3081),q=B.Z.div(t||(t=(0,N.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 600px;\n    width: 100%;\n    background: var(--welcomeBgColor);\n    background-repeat: no-repeat;\n    background-size: cover;\n"]))),I=B.Z.div(i||(i=(0,N.Z)(["\n  text-align: center;\n  // background: #111;\n  border: 1px solid #9AC43C;\n  border-radius: 20px;\n  @media screen and (max-width: 768px) {\n    ;\n  }\n"]))),R=B.Z.div(o||(o=(0,N.Z)(["\n    background: #9AC43C;\n    padding: 30px;\n    display: flex;\n    border-radius: 20px 20px 0 0;\n"]))),S=(0,B.Z)(A.Z)(a||(a=(0,N.Z)(["\n  left: 160px;\n  top: 40px;\n  font-style: normal;\n  font-weight: var(--fontWeight500);\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: -0.02em;\n  color: white;\n"]))),W=(0,B.Z)(A.Z)(p||(p=(0,N.Z)(["\n  margin-right: 14px;\n  font-style: normal;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: -0.02em;\n  color: #111;\n"]))),L=B.Z.div(s||(s=(0,N.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  align-items: center;\n  padding: 30px;\n\n  input {\n    width: 326px;\n    height: 49px;\n    left: 40px;\n    top: 107px;\n    // color: white;\n    background: var(--inputBgColor);\n    opacity: 0.4;\n    border: 1px solid white;\n    padding-left: 18px;\n    box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);\n    border-radius: 8px;\n    @media screen and (max-width: 768px) {\n        width: 287px;\n\n    }\n  }\n"]))),D=B.Z.div(l||(l=(0,N.Z)(["\n    position: relative;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 14px;\n"]))),E=(B.Z.input(d||(d=(0,N.Z)(["\n  width: 326px;\n  height: 49px;\n  left: 40px;\n  top: 107px;\n  color: var(--lightColor);\n  background: var(--inputBgColor);\n  opacity: 0.4;\n  border: 1px solid white;\n  padding-left: 18px;\n  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.3);\n  border-radius: 8px;\n"]))),B.Z.span(x||(x=(0,N.Z)(["\n    position: absolute;\n    right: 18px;\n    top: 15px;\n    cursor: pointer;\n"])))),F=(0,B.Z)(_.G)(c||(c=(0,N.Z)(["\n    color: var(--passwordColor);\n"]))),G=(B.Z.svg(h||(h=(0,N.Z)(["\n  width: 16.5px;\n  height: 16px;\n  top: 50%;\n  right: 4px;\n"]))),B.Z.button(g||(g=(0,N.Z)(["\n    font-style: normal;\n    font-weight: var(--fontWeight500);\n    font-size: 14px;\n    line-height: 21px;\n    text-align: center;\n    letter-spacing: -0.02em;\n    width: 100%;\n    height: 49px;\n    margin-top: 24px;\n    background: rgb(154, 196, 60);\n    border-radius: 8px;\n    // color: white;\n    @media screen and (max-width: 768px) {\n        width: 287px;\n    }\n"])))),J=(0,B.Z)(y.Bc)(u||(u=(0,N.Z)(["\n  font-size: 15px;\n  // color: white;\n"]))),P=(B.Z.a(m||(m=(0,N.Z)(["\n  height: 45px;\n  border-radius: 6px;\n  background-color: #fafafa;\n  color: #23262a;\n  // opacity: 0.7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  padding: 14px 15px;\n  margin-top: 16px;\n\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.12;\n\n  &:hover {\n    opacity: 1;\n    scale: 1.05;\n    transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) 0s;\n  }\n"]))),r(5206)),V=r(3329),M=C.Ry().shape({name:C.Z_().required("\u0406\u043c'\u044f \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435"),email:C.Z_().min(6,"\u0415\u043c\u0435\u0439\u043b \u043c\u0443\u0441\u0438\u0442\u044c \u0431\u0443\u0442\u0438 \u0431\u0456\u043b\u044c\u0448\u0435 6-\u0442\u0438 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432").email("\u0415\u043c\u0435\u0439\u043b \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0438\u0439").required("\u0415\u043c\u0435\u0439\u043b \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"),password:C.Z_().min(8,"\u041f\u0430\u0440\u043e\u043b\u044c \u043c\u0443\u0441\u0438\u0442\u044c \u0431\u0443\u0442\u0438 \u0431\u0456\u043b\u044c\u0448\u0435 8-\u043c\u0438 \u0446\u0438\u0444\u0440").required("\u041f\u0430\u0440\u043e\u043b\u044c \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439")});var O,U,H,K,Q,T,X,Y,$,nn,en,rn,tn,on=function(){var n=(0,f.s0)(),e=(0,k.I0)(),r=(0,b.useState)(!1),t=(0,v.Z)(r,2),i=t[0],o=t[1],a=function(){var r=(0,Z.Z)((0,w.Z)().mark((function r(t){var i;return(0,w.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),i={name:t.target.elements.name.value,email:t.target.elements.email.value,password:t.target.elements.password.value},r.next=4,e((0,j.z2)(i));case 4:r.sent.error?P.Am.error("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"):(n("/"),P.Am.success("\u0412\u0438 \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u043b\u0438\u0441\u044f"));case 6:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}();return(0,V.jsx)(q,{children:(0,V.jsx)("form",{onSubmit:a,children:(0,V.jsx)(y.J9,{initialValues:{name:"",email:"",password:""},validationSchema:M,children:(0,V.jsxs)(I,{children:[(0,V.jsxs)(R,{children:[(0,V.jsx)(W,{href:"register",underline:"none",children:"Registration"}),(0,V.jsx)(S,{href:"login",underline:"none",children:"Log In"})]}),(0,V.jsxs)(L,{children:[(0,V.jsx)(y.gN,{autoFocus:!0,name:"name",type:"text",placeholder:"Name"}),(0,V.jsx)(J,{name:"name",component:"div"}),(0,V.jsx)(y.gN,{name:"email",type:"email",placeholder:"Email"}),(0,V.jsx)(J,{name:"email",component:"div"}),(0,V.jsxs)(D,{children:[(0,V.jsx)(y.gN,{name:"password",type:i?"text":"password",placeholder:"Password"}),(0,V.jsx)(J,{name:"password",component:"div"}),(0,V.jsx)(E,{className:"".concat(E," ").concat(F),onClick:function(){o(!i)},children:i?(0,V.jsx)(F,{icon:z.Aq,width:"18px"}):(0,V.jsx)(F,{icon:z.Mdf,width:"18px"})})]}),(0,V.jsx)(G,{type:"submit",children:"Register Now"}),(0,V.jsx)(J,{name:"submit",component:"div"})]})]})})})})},an=B.Z.div(O||(O=(0,N.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 600px;\n    width: 100%;\n    background: var(--welcomeBgColor);\n    background-repeat: no-repeat;\n    background-size: cover;\n"]))),pn=B.Z.div(U||(U=(0,N.Z)(["\n  text-align: center;\n  background: #111;\n  border-radius: 20px;\n"]))),sn=B.Z.div(H||(H=(0,N.Z)(["\n    background: #9AC43C;\n    padding: 30px;\n    display: flex;\n    border-radius: 20px 20px 0 0;\n"]))),ln=(0,B.Z)(A.Z)(K||(K=(0,N.Z)(["\n  left: 160px;\n  top: 40px;\n  font-style: normal;\n  font-weight: var(--fontWeight500);\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: -0.02em;\n  color: #111;\n"]))),dn=(0,B.Z)(A.Z)(Q||(Q=(0,N.Z)(["\n  margin-right: 14px;\n  font-style: normal;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: -0.02em;\n  color: white;\n"]))),xn=B.Z.div(T||(T=(0,N.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  align-items: center;\n  padding: 30px;\n\n  input {\n    width: 326px;\n    height: 49px;\n    left: 40px;\n    top: 107px;\n    color: white;\n    background: var(--inputBgColor);\n    opacity: 0.4;\n    border: 1px solid white;\n    padding-left: 18px;\n    box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);\n    border-radius: 8px;\n    @media screen and (max-width: 768px) {\n        width: 287px;\n\n    }\n  }\n"]))),cn=B.Z.div(X||(X=(0,N.Z)(["\n    position: relative;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 14px;\n"]))),hn=(B.Z.input(Y||(Y=(0,N.Z)(["\n  width: 326px;\n  height: 49px;\n  left: 40px;\n  top: 107px;\n  color: var(--lightColor);\n  background: var(--inputBgColor);\n  opacity: 0.4;\n  border: 1px solid white;\n  padding-left: 18px;\n  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);\n  border-radius: 8px;\n"]))),B.Z.span($||($=(0,N.Z)(["\n    position: absolute;\n    right: 18px;\n    top: 19px;\n    cursor: pointer;\n    color: var(--passwordColor);\n"]))),(0,B.Z)(_.G)(nn||(nn=(0,N.Z)(["\n    color: var(--passwordColor);\n"]))),B.Z.svg(en||(en=(0,N.Z)(["\n  width: 16.5px;\n  height: 16px;\n  top: 50%;\n  right: 4px;\n"]))),B.Z.button(rn||(rn=(0,N.Z)(["\n    font-style: normal;\n    font-weight: var(--fontWeight500);\n    font-size: 14px;\n    line-height: 21px;\n    text-align: center;\n    margin-top: 24px;\n    letter-spacing: -0.02em;\n    width: 100%;\n    height: 49px;\n    background: rgb(154, 196, 60);\n    border-radius: 8px;\n    color: white;\n    @media screen and (max-width: 768px) {\n        width: 287px;\n    }\n"])))),gn=(0,B.Z)(y.Bc)(tn||(tn=(0,N.Z)(["\n  font-size: 15px;\n  color: white;\n"]))),un=r(4289),mn=C.Ry().shape({email:C.Z_().email("\u0415\u043c\u0435\u0439\u043b \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0438\u0439").required("\u0415\u043c\u0435\u0439\u043b \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"),password:C.Z_().min(8,"\u041f\u0430\u0440\u043e\u043b\u044c \u043c\u0443\u0441\u0438\u0442\u044c \u0431\u0443\u0442\u0438 \u0431\u0456\u043b\u044c\u0448\u0435 8 \u0431\u0443\u043a\u0432").required("\u041f\u0430\u0440\u043e\u043b\u044c \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439")});var fn=function(){var n=(0,f.s0)(),e=(0,k.I0)(),r=function(){var r=(0,Z.Z)((0,w.Z)().mark((function r(t){var i;return(0,w.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),i={email:t.target.elements.email.value,password:t.target.elements.password.value},r.next=4,e((0,j.x4)(i,un.o4));case 4:r.sent.error?P.Am.error():(n("/"),P.Am.success("\u0412\u0438 \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0437\u0430\u043b\u043e\u0433\u0456\u043d\u0438\u043b\u0438\u0441\u044c"));case 6:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}();return(0,V.jsx)(an,{children:(0,V.jsx)("form",{onSubmit:r,children:(0,V.jsx)(y.J9,{initialValues:{email:"",password:""},validationSchema:mn,children:(0,V.jsxs)(pn,{children:[(0,V.jsxs)(sn,{children:[(0,V.jsx)(dn,{href:"register",underline:"none",children:"Registration"}),(0,V.jsx)(ln,{href:"login",underline:"none",children:"Log In"})]}),(0,V.jsxs)(xn,{children:[(0,V.jsx)(y.gN,{autoFocus:!0,name:"email",type:"email",placeholder:"Email"}),(0,V.jsx)(gn,{name:"email",component:"div"}),(0,V.jsxs)(cn,{children:[(0,V.jsx)(y.gN,{type:"password",name:"password",placeholder:"Password"}),(0,V.jsx)(gn,{name:"password",component:"div"})]}),(0,V.jsx)(hn,{type:"submit",children:"Log In Now"}),(0,V.jsx)(gn,{name:"submit",component:"div"})]})]})})})})},wn=function(){var n=(0,f.UO)().id;return(0,V.jsxs)("div",{children:["login"===n&&(0,V.jsx)(fn,{}),"register"===n&&(0,V.jsx)(on,{})]})}}}]);
//# sourceMappingURL=848.87730b41.chunk.js.map