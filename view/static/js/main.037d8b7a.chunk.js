(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(45)},22:function(e,t,n){},24:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(10),c=n.n(r),s=(n(22),n(11)),i=n(12),l=n(15),u=n(13),h=n(16),d=n(2),m=(n(24),n(14)),k=n.n(m),p=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={success:"",token:"",error:""},e.handleClick=e.handleClick.bind(Object(d.a)(Object(d.a)(e))),e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(){var e=this;k.a.post("http://classsurvey.herokuapp.com/api/login",{username:"thanhld",password:"12345678"}).then(function(t){return e.setState({success:""+t.data.success,token:t.data.token,error:t.data.error})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"button__container"},o.a.createElement("button",{className:"button",onClick:this.handleClick},"submid"),o.a.createElement("textarea",null,"username: thanhld password :12345678 "),o.a.createElement("p",null,"success : ",this.state.success),o.a.createElement("p",null,"token : ",this.state.token),o.a.createElement("p",null,"error : ",this.state.error))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.037d8b7a.chunk.js.map