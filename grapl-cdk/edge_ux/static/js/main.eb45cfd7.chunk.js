(this["webpackJsonpgrapl-fe"]=this["webpackJsonpgrapl-fe"]||[]).push([[0],{100:function(e,t,n){},142:function(e,t,n){e.exports=n(229)},147:function(e,t,n){},229:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),l=n.n(o),c=(n(147),n(124)),i=n(273),s=n(20),u=n(106),f=(n(100),n(11)),d=n.n(f),m=n(21),p=n(59),h=function(){var e=Object(m.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://localhost:8900/","checkLogin"),{method:"get",credentials:"include"});case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return","True"===n.success);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(e){return r.a.createElement("div",{className:"backgroundImage"},r.a.createElement("div",{className:"grapl"},"Grapl"),r.a.createElement("div",{className:"formContainer"},r.a.createElement(p.c,{initialValues:{userName:"",password:""},onSubmit:function(){var t=Object(m.a)(d.a.mark((function t(n){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(n.userName,n.password);case 2:a=t.sent,x(n.userName,a)?(e.loginSuccess(),console.log("Logged in")):console.warn("Login failed!");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},r.a.createElement(p.b,null,r.a.createElement(p.a,{name:"userName",type:"text",placeholder:"Username"})," ",r.a.createElement("br",null),r.a.createElement(p.a,{name:"password",type:"password",placeholder:"Password"})," ",r.a.createElement("br",null),r.a.createElement("button",{className:"submitBtn",type:"submit"},"Submit")))))};function g(e){return y.apply(this,arguments)}function y(){return(y=Object(m.a)(d.a.mark((function e(t){var n,a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(new TextEncoder).encode(t),e.next=3,crypto.subtle.digest("SHA-256",n);case 3:return a=e.sent,r=Array.from(new Uint8Array(a)),e.abrupt("return",r.map((function(e){return("00"+e.toString(16)).slice(-2)})).join(""));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=function(){var e=Object(m.a)(d.a.mark((function e(t,n){var a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"f1dafbdcab924862a198deaa5b6bae29aef7f2a442f841da975f1c515529d254",e.next=3,g(n+"f1dafbdcab924862a198deaa5b6bae29aef7f2a442f841da975f1c515529d254"+t);case 3:a=e.sent,r=0;case 5:if(!(r<5e3)){e.next=12;break}return e.next=8,g(a);case 8:a=e.sent;case 9:r++,e.next=5;break;case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),x=function(){var e=Object(m.a)(d.a.mark((function e(t,n){var a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("http://localhost:8900/","login"),{method:"post",body:JSON.stringify({username:t,password:n}),headers:{"Content-Type":"application/json"},credentials:"include"});case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,e.abrupt("return","True"===r.success);case 10:return e.prev=10,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}(),E=n(7),w=n(26),k=n(37),j=n(125),O=n(78),S=function(e){var t=0;e+="x";for(var n=parseInt(65745979961613.07),a=0;a<e.length;a++)t>n&&(t=parseInt(t/137)),t=131*t+e.charCodeAt(a);return t},N=function(e,t,n){var a=n<.5?n*(1+t):n+t-n*t,r=2*n-a;return[(e/=360)+1/3,e,e-1/3].map((function(e){return e<0&&e++,e>1&&e--,e=e<1/6?r+6*(a-r)*e:e<.5?a:e<2/3?r+6*(a-r)*(2/3-e):r,Math.round(255*e)}))},L=function(e){return"[object Array]"===Object.prototype.toString.call(e)},_=function(e){var t=[(e=e||{}).lightness,e.saturation].map((function(e){return L(e=e||[.35,.5,.65])?e.concat():[e]}));this.L=t[0],this.S=t[1],"number"===typeof e.hue&&(e.hue={min:e.hue,max:e.hue}),"object"!==typeof e.hue||L(e.hue)||(e.hue=[e.hue]),"undefined"===typeof e.hue&&(e.hue=[]),this.hueRanges=e.hue.map((function(e){return{min:"undefined"===typeof e.min?0:e.min,max:"undefined"===typeof e.max?360:e.max}})),this.hash=e.hash||S};_.prototype.hsl=function(e){var t,n,a=this.hash(e);if(this.hueRanges.length){var r=this.hueRanges[a%this.hueRanges.length];t=a/this.hueRanges.length%727*(r.max-r.min)/727+r.min}else t=a%359;return a=parseInt(a/360),n=this.S[a%this.S.length],a=parseInt(a/this.S.length),[t,n,this.L[a%this.L.length]]},_.prototype.rgb=function(e){var t=this.hsl(e);return N.apply(this,t)};var P=function(){var e=Object(m.a)(d.a.mark((function e(t){var n,a,r,o,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},console.log("Getting graph"),e.next=4,fetch("".concat("http://localhost:8900/","update"),{method:"post",body:JSON.stringify({lens:t,uid_hashes:n}),headers:{"Content-Type":"application/json"},credentials:"include"});case 4:return a=e.sent,e.next=7,a.json();case 7:return r=e.sent,o=r.success.updated_nodes,l=r.success.removed_nodes,e.abrupt("return",[o,l]);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(e){return void 0!==e.process_id?"Process":void 0!==e.file_path?"File":void 0!==e.external_ip?"ExternalIp":void 0!==e.port?"Connect":void 0!==e.scope||void 0!==e.lens?"Lens":e.node_type?Array.is_array(e.node_type)?e.node_type[0]:e.node_type:(console.warn("Unable to find type for node ",e),"Unknown")};function C(e,t){return Math.floor(Math.random()*(t-e+1)+e)}var M=function(e,t){return"Process"===e?t.process_name||t.process_id:"File"===e?t.file_path:"ExternalIp"===e?t.external_ip:"Connect"===e?t.port:"Lens"===e?t.lens:e||""},A=function(e){var t=function(e){var t=new Map,n=new Map,a=new Map,r=!0,o=!1,l=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done);r=!0){var s=c.value,u=s.node.node_key,f=s.node.uid;s.node.analyzer_name||(a.set(u,f),console.log(u),t.set(f,s.node))}}catch(z){o=!0,l=z}finally{try{r||null==i.return||i.return()}finally{if(o)throw l}}var d=!0,m=!1,p=void 0;try{for(var h,v=e[Symbol.iterator]();!(d=(h=v.next()).done);d=!0){var g=h.value,y=(g.node.node_key,g.node.uid),b=!0,x=!1,E=void 0;try{for(var w,k=g.edges[Symbol.iterator]();!(b=(w=k.next()).done);b=!0){var j=w.value,O=n.get(y),S=a.get(j.to),N=j.edge_name;if("risks"!==N)void 0===O?(O=new Map).set(y+ +S,[y,N,S]):O.set(y+N+S,[y,N,S]),n.set(y,O);else{console.log("Handling risks");var L=t.get(a.get(j.from)),_=!0,P=!1,F=void 0;try{for(var C,M=g.node.risks[Symbol.iterator]();!(_=(C=M.next()).done);_=!0){var A=C.value;console.log("risk: ",A),L.risk=(A.risk_score||0)+(L.risk||0),L.analyzers?-1===L.analyzers.indexOf(A.analyzer_name)&&A.analyzer_name&&(L.analyzers+=", "+A.analyzer_name):L.analyzers=A.analyzer_name}}catch(z){P=!0,F=z}finally{try{_||null==M.return||M.return()}finally{if(P)throw F}}}}}catch(z){x=!0,E=z}finally{try{b||null==k.return||k.return()}finally{if(x)throw E}}}}catch(z){m=!0,p=z}finally{try{d||null==v.return||v.return()}finally{if(m)throw p}}return console.log(n),{nodes:t,links:n}}(e),n=!0,a=!1,r=void 0;try{for(var o,l=t.nodes.values()[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var c=o.value,i=t.links.get(c.uid)||new Map,s=!0,u=!1,f=void 0;try{for(var d,m=i.values()[Symbol.iterator]();!(s=(d=m.next()).done);s=!0){var p=d.value;if("risks"===p[1]){var h=t.nodes.get(p[2]);if(!h.risk_score)continue;void 0===c.risk?(c.risk=h.risk_score||0,c.analyzers=h.analyzer_name):(c.risk+=h.risk_score,c.analyzers&&-1===c.analyzers.indexOf(h.analyzer_name)&&(c.analyzers+=", "+h.analyzer_name))}}}catch(J){u=!0,f=J}finally{try{s||null==m.return||m.return()}finally{if(u)throw f}}}}catch(J){a=!0,r=J}finally{try{n||null==l.return||l.return()}finally{if(a)throw r}}var v=[],g=!0,y=!1,b=void 0;try{for(var x,E=t.nodes.values()[Symbol.iterator]();!(g=(x=E.next()).done);g=!0){var k=x.value;if(!k.risk_score&&!k.analyzer_name){var j=F(k);if("Unknown"!==j){var O=M(j,k);v.push(Object(w.a)({name:k.uid,id:k.uid},k,{nodeType:j,nodeLabel:O,x:200+C(1,50),y:150+C(1,50)}))}}}}catch(J){y=!0,b=J}finally{try{g||null==E.return||E.return()}finally{if(y)throw b}}var S=[],N=!0,L=!1,_=void 0;try{for(var P,A=t.links[Symbol.iterator]();!(N=(P=A.next()).done);N=!0){var z=P.value,I=z[0],D=t.nodes.get(I);if(!D||!D.lens){var T=z[1],R=!0,B=!1,H=void 0;try{for(var U,W=T.values()[Symbol.iterator]();!(R=(U=W.next()).done);R=!0){var G=U.value;"risks"!==G[1]&&("~scope"!==G[1]&&("~"===G[1][0]?S.push({source:G[2],label:G[1].substr(1),target:G[0]}):S.push({source:G[0],label:G[1],target:G[2]})))}}catch(J){B=!0,H=J}finally{try{R||null==W.return||W.return()}finally{if(B)throw H}}}}}catch(J){L=!0,_=J}finally{try{N||null==A.return||A.return()}finally{if(L)throw _}}return{nodes:v,links:S}},z=function(e){return"hsl(".concat(40*(100-e)/100,", 100%, 50%)")},I=function(e,t){var n=e;"object"===typeof e&&(n=e.risk);var a=t.map((function(e){return e||0})).sort((function(e,t){return e-t}));if(void 0===n||0===n||0===a.length)return 0;var r=0,o=!0,l=!1,c=void 0;try{for(var i,s=a[Symbol.iterator]();!(o=(i=s.next()).done);o=!0){n>=i.value&&(r+=1)}}catch(u){l=!0,c=u}finally{try{o||null==s.return||s.return()}finally{if(l)throw c}}return Math.floor(r/a.length*100)},D=function(e,t){var n=!0,a=!1,r=void 0;try{for(var o,l=(t||[])[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var c=o.value;if(c.id===e)return c}}catch(i){a=!0,r=i}finally{try{n||null==l.return||l.return()}finally{if(a)throw r}}return null},T=function(e,t){return"Process"===e.nodeType?[31,185,128]:"File"===e.nodeType?[177,93,255]:t.rgb(e.nodeType)},R=function(e,t){var n=function(e,t){var n=D(e.source,t.nodes)||D(e.source.name,t.nodes),a=D(e.target,t.nodes)||D(e.target.name,t.nodes);null===n&&(n={risk:0}),null===a&&(a={risk:0});var r=n.risk||0,o=a.risk||0;return Math.round((r+o)/2)}(e,t),a=Object(k.a)(t.nodes).map((function(e){return e.risk}));return I(n,a)},B=function(e,t){var n=R(e,t);return 0===n?"white":z(n)},H=function(e,t){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(Array.isArray(e[n])?e[n].length>0&&void 0===e[n][0].uid&&t(n):t(n))},U=function(e,t){var n=!1;return H(t,(function(a){Object.prototype.hasOwnProperty.call(e,a)||(n=!0,e[a]=t[a])})),n},W=function(e,t){if(!t.nodes&&!updates.links)return null;var n={nodes:[],links:[]},a=!1,r=new Map,o=new Map,l=!0,c=!1,i=void 0;try{for(var s,u=e.nodes[Symbol.iterator]();!(l=(s=u.next()).done);l=!0){var f=s.value;r.set(f.uid,f)}}catch(z){c=!0,i=z}finally{try{l||null==u.return||u.return()}finally{if(c)throw i}}var d=!0,m=!1,p=void 0;try{for(var h,v=t.nodes[Symbol.iterator]();!(d=(h=v.next()).done);d=!0){var g=h.value,y=r.get(g.uid);y?U(y,g)&&(a=!0):(r.set(g.uid,g),a=!0)}}catch(z){m=!0,p=z}finally{try{d||null==v.return||v.return()}finally{if(m)throw p}}var b=!0,x=!1,E=void 0;try{for(var w,k=e.links[Symbol.iterator]();!(b=(w=k.next()).done);b=!0){var j=w.value;if(j){var O=j.source.uid||j.source,S=j.target.uid||j.target;o.set(O+j.label+S,j)}}}catch(z){x=!0,E=z}finally{try{b||null==k.return||k.return()}finally{if(x)throw E}}var N=!0,L=!1,_=void 0;try{for(var P,F=t.links[Symbol.iterator]();!(N=(P=F.next()).done);N=!0){var C=P.value,M=C.source.id||C.source,A=C.target.id||C.target;o.get(M+C.label+A)||(o.set(C.source+C.label+C.target,C),a=!0)}}catch(z){L=!0,_=z}finally{try{N||null==F.return||F.return()}finally{if(L)throw _}}return n.nodes=Array.from(r.values()),n.links=Array.from(o.values()),a?n:null},G=function(){var e=Object(m.a)(d.a.mark((function e(t,n,a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return console.log("Retrieving graph from "+t),e.next=5,P(t).then(function(){var e=Object(m.a)(d.a.mark((function e(r){var o,l,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=Object(s.a)(r,2),l=o[0],o[1],console.log("updated_nodes",l),e.next=4,A(l);case 4:c=e.sent,null!==(i=W(n.graphData,c))&&(n.curLensName===t?(console.log("update for ",n.curLensName,t),a(Object(w.a)({},n,{curLensName:t,graphData:i}))):(console.log("update, switch, for ",n.curLensName,t),a(Object(w.a)({},n,{curLensName:t,graphData:c}))));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.error("Failed to retrieveGraph ",e)}));case 5:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),J=function(e){var t=e.lensName,n=e.setCurNode,o=r.a.useState({graphData:{nodes:[],links:[]},curLensName:t}),l=Object(s.a)(o,2),c=l[0],i=l[1],u=Object(a.useRef)(null);Object(a.useEffect)((function(){console.log("useEffect - setting forceRef state"),u.current.d3Force("link",O.b()),u.current.d3Force("collide",O.a(22)),u.current.d3Force("charge",O.c()),u.current.d3Force("box",(function(){c.graphData.nodes.forEach((function(e){var t=e.x||0,n=e.y||0;Math.abs(t)>1e3&&(e.vx*=-1),Math.abs(n)>1e3&&(e.vy*=-1)}))}))}),[c]),Object(a.useEffect)((function(){G(t,c,i);var e=setInterval(Object(m.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return e.next=3,G(t,c,i);case 3:case"end":return e.stop()}}),e)}))),1e3);return function(){return clearInterval(e)}}),[t,c]),console.log("GraphDisplay: ",t);var f=c.graphData,p=new _({});return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{graphData:f,nodeLabel:function(e){return e.nodeLabel},enableNodeDrag:!0,linkDirectionalParticles:1,linkDirectionalParticleWidth:function(e){return function(e,t){var n=R(e,t);return n>=75?5:n>=50?4:n>=25?3:2}(e,f)},linkDirectionalParticleColor:function(e){return B(e,f)},linkDirectionalParticleSpeed:.005,onNodeClick:function(e,t){console.log("clicked",e.nodeLabel),n(e)},linkDirectionalArrowLength:8,linkWidth:4,linkDirectionalArrowRelPos:function(e){return function(e,t){var n=D(e.target,t.nodes)||D(e.target.name,t.nodes);if(null===n||0===n.risk)return 1;var a=Object(k.a)(t.nodes).map((function(e){return e.risk})),r=I(n.risk,a);return 0===r?1:r>=75?.95:r>=50?.9:r>=25?.85:1}(e,f)},linkCanvasObjectMode:function(){return"after"},linkCanvasObject:function(e,t){var n=e.source,a=e.target;if(e.color=B(e,f),"object"===typeof n&&"object"===typeof a){var r=Object.assign.apply(Object,Object(k.a)(["x","y"].map((function(e){return Object(E.a)({},e,n[e]+(a[e]-n[e])/2)})))),o={x:a.x-n.x,y:a.y-n.y},l=Math.sqrt(Math.pow(o.x,2)+Math.pow(o.y,2))-96,c=Math.atan2(o.y,o.x);c>Math.PI/2&&(c=-(Math.PI-c)),c<-Math.PI/2&&(c=-(-Math.PI-c));var i=function(e){return"children"===e?"executed":e}(e.label);t.font="50px Arial";var s=Math.min(8,l/t.measureText(i).width);t.font="".concat(s+5,"px Arial");var u=t.measureText(i).width,d=[u+=Math.round(.25*u),s].map((function(e){return e+.2*s}));t.save(),t.translate(r.x,r.y),t.rotate(c),t.fillStyle="rgb(115,222,255,1)",t.fillRect.apply(t,[-d[0]/2,-d[1]/2].concat(Object(k.a)(d))),t.textAlign="center",t.textBaseline="middle",t.fillStyle="white",t.fillText(i,.75,3),t.restore()}},nodeCanvasObject:function(e,t,n){var a=function(e,t){var n=Object(k.a)(t.nodes).map((function(e){return e.risk})),a=I(e.risk,n);return a>=75?6:a>=25?5:4}(e,f);t.save(),t.beginPath(),t.arc(e.x,e.y,1.3*a,0,2*Math.PI,!1),t.fillStyle=function(e,t,n){var a=Object(k.a)(t.nodes).map((function(e){return e.risk})),r=I(e.risk,a);if(0===r){var o=T(e,n);return"rgba(".concat(o[0],", ").concat(o[1],", ").concat(o[2],", 1)")}return z(r)}(e,f,p),t.fill(),t.restore(),t.save(),t.beginPath(),t.arc(e.x,e.y,1.2*a,0,2*Math.PI,!1);var r=T(e,p);t.fillStyle="rgba(".concat(r[0],", ").concat(r[1],", ").concat(r[2],", 1)"),t.fill(),t.restore();var o=e.nodeLabel,l=15/n;t.font="".concat(l,"px Arial");var c=[t.measureText(o).width,l].map((function(e){return e+.2*l}));t.fillStyle="rgba(48, 48, 48, 0.8)",t.fillRect.apply(t,[e.x-c[0]/2,e.y-c[1]/2].concat(Object(k.a)(c))),t.textAlign="center",t.textBaseline="middle",t.fillStyle="rgba(0, 0, 0, 0.8)",t.fillStyle="white",t.fillText(o,e.x,e.y)},ref:u}))},V=n(258),q=n(265),X=n(266),Y=n(263),$=n(264),K=n(260),Q=n(262),Z=Object(V.a)({root:{fontSize:"1em"},table:{minWidth:450},tableHeader:{fontSize:"18px",color:"#EAFDFF"}});var ee=function(e){var t=e.node,n=Z(),a=new Set(["id","dgraph.type","__indexColor","risks","uid","scope","name","nodeType","nodeLabel","x","y","index","vy","vx","fx","fy"]);me(t,(function(e,t){a.add(e)}));var o={};return H(t,(function(e){var n=t[e];a.has(e)||n&&(e.includes("_time")?o[e]=new Date(n).toLocaleString():o[e]=n)})),r.a.createElement($.a,null,r.a.createElement(q.a,{className:n.table},function(e,t){return e?r.a.createElement(K.a,null,r.a.createElement(Q.a,null,r.a.createElement(Y.a,{align:"left",className:t.tableHeader},r.a.createElement("b",null," PROPERTY ")),r.a.createElement(Y.a,{align:"left",className:t.tableHeader},r.a.createElement("b",null," VALUE ")))):r.a.createElement("div",null)}(t,n),r.a.createElement(X.a,null,Object.entries(o).map((function(e){var t=Object(s.a)(e,2),n=t[0],a=t[1];return r.a.createElement(Q.a,null,r.a.createElement(Y.a,{align:"left"},r.a.createElement("b",null,n)),r.a.createElement(Y.a,{align:"left"},a))})))))||"no no"},te=n(267),ne=n(92),ae=n.n(ne),re=n(121),oe=n.n(re),le=n(122),ce=n.n(le),ie=n(268),se=Object(V.a)({root:{fontSize:"1rem"},button:{width:".005%",color:"white",backgroundColor:"#424242"},title:{fontSize:"25px",color:"#ffffff"},icon:{color:"#42C6FF",margin:"15px 0 0 10px"},expand:{color:"#42C6FF",margin:"0px"},header:{display:"flex"},table:{minWidth:450}});function ue(e){se();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.a,{key:e.lens},r.a.createElement(Y.a,{component:"th",scope:"row"},r.a.createElement(te.a,{onClick:function(){e.setLens(e.lens)}},e.lens+"\t\t"+e.score))))}function fe(e){var t=e.setLens,n=Object(a.useState)({toggled:!0,lenses:[]}),o=Object(s.a)(n,2),l=o[0],c=o[1],i=se();return Object(a.useEffect)((function(){var e=setInterval((function(){console.log("Fetching lenses"),de().then((function(e){e.lenses&&e.lenses!==l.lenses&&c(Object(w.a)({},l,{lenses:e.lenses||[]}))}))}),1e3);return function(){return clearInterval(e)}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:i.header},r.a.createElement("b",{className:i.title},r.a.createElement(oe.a,{className:i.icon}),"LENSES"),r.a.createElement(te.a,{className:i.button,onClick:function(){c(Object(w.a)({},l,{toggled:!l.toggled}))}},r.a.createElement(ae.a,{className:i.expand}))),r.a.createElement("div",{className:"lensToggle"},l.toggled&&l.lenses&&l.lenses.map((function(e){var n=e;return r.a.createElement($.a,null,r.a.createElement(q.a,{className:i.table,"aria-label":"lens table"},r.a.createElement(X.a,null,r.a.createElement(ue,{key:new Number(n.uid),uid:n.uid,lens:n.lens,score:n.score,setLens:t}))))}))),r.a.createElement(ie.a,null))}var de=function(){var e=Object(m.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://localhost:8900/","getLenses"),{method:"post",body:JSON.stringify({prefix:""}),headers:{"Content-Type":"application/json"},credentials:"include"});case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.success);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),me=function(e,t){for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&Array.isArray(e[n])){var a=!0,r=!1,o=void 0;try{for(var l,c=e[n][Symbol.iterator]();!(a=(l=c.next()).done);a=!0){var i=l.value;void 0!==i.uid&&t(n,i)}}catch(s){r=!0,o=s}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}}},pe=function(e){var t=e.node;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,{node:t}))};function he(e){var t=e.curNode,n=Object(a.useState)(!0),o=Object(s.a)(n,2),l=o[0],c=o[1],i=se();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{className:i.header},r.a.createElement("b",{className:i.title},r.a.createElement(ce.a,{className:i.icon})," NODE"),r.a.createElement(te.a,{className:i.button,onClick:function(){c((function(e){return!e}))}},r.a.createElement(ae.a,{className:i.expand}))),r.a.createElement("div",{className:"nodeToggle"},l&&r.a.createElement(r.a.Fragment,null,r.a.createElement(pe,{node:t})))))}function ve(e){var t=e.setLens,n=e.curNode;return r.a.createElement(r.a.Fragment,null,r.a.createElement(fe,{setLens:t}),r.a.createElement(he,{curNode:n}))}var ge=n(5),ye=n(276),be=n(274),xe=n(269),Ee=n(270),we=n(272),ke=n(271),je=n(123),Oe=n.n(je),Se=Object(V.a)((function(e){return Object(ye.a)({root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(500,"px)"),marginLeft:500,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2),color:"#42C6FF"},hide:{display:"none"},drawer:{width:500,flexShrink:0},drawerPaper:{width:500},drawerHeader:Object(w.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-500},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},lensName:{color:"#EAFDFF",fontSize:"2rem",margin:"10px 15px 0px 0px"},header:{fontSize:"35px"},close:{color:"#42C6FF"}})}));function Ne(e){var t=e.setLens,n=e.curLens,a=e.curNode,o=Se(),l=r.a.useState(!0),c=Object(s.a)(l,2),i=c[0],u=c[1];return r.a.createElement("div",{className:o.root},r.a.createElement(xe.a,{position:"fixed",className:Object(ge.a)(o.appBar,Object(E.a)({},o.appBarShift,i))},r.a.createElement(Ee.a,null,r.a.createElement(ke.a,{color:"inherit","aria-label":"open drawer",onClick:function(){u(!0)},edge:"start",className:Object(ge.a)(o.menuButton,i&&o.hide)},"\u2630"),r.a.createElement(we.a,{variant:"h5",noWrap:!0},r.a.createElement("b",{className:o.header}," GRAPL")))),r.a.createElement(be.a,{className:o.drawer,variant:"persistent",anchor:"left",open:i,classes:{paper:o.drawerPaper}},r.a.createElement("div",{className:o.drawerHeader},r.a.createElement(te.a,{onClick:function(){u(!1)}},r.a.createElement(Oe.a,{className:o.close}))),r.a.createElement(ie.a,null),r.a.createElement(ve,{setLens:t,curNode:a})),r.a.createElement("main",{className:Object(ge.a)(o.content,Object(E.a)({},o.contentShift,i))},r.a.createElement("div",{className:o.drawerHeader}),r.a.createElement("h3",{className:o.lensName},n||""),r.a.createElement(we.a,{paragraph:!0})))}var Le=function(){var e=r.a.useState({curLens:"",curNode:null}),t=Object(s.a)(e,2),n=t[0],a=t[1];return console.log("EngagementUX: curLens, ",n.curLens),r.a.createElement(r.a.Fragment,null,r.a.createElement(Ne,{setLens:function(e){return a(Object(w.a)({},n,{curLens:e}))},curLens:n.curLens,curNode:n.curNode}),r.a.createElement(J,{lensName:n.curLens,setCurNode:function(e){a(Object(w.a)({},n,{curNode:e}))}}))};console.log("App loading");var _e=function(e,t,n){t({curPage:n}),localStorage.setItem("grapl_curPage",n)},Pe=function(e){Object(u.a)(e);var t=r.a.useState({curPage:localStorage.getItem("grapl_curPage")||"login",lastCheckLoginCheck:Date.now()}),n=Object(s.a)(t,2),o=n[0],l=n[1];return Object(a.useEffect)((function(){"login"!==o.curPage&&Date.now()-o.lastCheckLoginCheck>1e3&&h().then((function(e){console.log("Not logged in, redirecting."),e||"login"===o.curPage||_e(0,l,"login")}))})),"login"===o.curPage?(console.log("routing to engagement_ux page"),r.a.createElement(v,{loginSuccess:function(){return _e(0,l,"engagement_ux")}})):"engagement_ux"===o.curPage?(console.log("routing to login page"),r.a.createElement(Le,null)):(console.warn("Invalid Page State"),r.a.createElement("div",null,"Invalid Page State"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Fe=Object(c.a)({palette:{type:"dark",primary:{main:"#373740"}}}),Ce=document.getElementById("root");l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{theme:Fe},r.a.createElement((function(){return console.log("App loaded"),r.a.createElement(r.a.Fragment,null,r.a.createElement(Pe,null))}),null),",")),Ce),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[142,1,2]]]);
//# sourceMappingURL=main.eb45cfd7.chunk.js.map