"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[84],{7084:function(n,e,t){t.r(e),t.d(e,{default:function(){return an}});var r,a,o,i,s,c,l,d,m,u,x,p,h,f,b,Z,g,j,y=t(2791),P=t(9434),_=t(3634),v=function(n){return n.contacts.items},w=function(n){return n.contacts.isLoading},C=function(n){return n.contacts.error},z=function(n){return n.filter},k=t(1413),A=t(5705),N=t(6727),q=t(168),F=t(6444),L=t(9504),I=t.n(L),D=(0,F.ZP)(A.l0)(r||(r=(0,q.Z)(["\n  margin-bottom: 20px;\n"]))),E=F.ZP.label(a||(a=(0,q.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"]))),B=F.ZP.span(o||(o=(0,q.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n\n  color: #3a7999;\n  margin-bottom: 10px;\n"]))),J=(0,F.ZP)(A.gN)(i||(i=(0,q.Z)(["\n  margin-bottom: 10px;\n  width: 100%;\n  height: 30px;\n  font-size: 20px;\n\n  ::placeholder {\n    font-size: 14px;\n    font-style: italic;\n  }\n"]))),K=(0,F.ZP)(I())(s||(s=(0,q.Z)(["\n  margin-bottom: 10px;\n  width: 100%;\n  height: 30px;\n  font-size: 20px;\n\n  ::placeholder {\n    font-size: 14px;\n    font-style: italic;\n  }\n"]))),R=(0,F.ZP)(A.Bc)(c||(c=(0,q.Z)(["\n  color: red;\n  margin-bottom: 5px;\n"]))),S=t(3329),G=N.Ry().shape({name:N.Z_().max(15).matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required(),number:N.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,9}?\)?[-.\s]?\d{1,9}[-.\s]?\d{1,9}[-.\s]?\d{1,9}[-.\s]?\d{1,9}[-.\s]?\d{1,9}[-.\s]?\d{1,9}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required()}),M=function(){var n=(0,P.I0)(),e=(0,P.v9)(v),r=function(n,e){return e.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))};return(0,S.jsx)(A.J9,{initialValues:{name:"",number:""},onSubmit:function(a,o){(0,o.resetForm)();var i={name:a.name,number:a.number};r(i,e)?alert("".concat(i.name," is already in contacts")):n((0,_.uK)((0,k.Z)((0,k.Z)({},a),{},{id:"UA-"+(0,t(422).customAlphabet)("0123456789",3)()})))},validationSchema:G,children:(0,S.jsxs)(D,{autoComplete:"off",children:[(0,S.jsxs)(E,{children:[(0,S.jsx)(B,{children:"Name"}),(0,S.jsx)(J,{type:"text",name:"name",placeholder:"Enter your first and second name",required:!0}),(0,S.jsx)(R,{component:"span",name:"name"})]}),(0,S.jsxs)(E,{children:[(0,S.jsx)(B,{children:"Number"}),(0,S.jsx)(A.gN,{name:"number",required:!0,children:function(n){var e=n.field;return(0,S.jsx)(K,(0,k.Z)((0,k.Z)({},e),{},{mask:"+38 (099) 999-9999",maskchar:"_",placeholder:"+38 (0__) ___-____"}))}}),(0,S.jsx)(R,{component:"span",name:"number"})]}),(0,S.jsx)("button",{className:"add-btn btn-7",type:"submit",children:(0,S.jsx)("span",{children:"Add contact"})})]})})},T=F.ZP.li(l||(l=(0,q.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  margin-bottom: 5px;\n"]))),U=F.ZP.div(d||(d=(0,q.Z)(["\n  display: grid;\n  grid-template-columns: 1.05fr 1fr;\n  grid-template-rows: auto;\n  grid-column-gap: 15px;\n  width: 70%;\n"]))),V=F.ZP.p(m||(m=(0,q.Z)(["\n  justify-self: start;\n"]))),$=F.ZP.p(u||(u=(0,q.Z)(["\n  justify-self: end;\n"]))),H=function(){var n=(0,P.I0)(),e=(0,P.v9)(v),t=(0,P.v9)(z).toLowerCase(),r=e.filter((function(n){return n.name.toLowerCase().includes(t)})),a=function(e){n((0,_.GK)(e))};return(0,S.jsx)("ol",{children:r.map((function(n){return(0,S.jsx)(O,{contact:n,onDeleteContact:a},n.id)}))})},O=function(n){var e=n.contact,t=n.onDeleteContact,r=e.id,a=e.name,o=e.number;return(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)(T,{children:[(0,S.jsxs)(U,{children:[(0,S.jsxs)(V,{children:[a,":"]}),(0,S.jsx)($,{children:o})]}),(0,S.jsxs)("button",{className:"btn-delete btn-rotating",onClick:function(){return t(r)},type:"button",children:[(0,S.jsx)("span",{children:"Are you sure?"}),(0,S.jsx)("span",{children:"Delete"})]})]})})},Q=t(4808),W=F.ZP.label(x||(x=(0,q.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n\n  margin-bottom: 20px;\n"]))),X=F.ZP.p(p||(p=(0,q.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n\n  color: #3a7999;\n  margin-bottom: 10px;\n"]))),Y=F.ZP.input(h||(h=(0,q.Z)(["\n  margin-bottom: 10px;\n  width: 100%;\n  height: 30px;\n  font-size: 20px;\n\n  ::placeholder {\n    font-size: 14px;\n    font-style: italic;\n  }\n"]))),nn=(F.ZP.h2(f||(f=(0,q.Z)(["\n  color: #3a7999;\n  margin-bottom: 25px;\n  text-align: center;\n"]))),y.memo((function(){var n=(0,P.I0)(),e=(0,P.v9)(z),t=(0,y.useCallback)((function(e){n((0,Q.T)(e.target.value))}),[n]);return(0,S.jsxs)(W,{children:[(0,S.jsx)(X,{children:"Find contacts by name"}),(0,S.jsx)(Y,{type:"text",name:"filter",value:e,onChange:t,placeholder:"Enter a name to search for",required:!0})]})}))),en=F.ZP.section(b||(b=(0,q.Z)(["\n  border-radius: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  margin: 20px auto;\n  padding: 20px 50px;\n  text-align: center;\n  max-width: 500px;\n"]))),tn=F.ZP.h1(Z||(Z=(0,q.Z)(["\n  color: #3a7999;\n  margin-bottom: 15px;\n"]))),rn=F.ZP.h2(g||(g=(0,q.Z)(["\n  color: #3a7999;\n  margin-bottom: 15px;\n"]))),an=(F.ZP.p(j||(j=(0,q.Z)(["\n  font-size: 20px;\n  color: orangered;\n"]))),function(){var n=(0,P.I0)(),e=(0,P.v9)(w),t=(0,P.v9)(C);return(0,y.useEffect)((function(){n((0,_.yF)())}),[n]),(0,S.jsx)("main",{children:(0,S.jsxs)(en,{children:[(0,S.jsx)(tn,{children:"Phonebook"}),(0,S.jsx)(M,{}),(0,S.jsx)(rn,{children:"Contacts"}),(0,S.jsxs)("div",{children:[(0,S.jsx)(nn,{}),e&&!t&&(0,S.jsx)("b",{children:"Request in progress..."}),(0,S.jsx)(H,{})]})]})})})}}]);
//# sourceMappingURL=84.e21601b4.chunk.js.map