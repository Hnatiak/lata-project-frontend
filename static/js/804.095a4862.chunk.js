"use strict";(self.webpackChunklata_project_frontend=self.webpackChunklata_project_frontend||[]).push([[804],{3804:function(n,e,r){r.r(e),r.d(e,{default:function(){return cn}});var t,i,o,a,p,s,l,d,x,c,h,g,u,m=r(7689),f=r(4165),w=r(5861),Z=(r(2791),r(5147)),v=r(5705),b=r(9434),j=r(6727),y=r(168),k=r(9806),C=r(4553),z=r(9202),N=z.Z.div(t||(t=(0,y.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 600px;\n    width: 100%;\n    background: var(--welcomeBgColor);\n    background-repeat: no-repeat;\n    background-size: cover;\n"]))),_=z.Z.div(i||(i=(0,y.Z)(["\n  text-align: center;\n  background: #111;\n  border-radius: 20px;\n  @media screen and (max-width: 768px) {\n    ;\n  }\n"]))),q=z.Z.div(o||(o=(0,y.Z)(["\n    background: #9AC43C;\n    padding: 30px;\n    display: flex;\n    border-radius: 20px 20px 0 0;\n"]))),B=(0,z.Z)(C.Z)(a||(a=(0,y.Z)(["\n  left: 160px;\n  top: 40px;\n  font-style: normal;\n  font-weight: var(--fontWeight500);\n  font-size: var(--fontSize18);\n  line-height: 27px;\n  letter-spacing: -0.02em;\n  color: white;\n"]))),I=(0,z.Z)(C.Z)(p||(p=(0,y.Z)(["\n  margin-right: 14px;\n  font-style: normal;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: -0.02em;\n  color: #111;\n"]))),S=z.Z.div(s||(s=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  align-items: center;\n  padding: 30px;\n\n  input {\n    width: 326px;\n    height: 49px;\n    left: 40px;\n    top: 107px;\n    color: white;\n    background: var(--inputBgColor);\n    opacity: 0.4;\n    border: 1px solid white;\n    padding-left: 18px;\n    box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);\n    border-radius: 8px;\n    @media screen and (max-width: 768px) {\n        width: 287px;\n\n    }\n  }\n"]))),R=z.Z.div(l||(l=(0,y.Z)(["\n    position: relative;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 14px;\n"]))),A=(z.Z.input(d||(d=(0,y.Z)(["\n  width: 326px;\n  height: 49px;\n  left: 40px;\n  top: 107px;\n  color: var(--lightColor);\n  background: var(--inputBgColor);\n  opacity: 0.4;\n  border: 1px solid white;\n  padding-left: 18px;\n  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);\n  border-radius: 8px;\n"]))),z.Z.span(x||(x=(0,y.Z)(["\n    position: absolute;\n    right: 18px;\n    top: 19px;\n    cursor: pointer;\n    color: var(--passwordColor);\n"]))),(0,z.Z)(k.G)(c||(c=(0,y.Z)(["\n    color: var(--passwordColor);\n"]))),z.Z.svg(h||(h=(0,y.Z)(["\n  width: 16.5px;\n  height: 16px;\n  top: 50%;\n  right: 4px;\n"]))),z.Z.button(g||(g=(0,y.Z)(["\n    font-style: normal;\n    font-weight: var(--fontWeight500);\n    font-size: 14px;\n    line-height: 21px;\n    text-align: center;\n    letter-spacing: -0.02em;\n    width: 100%;\n    height: 49px;\n    margin-top: 24px;\n    background: rgb(154, 196, 60);\n    border-radius: 8px;\n    color: white;\n    cursor: pointer;\n    @media screen and (max-width: 768px) {\n        width: 287px;\n    }\n"])))),E=(0,z.Z)(v.Bc)(u||(u=(0,y.Z)(["\n  font-size: 15px;\n  color: white;\n"]))),P=r(5206),W=r(3329),L=j.Ry().shape({name:j.Z_().required("Name is required"),email:j.Z_().min(6,"Email must be at least 6 characters").email("Invalid email").required("Email is required"),password:j.Z_().min(8,"Password must be at least 6 characters").required("Password is required")});var D,F,G,J,V,O,U,H,K,M,Q,T,X,Y=function(){var n=(0,m.s0)(),e=(0,b.I0)(),r=function(){var r=(0,w.Z)((0,f.Z)().mark((function r(t){var i;return(0,f.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),i={name:t.target.elements.name.value,email:t.target.elements.email.value,password:t.target.elements.password.value},r.next=4,e((0,Z.z2)(i));case 4:r.sent.error?(0,P.Am)():n("/");case 6:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}();return(0,W.jsx)(N,{children:(0,W.jsx)("form",{onSubmit:r,children:(0,W.jsx)(v.J9,{initialValues:{name:"",email:"",password:""},validationSchema:L,children:(0,W.jsxs)(_,{children:[(0,W.jsxs)(q,{children:[(0,W.jsx)(I,{href:"register",underline:"none",children:"Registration"}),(0,W.jsx)(B,{href:"login",underline:"none",children:"Log In"})]}),(0,W.jsxs)(S,{children:[(0,W.jsx)(v.gN,{autoFocus:!0,name:"name",type:"text",placeholder:"Name"}),(0,W.jsx)(E,{name:"name",component:"div"}),(0,W.jsx)(v.gN,{name:"email",type:"email",placeholder:"Email"}),(0,W.jsx)(E,{name:"email",component:"div"}),(0,W.jsxs)(R,{children:[(0,W.jsx)(v.gN,{name:"password",placeholder:"Password"}),(0,W.jsx)(E,{name:"password",component:"div"})]}),(0,W.jsx)(A,{type:"submit",children:"Register Now"})]})]})})})})},$=z.Z.div(D||(D=(0,y.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 600px;\n    width: 100%;\n    background: var(--welcomeBgColor);\n    background-repeat: no-repeat;\n    background-size: cover;\n"]))),nn=z.Z.div(F||(F=(0,y.Z)(["\n  text-align: center;\n  background: #111;\n  border-radius: 20px;\n"]))),en=z.Z.div(G||(G=(0,y.Z)(["\n    background: #9AC43C;\n    padding: 30px;\n    display: flex;\n    border-radius: 20px 20px 0 0;\n"]))),rn=(0,z.Z)(C.Z)(J||(J=(0,y.Z)(["\n  left: 160px;\n  top: 40px;\n  font-style: normal;\n  font-weight: var(--fontWeight500);\n  font-size: var(--fontSize18);\n  line-height: 27px;\n  letter-spacing: -0.02em;\n  color: #111;\n"]))),tn=(0,z.Z)(C.Z)(V||(V=(0,y.Z)(["\n  margin-right: 14px;\n  font-style: normal;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: -0.02em;\n  color: white;\n"]))),on=z.Z.div(O||(O=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  align-items: center;\n  padding: 30px;\n\n  input {\n    width: 326px;\n    height: 49px;\n    left: 40px;\n    top: 107px;\n    color: white;\n    background: var(--inputBgColor);\n    opacity: 0.4;\n    border: 1px solid white;\n    padding-left: 18px;\n    box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);\n    border-radius: 8px;\n    @media screen and (max-width: 768px) {\n        width: 287px;\n\n    }\n  }\n"]))),an=z.Z.div(U||(U=(0,y.Z)(["\n    position: relative;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 14px;\n"]))),pn=(z.Z.input(H||(H=(0,y.Z)(["\n  width: 326px;\n  height: 49px;\n  left: 40px;\n  top: 107px;\n  color: var(--lightColor);\n  background: var(--inputBgColor);\n  opacity: 0.4;\n  border: 1px solid white;\n  padding-left: 18px;\n  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);\n  border-radius: 8px;\n"]))),z.Z.span(K||(K=(0,y.Z)(["\n    position: absolute;\n    right: 18px;\n    top: 19px;\n    cursor: pointer;\n    color: var(--passwordColor);\n"]))),(0,z.Z)(k.G)(M||(M=(0,y.Z)(["\n    color: var(--passwordColor);\n"]))),z.Z.svg(Q||(Q=(0,y.Z)(["\n  width: 16.5px;\n  height: 16px;\n  top: 50%;\n  right: 4px;\n"]))),z.Z.button(T||(T=(0,y.Z)(["\n    font-style: normal;\n    font-weight: var(--fontWeight500);\n    font-size: 14px;\n    line-height: 21px;\n    text-align: center;\n    margin-top: 24px;\n    letter-spacing: -0.02em;\n    width: 100%;\n    height: 49px;\n    background: rgb(154, 196, 60);\n    border-radius: 8px;\n    color: white;\n    cursor: pointer;\n    @media screen and (max-width: 768px) {\n        width: 287px;\n    }\n"])))),sn=(0,z.Z)(v.Bc)(X||(X=(0,y.Z)(["\n  font-size: 15px;\n  color: white;\n"]))),ln=r(4289),dn=j.Ry().shape({email:j.Z_().email("\u0415\u043c\u0435\u0439\u043b \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0438\u0439").required("\u0415\u043c\u0435\u0439\u043b \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"),password:j.Z_().min(6,"\u041f\u0430\u0440\u043e\u043b\u044c \u043c\u0443\u0441\u0438\u0442\u044c \u0431\u0443\u0442\u0438 \u0431\u0456\u043b\u044c\u0448\u0435 8 \u0431\u0443\u043a\u0432").required("\u041f\u0430\u0440\u043e\u043b\u044c \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439")});var xn=function(){var n=(0,m.s0)(),e=(0,b.I0)(),r=function(){var r=(0,w.Z)((0,f.Z)().mark((function r(t){var i;return(0,f.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),i={email:t.target.elements.email.value,password:t.target.elements.password.value},r.next=4,e((0,Z.x4)(i,ln.o4));case 4:r.sent.error?P.Am.error():n("/");case 6:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}();return(0,W.jsx)($,{children:(0,W.jsx)("form",{onSubmit:r,children:(0,W.jsx)(v.J9,{initialValues:{email:"",password:""},validationSchema:dn,children:(0,W.jsxs)(nn,{children:[(0,W.jsxs)(en,{children:[(0,W.jsx)(tn,{href:"register",underline:"none",children:"Registration"}),(0,W.jsx)(rn,{href:"login",underline:"none",children:"Log In"})]}),(0,W.jsxs)(on,{children:[(0,W.jsx)(v.gN,{autoFocus:!0,name:"email",type:"email",placeholder:"Email"}),(0,W.jsx)(sn,{name:"email",component:"div"}),(0,W.jsxs)(an,{children:[(0,W.jsx)(v.gN,{name:"password",placeholder:"Password"}),(0,W.jsx)(sn,{name:"password",component:"div"})]}),(0,W.jsx)(pn,{type:"submit",children:"Log In Now"})]})]})})})})},cn=function(){var n=(0,m.UO)().id;return(0,W.jsxs)("div",{children:["login"===n&&(0,W.jsx)(xn,{}),"register"===n&&(0,W.jsx)(Y,{}),(0,W.jsx)(P.Ix,{})]})}}}]);
//# sourceMappingURL=804.095a4862.chunk.js.map