(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{24:function(t,e,n){},44:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),s=n(15),i=n.n(s),r=(n(24),n(3)),o=n.n(r),u=n(5),h=n(16),p=n(17),l=n(19),d=n(18),j=n(6),f=n.n(j),b=(n(44),n(0)),O=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(h.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={topics:["Loading..."],question:"",answer:""},t.fetchTopics=Object(u.a)(o.a.mark((function e(){var n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat("/api","/get_topics"));case 2:n=e.sent,a=n.data,c=a.topics,t.setState({topics:c});case 6:case"end":return e.stop()}}),e)}))),t.handleChange=function(e){t.setState({question:e.target.value})},t.handleSubmit=function(e){t.fetchAnswer(),e.preventDefault()},t.fetchAnswer=Object(u.a)(o.a.mark((function e(){var n,a,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state.question,e.next=3,f.a.post("".concat("/api","/submit_question"),{question:n});case 3:a=e.sent,c=a.data,s=c.answer,t.setState({answer:s});case 7:case"end":return e.stop()}}),e)}))),t}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.fetchTopics()}},{key:"render",value:function(){var t=this.state,e=t.topics,n=t.question,a=t.answer;return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)("h1",{children:"List of topics to ask a question on"}),Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)("li",{children:t},t)}))}),Object(b.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(b.jsxs)("label",{children:["Question:",Object(b.jsx)("input",{type:"text",value:n,onChange:this.handleChange})]}),Object(b.jsx)("input",{type:"submit",value:"Submit"})]}),Object(b.jsxs)("h1",{children:["Answer: ",a]})]})})}}]),n}(a.Component),v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),s(t),i(t)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),v()}},[[46,1,2]]]);
//# sourceMappingURL=main.3282a995.chunk.js.map