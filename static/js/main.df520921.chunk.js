(this.webpackJsonptable=this.webpackJsonptable||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(7),r=n.n(a),s=(n(12),n(2)),l=n(4),i=(n(13),n(14),n(0));var u=function(t){var e=t.tableItem,n=e.id,c=e.value,a=e.value2,r=e.value3,s=e.value4;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("td",{children:[n," "]}),Object(i.jsxs)("td",{children:[c," "]}),Object(i.jsxs)("td",{children:[a," "]}),Object(i.jsxs)("td",{children:[r," "]}),Object(i.jsxs)("td",{children:[s," "]})]})},j=(n(16),function(t){var e=t.btns,n=t.handleClick,c=e.map((function(t){return Object(i.jsx)("button",{className:"btn btn-primary",onClick:function(){return n(t.number)},children:t.number})}));return Object(i.jsx)("div",{className:"btns",children:c})}),b=function(t){var e=t.tableItems,n=t.formFilterList,a=t.showAll,r=Object(c.useState)(""),l=Object(s.a)(r,2),u=l[0],j=l[1];console.log(u);var b=e.filter((function(t){return t.value.includes(u)}));return Object(i.jsxs)("div",{class:"form-group",children:[Object(i.jsx)("input",{type:"text",class:"form-control",onChange:function(t){return j(t.target.value)},value:u,placeholder:"\u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c \u043e\u0442\u0444\u0438\u0442\u0440\u0443\u0435\u043c..."}),Object(i.jsx)("button",{onClick:function(){return n(b)},disabled:e.length<2,className:"btn btn-success",children:"Filtered"}),Object(i.jsx)("button",{onClick:a,className:"btn btn-warning",children:"ALL"})]})},o=0;function d(t){for(var e=[],n=0;n<t;n++){var c={number:n+1,selected:!1};e=[].concat(Object(l.a)(e),[c]),console.log(e)}return e}var O=function(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),O=Object(s.a)(r,2),h=O[0],f=O[1],x=Object(c.useState)(""),v=Object(s.a)(x,2),m=v[0],p=v[1],g=Object(c.useState)(""),C=Object(s.a)(g,2),y=C[0],N=C[1],S=Object(c.useState)(""),k=Object(s.a)(S,2),w=k[0],F=k[1],I=Object(c.useState)(1),D=Object(s.a)(I,2),L=D[0],A=D[1],E=Math.ceil(n.length/5),J=Object(c.useState)(d(E)),B=Object(s.a)(J,2),M=B[0],q=B[1],z=Object(c.useState)(1),G=Object(s.a)(z,2),H=G[0],K=G[1],P=Object(c.useState)([]),Q=Object(s.a)(P,2),R=Q[0],T=Q[1];Object(c.useEffect)((function(){q(d(E))}),[E]),Object(c.useEffect)((function(){T(n)}),[n]);var U=R.slice(5*H-5,5*H).map((function(t,e){return Object(i.jsx)("tr",{children:Object(i.jsx)(u,{tableItem:t},e)})}));return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{class:"form-group",children:[Object(i.jsx)("input",{type:"text",onChange:function(t){return f(t.target.value)},value:h,class:"form-control",placeholder:"\u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c \u043d\u0430\u043f\u0438\u0448\u0435\u043c...",id:"inputDefault"}),Object(i.jsx)("input",{type:"text",onChange:function(t){return p(t.target.value)},value:m,class:"form-control",placeholder:"\u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c \u043d\u0430\u043f\u0438\u0448\u0435\u043c...",id:"inputDefault"}),Object(i.jsx)("input",{type:"text",onChange:function(t){return N(t.target.value)},value:y,class:"form-control",placeholder:"\u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c \u043d\u0430\u043f\u0438\u0448\u0435\u043c...",id:"inputDefault"}),Object(i.jsx)("input",{type:"text",onChange:function(t){return F(t.target.value)},value:w,class:"form-control",placeholder:"\u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c \u043d\u0430\u043f\u0438\u0448\u0435\u043c...",id:"inputDefault"}),Object(i.jsx)("button",{className:"btn btn-primary",onClick:function(){var t={id:++o,value:h,value2:m,value3:y,value4:w};a([].concat(Object(l.a)(n),[t])),f("")},disabled:""===h,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]}),Object(i.jsx)(b,{tableItems:n,formFilterList:function(t){T(t)},showAll:function(){T(n)}}),Object(i.jsx)("div",{className:"table-container",children:Object(i.jsxs)("table",{className:"table",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{onClick:function(){if(L%2===1){var t=Object(l.a)(R).sort((function(t,e){return e.id-t.id}));T(t)}else{var e=Object(l.a)(R).sort((function(t,e){return t.id-e.id}));T(e)}A((function(t){return t+1}))},children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:"1"}),Object(i.jsx)("th",{children:"2"}),Object(i.jsx)("th",{children:"3"}),Object(i.jsx)("th",{children:"4"})]})}),Object(i.jsx)("tbody",{children:U})]})}),Object(i.jsx)("div",{className:"btns",children:Object(i.jsx)(j,{btns:M,handleClick:function(t){K(t)}})}),Object(i.jsx)("div",{className:"badge badge-primary total",children:Object(i.jsxs)("span",{className:"total-span",children:["\u0412\u0441\u0435\u0433\u043e \u0441\u0442\u0440\u043e\u043a: ",n.length]})})]})};n(17);r.a.render(Object(i.jsx)(O,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.df520921.chunk.js.map