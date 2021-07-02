(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(8),l=n.n(s),i=(n(14),n(5)),r=n(2),j=(n(15),n(16),n(0)),u=function(e){var t=e.date.toLocaleString("en-US",{day:"2-digit"}),n=e.date.toLocaleString("en-US",{month:"long"}),a=e.date.getFullYear();return Object(j.jsxs)("div",{className:"expenseDate",children:[Object(j.jsx)("div",{className:"expenseDay",children:t}),Object(j.jsx)("div",{className:"expenseMonth",children:n}),Object(j.jsx)("div",{className:"expenseYear",children:a})]})},o=(n(18),function(e){var t="card "+e.className;return Object(j.jsx)("div",{className:t,children:e.children})}),d=(n(19),function(e){return Object(j.jsxs)(o,{className:"expense-item",children:[Object(j.jsx)(u,{date:e.date}),Object(j.jsxs)("div",{className:"expense-item-desc",children:[Object(j.jsx)("h2",{children:e.title}),Object(j.jsx)("div",{className:"expense-item-price",children:e.amount})]})]})}),b=(n(20),function(e){return Object(j.jsx)("div",{className:"expenseFilter",children:Object(j.jsxs)("div",{className:"expenseFilterContainer",children:[Object(j.jsx)("label",{children:"Filterd by Year"}),Object(j.jsxs)("select",{value:e.onSelect,onChange:function(t){e.onChange(t.target.value)},children:[Object(j.jsx)("option",{value:"2019",children:"2019"}),Object(j.jsx)("option",{value:"2020",children:"2020"}),Object(j.jsx)("option",{value:"2021",children:"2021"}),Object(j.jsx)("option",{value:"2022",children:"2022"})]})]})})}),x=n(9),O=(n(21),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),console.log(e.value),Object(j.jsxs)("div",{className:"chartBar",children:[Object(j.jsx)("div",{className:"chartBarInner",children:Object(j.jsx)("div",{className:"chartBarFill",style:{height:t}})}),Object(j.jsx)("div",{className:"chartBarLabel",children:e.label})]})}),v=(n(22),function(e){var t=e.dataSets.map((function(e){return e.value})),n=Math.max.apply(Math,Object(i.a)(t));return Object(j.jsx)("div",{className:"chart",children:e.dataSets.map((function(e){return Object(j.jsx)(O,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),h=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(x.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(s){a.e(s)}finally{a.f()}return Object(j.jsx)(v,{dataSets:n})},m=(n(23),function(e){var t=Object(a.useState)("2021"),n=Object(r.a)(t,2),c=n[0],s=n[1];var l=e.items.filter((function(e){return e.date.getFullYear().toString()===c})),i=Object(j.jsx)("h3",{className:"noExpenseItem",children:"No item found. Want to add click on the add button..."});return l.length>0&&(i=l.map((function(e){return Object(j.jsx)(d,{title:e.title,amount:e.amount,date:e.date},e.id)}))),Object(j.jsxs)(o,{className:"expenses",children:[Object(j.jsx)(b,{onSelect:c,onChange:function(e){s(e)}}),Object(j.jsx)(h,{expenses:l}),i]})}),p=n(7),f=(n(24),function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],s=n[1],l=Object(a.useState)(""),i=Object(r.a)(l,2),u=i[0],o=i[1],d=Object(a.useState)(""),b=Object(r.a)(d,2),x=b[0],O=b[1];return Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:c,amount:u,date:new Date(x)};e.onSaveExpense(n),s(""),o(""),O("")},children:[Object(j.jsxs)("div",{className:"newExpenseContainer",children:[Object(j.jsxs)("div",{className:"newContainer",children:[Object(j.jsx)("label",{children:"Title"}),Object(j.jsx)("input",{type:"text",placeholder:"Enter item name",value:c,onChange:function(e){s(e.target.value)}})]}),Object(j.jsxs)("div",{className:"newContainer",children:[Object(j.jsx)("label",{children:"Amount"}),Object(j.jsx)("input",{type:"number",min:"1",step:"1",placeholder:"Enter Amount",value:u,onChange:function(e){o(e.target.value)}})]}),Object(j.jsxs)("div",{className:"newContainer",children:[Object(j.jsx)("label",{children:"Date"}),Object(j.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",value:x,onChange:function(e){O(e.target.value)}})]})]}),Object(j.jsxs)("div",{className:"newExpenseButton",children:[Object(j.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(j.jsx)("button",{type:"submit",children:"Submit"})]})]})}),N=(n(25),function(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,2),c=n[0],s=n[1];return Object(j.jsxs)("div",{className:"newExpense",children:[!c&&Object(j.jsx)("button",{onClick:function(){s(!0)},children:"Add New Expense"}),c&&Object(j.jsx)(f,{onSaveExpense:function(t){var n=Object(p.a)(Object(p.a)({},t),{},{id:Math.random.toString()});e.onAddExpense(n),s(!1)},onCancel:function(){s(!1)}})]})}),g=(n(26),function(){return Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("div",{className:"square",style:{"--i":"0"}}),Object(j.jsx)("div",{className:"square",style:{"--i":"1"}}),Object(j.jsx)("div",{className:"square",style:{"--i":"2"}}),Object(j.jsx)("div",{className:"square",style:{"--i":"3"}}),Object(j.jsx)("div",{className:"square",style:{"--i":"4"}}),Object(j.jsx)("div",{className:"square",style:{"--i":"5"}})]})}),S=(n(27),function(){return Object(j.jsxs)("section",{children:[Object(j.jsx)("div",{className:"color"}),Object(j.jsx)("div",{className:"color"}),Object(j.jsx)("div",{className:"color"}),Object(j.jsx)("div",{className:"color"}),Object(j.jsx)(g,{})]})}),y=[{id:"1",title:"Food",amount:5e3,date:new Date(2020,3,3)},{id:"2",title:"grocery",amount:7e3,date:new Date(2020,6,23)},{id:"3",title:"education",amount:1e4,date:new Date(2019,2,14)},{id:"4",title:"Recharge",amount:999,date:new Date(2020,8,8)}];var C=function(){var e=Object(a.useState)(y),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)(S,{})}),Object(j.jsxs)("div",{children:[Object(j.jsx)(N,{onAddExpense:function(e){c((function(t){return[e].concat(Object(i.a)(t))}))}}),Object(j.jsx)(m,{items:n})]})]})};l.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.aa6118a2.chunk.js.map