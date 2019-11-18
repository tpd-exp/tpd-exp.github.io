(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{209:function(e,t,a){e.exports=a(465)},243:function(e,t){},464:function(e,t,a){},465:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(5),o=a.n(r),i=(a(214),a(187)),c=a(188),m=a(205),s=a(189),u=a(206),p=a(472),d=a(466),f=a(190),E=a.n(f),g=a(475),y=a(468),b=a(469),h=a(473),k=a(7),v=a(45),I=b.a.create({name:"login"})(function(e){var t=e.tpd,a=e.form,n=a.getFieldDecorator,r=a.validateFields;return l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{title:"Trade Promotion Decisions"}),l.a.createElement(b.a,{onSubmit:function(e){e.preventDefault(),r(function(e,a){if(!e){if(!t.socket)return g.a.open({message:"\u767b\u5165\u5931\u6557",description:"\u4f3a\u670d\u5668\u9023\u7dda\u5931\u6557\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66"});var n=a.username,l=a.password,r="admin"===n?"loginAdmin":"login";t.socket.emit(r,{username:n,password:l},function(e){e&&g.a.open({message:"\u767b\u5165\u5931\u6557",description:e})})}})},style:{padding:"12px 24px 24px 24px"}},l.a.createElement(b.a.Item,null,n("username",{initialValue:"",rules:[{required:!0,message:"Please input your username!"}]})(l.a.createElement(h.a,{size:"large",prefix:l.a.createElement(k.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),l.a.createElement(b.a.Item,null,n("password",{initialValue:"",rules:[{required:!0,message:"Please input your Password!"}]})(l.a.createElement(h.a,{size:"large",prefix:l.a.createElement(k.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),l.a.createElement(b.a.Item,null,l.a.createElement(v.a,{size:"large",block:!0,type:"primary",htmlType:"submit"},"Log in"))))}),x=a(142),T=a(72),w=a.n(T),O="NME",S="ME",P="ADMIN",z="MANUFACTURER",C="RETAILER",D="OFF-INVOICES",F="SCAN-BACKS",q=[{required:!0,message:"\u5fc5\u586b"},{validator:function(e,t,a){w.a.isInt(t)&&parseInt(t)>0&&a(),a("\u8acb\u586b\u6b63\u6574\u6578")}}],A=[{required:!0,message:"\u5fc5\u586b"},{validator:function(e,t,a){w.a.isInt(t)&&parseInt(t)>0&&a(),a("\u8acb\u586b\u975e\u8ca0\u6574\u6578")}}],M=function(e,t){var a=document.createElement("a");a.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),a.setAttribute("download",e),a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a)},R=a(470),V=a(471),j=a(61),N=a(32),B=a(467),U=a(474),H=R.a.Text,L=V.a.Option,W=p.a.confirm,Q="CTRL_PANEL",G="NEW_GAME",J="RESUME",K=[{label:"\u4eba\u6578",id:"size",initialValue:"20",rules:[{required:!0,message:"\u5fc5\u586b"},{validator:function(e,t,a){w.a.isInt(t)&&parseInt(t)>0&&parseInt(t)%2===0&&a(),a("\u8acb\u586b\u6b63\u5076\u6578")}}]},{label:"\u6a21\u5f0f",id:"cond",initialValue:"NME",rules:[{required:!0,message:"\u5fc5\u586b"}]},{label:"TP",id:"dtp",initialValue:"2",rules:q},{label:"A",id:"a",initialValue:"100",rules:q},{label:"B",id:"b",initialValue:"5",rules:q},{label:"C",id:"c",initialValue:"1",rules:q},{label:"\u7b2c\u5e7e\u56de\u5408\u958b\u59cb",id:"round",initialValue:"1",rules:q}],_=b.a.create({name:"admin"})(function(e){var t=e.form,a=e.tpd,r=t.getFieldDecorator,o=t.getFieldValue,i=t.validateFields,c=Object(n.useState)(Q),m=Object(x.a)(c,2),s=m[0],u=m[1],p=Object(n.useState)(!1),f=Object(x.a)(p,2),E=f[0],I=f[1],T=function(){I(!0),i(function(e,t){e||a.socket.emit("newGame",t,function(e){if(I(!1),e)return g.a.open({message:"\u904a\u6232\u5efa\u7acb\u5931\u6557",description:e});u(J)})})};return l.a.createElement(l.a.Fragment,null,s===Q&&l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{title:"\u63a7\u5236\u53f0"}),l.a.createElement(j.a,{gutter:16,style:{padding:"12px 24px 24px 24px"}},l.a.createElement(N.a,{span:12},l.a.createElement(B.a,{onClick:function(){return u(G)}},l.a.createElement("p",null,l.a.createElement(k.a,{type:"plus"})),l.a.createElement("p",null,l.a.createElement(H,{strong:!0},"\u65b0\u904a\u6232")))),l.a.createElement(N.a,{span:12,onClick:function(){if(0===a.game.player.max)return g.a.open({message:"\u6c92\u6709\u904a\u6232\u6b63\u5728\u9032\u884c",description:"\u9ede\u64ca\u300c\u65b0\u904a\u6232\u300d\u958b\u59cb\u65b0\u904a\u6232\u3002"});u(J)}},l.a.createElement(B.a,null,l.a.createElement("p",null,l.a.createElement(k.a,{type:"caret-right"})),l.a.createElement("p",null,l.a.createElement(H,{strong:!0},"\u8fd4\u56de\u904a\u6232")))))),s===G&&l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{title:"\u65b0\u904a\u6232",onBack:function(){return u(Q)}}),l.a.createElement(b.a,{onSubmit:function(e){if(e.preventDefault(),a.game.player.max>0)return W({title:"\u65b0\u904a\u6232\u5c07\u8986\u84cb\u6b63\u5728\u9032\u884c\u7684\u904a\u6232",content:"\u78ba\u5b9a\u8981\u7e7c\u7e8c\u55ce\uff1f",onOk:T});T()},style:{padding:"12px 24px 24px 24px"}},l.a.createElement(j.a,{gutter:16},K.map(function(e,t){var a=e.label,n=e.id,i=e.initialValue,c=e.rules;return l.a.createElement(N.a,{key:t,span:8},l.a.createElement(b.a.Item,{label:a},1===t?r(n,{initialValue:i,rules:c})(l.a.createElement(V.a,null,l.a.createElement(L,{value:"NME"},"NME"),l.a.createElement(L,{value:"ME"},"ME"))):2===t&&o("cond")===S?"\u73a9\u5bb6\u6c7a\u5b9a":r(n,{initialValue:i,rules:c})(l.a.createElement(h.a,null))))})),l.a.createElement(b.a.Item,null,l.a.createElement(v.a,{size:"large",block:!0,type:"primary",htmlType:"submit",disabled:E},"\u904a\u6232\u958b\u59cb")))),s===J&&l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{title:"\u904a\u6232\u9032\u884c\u4e2d",onBack:function(){return u(Q)}}),l.a.createElement(d.a,{style:{padding:"12px 24px 24px 24px"}},l.a.createElement(j.a,{gutter:16},l.a.createElement(N.a,{span:8},l.a.createElement(U.a,{title:"\u4eba\u6578",value:a.game.player.max})),l.a.createElement(N.a,{span:8},l.a.createElement(U.a,{title:"\u6a21\u5f0f",value:a.game.cond})),l.a.createElement(N.a,{span:8},l.a.createElement(U.a,{title:"TP",value:a.game.cond===O?a.game.param.dtp:"\u73a9\u5bb6\u6c7a\u5b9a"})),l.a.createElement(N.a,{span:8,style:{marginTop:32}},l.a.createElement(U.a,{title:"A",value:a.game.param.a})),l.a.createElement(N.a,{span:8,style:{marginTop:32}},l.a.createElement(U.a,{title:"B",value:a.game.param.b})),l.a.createElement(N.a,{span:8,style:{marginTop:32}},l.a.createElement(U.a,{title:"C",value:a.game.param.c})),l.a.createElement(N.a,{span:8,style:{marginTop:32}},l.a.createElement(U.a,{title:"\u56de\u5408",value:a.game.round})),l.a.createElement(N.a,{span:8,style:{marginTop:32}},l.a.createElement(U.a,{title:"\u9023\u7dda\u4eba\u6578",value:a.game.player.connected})),l.a.createElement(N.a,{span:8,style:{marginTop:32}},l.a.createElement(U.a,{title:"\u5b8c\u6210\u4eba\u6578",value:a.game.player.done}))),l.a.createElement(j.a,{gutter:16},l.a.createElement(N.a,{span:12,style:{marginTop:24}},l.a.createElement(v.a,{type:"primary",block:!0,icon:"forward",size:"large",onClick:function(){if(a.game.player.max!==a.game.player.done)return W({title:"\u4ecd\u6709\u73a9\u5bb6\u5c1a\u672a\u5b8c\u6210\u4ea4\u6613",content:"\u78ba\u5b9a\u8981\u7e7c\u7e8c\u55ce\uff1f",onOk:function(){a.socket.emit("newRound")}});a.socket.emit("newRound")}},"\u65b0\u56de\u5408")),l.a.createElement(N.a,{span:12,style:{marginTop:24}},l.a.createElement(v.a,{type:"danger",icon:"delete",block:!0,size:"large",onClick:function(){W({title:"\u5c07\u6e05\u7a7a\u6240\u6709\u73a9\u5bb6\u7684\u6536\u76ca\u8207\u56de\u5408",content:"\u78ba\u5b9a\u8981\u7e7c\u7e8c\u55ce\uff1f",onOk:function(){a.socket.emit("resetProfitRound")}})}},"\u6e05\u7a7a\u6536\u76ca\u56de\u5408")),l.a.createElement(N.a,{span:24,style:{marginTop:16}},l.a.createElement(v.a,{icon:"download",block:!0,size:"large",onClick:function(){return a.socket.emit("download","user",function(e){return M("\u73a9\u5bb6\u8cc7\u8a0a.csv",e)})}},"\u4e0b\u8f09\u73a9\u5bb6\u8cc7\u8a0a.csv")),l.a.createElement(N.a,{span:24,style:{marginTop:16}},l.a.createElement(v.a,{icon:"download",block:!0,size:"large",onClick:function(){return a.socket.emit("download","log",function(e){return M("\u4ea4\u6613\u7d00\u9304.csv",e)})}},"\u4e0b\u8f09\u4ea4\u6613\u7d00\u9304.csv"))))))}),Y=a(141),X=a(477),Z=a(476),$=R.a.Title,ee=R.a.Text,te=p.a.confirm,ae=b.a.create({name:"manufacturer"})(function(e){var t,a=e.form,n=e.tpd,r=a.getFieldDecorator,o=a.validateFields,i=(t={},Object(Y.a)(t,z,"Manufacturer"),Object(Y.a)(t,C,"Retailer"),t);return l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{title:i[n.role],subTitle:"".concat({1:"First",2:"Second",3:"Third",4:"Fourth"}[n.info.phase]," Stage")}),l.a.createElement(d.a,{style:{padding:"12px 24px 24px 24px"}},4===n.info.phase&&l.a.createElement(d.a,{style:{marginBottom:19,textAlign:"center"}},l.a.createElement($,null,"".concat(n.profit[n.profit.length-1]," ED")),l.a.createElement(ee,null,"Profits you earn in"," ",l.a.createElement(ee,{strong:!0},"period ".concat(n.game.round)))),l.a.createElement(X.a,{bordered:!0,size:"middle",style:{marginBottom:36}},l.a.createElement(X.a.Item,{label:"Production Cost"},n.game.param.c),n.info.phase>=2&&l.a.createElement(X.a.Item,{label:"Wholesale Price"},n.info.pm),n.info.phase>=(n.game.cond===O?1:2)&&l.a.createElement(X.a.Item,{label:"Trade Promotion Discount"},n.game.cond===O?n.game.param.dtp:n.info.tp),n.info.phase>=3&&l.a.createElement(X.a.Item,{label:"Trade Promotion Allocation"},n.info.promo),4===n.info.phase&&l.a.createElement(X.a.Item,{label:"Order Quantity"},n.info.qm),4===n.info.phase&&l.a.createElement(X.a.Item,{label:"Retail Price"},n.info.pr),4===n.info.phase&&l.a.createElement(X.a.Item,{label:"Consumer Demands"},n.info.qr)),n.role===z&&1===n.info.phase&&l.a.createElement(b.a,{onSubmit:function(e){e.preventDefault(),o(function(e,t){e||te({title:"Do you wish to set wholesale price to ".concat(t.pm).concat(n.game.cond===S?" and trade promotion discount to "+t.tp:"","?"),onOk:function(){n.socket.emit("setPmTp",{pm:parseInt(t.pm),tp:n.game.cond===S?parseInt(t.tp):parseInt(n.game.param.dtp)})}})})}},l.a.createElement(b.a.Item,{label:"Wholesale Price"},r("pm",{rules:A})(l.a.createElement(h.a,{size:"large"}))),n.game.cond===S&&l.a.createElement(b.a.Item,{label:"Trade Promotion Discount"},r("tp",{rules:A})(l.a.createElement(h.a,{size:"large"}))),l.a.createElement(b.a.Item,null,l.a.createElement(v.a,{size:"large",block:!0,type:"primary",htmlType:"submit"},"Submit"))),n.role===C&&1===n.info.phase&&l.a.createElement(Z.a,{icon:l.a.createElement(k.a,{type:"loading",style:{fontSize:72},spin:!0}),title:"Hold on",subTitle:"Manufacturer is deciding the wholesale price".concat(n.game.cond===S?" and trade promotion discount":"",".")}),n.role===n.info.priority&&2===n.info.phase&&l.a.createElement(l.a.Fragment,null,l.a.createElement($,{level:3,style:{marginBottom:16}},"Please decide trade promotion allocation."),l.a.createElement(v.a,{size:"large",block:!0,type:"primary",style:{marginBottom:12},onClick:function(){te({title:"Do you wish to set trade promotion allocation to off-invoices?",onOk:function(){n.socket.emit("setPromo",D)}})}},"Off-invoices"),l.a.createElement(v.a,{size:"large",block:!0,type:"primary",onClick:function(){te({title:"Do you wish to set trade promotion allocation to scan-backs?",onOk:function(){n.socket.emit("setPromo",F)}})}},"Scan-backs")),n.role!==n.info.priority&&2===n.info.phase&&l.a.createElement(Z.a,{icon:l.a.createElement(k.a,{type:"loading",style:{fontSize:72},spin:!0}),title:"Hold on",subTitle:"".concat(n.info.priority===z?"Manufacturer":"Retailer"," is deciding the trade promotion allocation.")}),n.role===C&&3===n.info.phase&&l.a.createElement(b.a,{onSubmit:function(e){e.preventDefault(),o(function(e,t){e||te({title:"Do you wish to set retail price to ".concat(t.pr," and order quantity to ").concat(t.qm,"?"),onOk:function(){n.socket.emit("setQmPr",{qm:parseInt(t.qm),pr:parseInt(t.pr)})}})})}},l.a.createElement(b.a.Item,{label:"Retail Price"},r("pr",{rules:A})(l.a.createElement(h.a,{size:"large"}))),l.a.createElement(b.a.Item,{label:"Order Quantity"},r("qm",{rules:A})(l.a.createElement(h.a,{size:"large"}))),l.a.createElement(b.a.Item,null,l.a.createElement(v.a,{size:"large",block:!0,type:"primary",htmlType:"submit"},"Submit"))),n.role===z&&3===n.info.phase&&l.a.createElement(Z.a,{icon:l.a.createElement(k.a,{type:"loading",style:{fontSize:72},spin:!0}),title:"Hold on",subTitle:"Retailer is deciding the order quantity and retail price."}),4===n.info.phase&&l.a.createElement(v.a,{size:"large",block:!0,type:"primary",disabled:n.done,onClick:function(){te({title:"You will not be able to see the information after this round.",onOk:function(){n.socket.emit("setDone")}})}},n.done?"Waiting for other participants":"I have seen the information above")))}),ne=(a(464),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={socket:null,game:{player:{max:0,connected:0,done:0},cond:null,param:{dtp:null,a:null,b:null,c:null},round:null},role:null,dual:null,done:!1,info:{priority:null,phase:null,promo:null,qr:null,pm:null,tp:null,qm:null,pr:null},profit:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=E()("https://tpd-exp.herokuapp.com");t.on("connect",function(){e.setState({socket:t}),t.on("disconnect",function(e){t.close(),p.a.info({title:"Server Disconnected",content:"All transactions are still remained. Please click OK and login again.",onOk:function(){window.location.reload()}})}),t.on("updated",function(t){var a=t.role,n=t.dual,l=t.info,r=t.profit,o=t.done,i=t.game;"undefined"!==typeof i&&e.setState({game:i}),"undefined"!==typeof a&&e.setState({role:a}),"undefined"!==typeof n&&e.setState({dual:n}),"undefined"!==typeof l&&e.setState({info:l}),"undefined"!==typeof r&&e.setState({profit:r}),"undefined"!==typeof o&&e.setState({done:o})})})}},{key:"render",value:function(){return l.a.createElement(d.a,{style:{minHeight:"100vh"}},l.a.createElement("div",{className:"container"},!this.state.role&&l.a.createElement(I,{tpd:this.state}),this.state.role===P&&l.a.createElement(_,{tpd:this.state}),(this.state.role===z||this.state.role===C)&&l.a.createElement(ae,{tpd:this.state})))}}]),t}(n.Component));o.a.render(l.a.createElement(ne,null),document.querySelector("#root"))}},[[209,1,2]]]);
//# sourceMappingURL=main.1603b5ac.chunk.js.map