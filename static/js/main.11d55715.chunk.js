(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{63:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),c=n(10),s=n.n(c),a=(n(63),n(14)),r=n(95),u=n(113),l=n(109),j=n(104),b=n(97),m=n(106),O=n(112),d=n(110),f=n(45),p=n(101),x=n(102),g=n(103),h=n(99),v=n(100),M=n(42),y=n(4),S=Object(r.a)((function(e){return Object(u.a)({progressBottom:{color:e.palette.grey[200]},progressTop:{color:"#aaaaaa",position:"absolute",left:0},in_circle:{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"}})})),T=function(e){var t=Object(o.useState)(!0),n=Object(a.a)(t,2),c=n[0],s=n[1],r=Object(o.useState)(!0),u=Object(a.a)(r,2),l=u[0],j=u[1],m=Object(o.useState)(!1),d=Object(a.a)(m,2),f=d[0],T=d[1],C=Object(o.useState)(0),N=Object(a.a)(C,2),k=N[0],B=N[1],I=Object(o.useState)(e.pomodoroTime),w=Object(a.a)(I,2),V=w[0],z=w[1],U=Object(o.useState)(60*V+k),F=Object(a.a)(U,2),L=F[0],A=F[1],R=Object(o.useState)(!1),E=Object(a.a)(R,2),P=E[0],J=E[1];Object(o.useEffect)((function(){if(P||e.onMusicChange(c?e.pomodoroMusic:e.breakTimeMusic),!f){var t=c?e.pomodoroTime:e.breakTime;B(0),z(t),A(60*t)}e.usrMusic.volume=e.usrVolume/100}),[e.usrVolume,e.pomodoroMusic,e.breakTimeMusic,c,P]),Object(M.a)((function(){e.usrMusic.pause(),e.usrMusic.currentTime=0,J(!P),e.onMusicChange(c?e.pomodoroMusic:e.breakTimeMusic)}),P?1e4:null),Object(M.a)((function(){k<=0?0===V?(c?(z(e.breakTime),A(60*e.breakTime)):(z(e.pomodoroTime),A(60*e.pomodoroTime)),J(!P),e.usrMusic.volume=e.usrVolume/100,e.usrMusic.play(),s(!c),B(0)):(z((function(e){return e-1})),B(59)):B((function(e){return e-1}))}),f?1e3:null);var _=S();return Object(y.jsxs)(i.a.Fragment,{children:[Object(y.jsx)(b.a,{container:!0,alignItems:"center",justify:"center",style:{marginBottom:"20px"},children:Object(y.jsxs)(O.a,{position:"relative",display:"inline-flex",children:[Object(y.jsx)(h.a,{size:"50vmin",variant:"determinate",value:100,className:_.progressBottom}),Object(y.jsx)(h.a,{size:"50vmin",variant:"determinate",value:100*(1-(60*V+k)/L),className:_.progressTop}),Object(y.jsx)(O.a,{className:_.in_circle,children:Object(y.jsxs)(v.a,{component:"div",color:"textSecondary",children:[Object(y.jsx)(v.a,{style:{fontSize:"5vmin",color:"#eeeeee"},children:c?"\u4f5c\u696d\u4e2d":"\u4f11\u61a9\u4e2d"}),Object(y.jsx)(b.a,{container:!0,justify:"center",className:"timer",children:Object(y.jsxs)(v.a,{style:{fontSize:"5vmin",color:"#eeeeee"},children:[V,":",0===Math.floor(k/10)?"0"+k:k]})})]})})]})}),Object(y.jsxs)(b.a,{container:!0,alignItems:"center",justify:"center",children:[Object(y.jsx)(p.a,{onClick:function(){T(!0),l&&A(60*V+k)},style:{color:"#eeeeee",fontSize:"20vmin",display:f?"none":""}}),Object(y.jsx)(x.a,{onClick:function(){T(!1),j(!1)},style:{color:"#eeeeee",fontSize:"20vmin",display:f?"":"none"}}),Object(y.jsx)(g.a,{onClick:function(){T(!1),j(!0),z(e.pomodoroTime),B(0),s(!0),A(60*e.pomodoroTime)},style:{color:"#eeeeee",fontSize:"20vmin"}})]})]})},C=n(105),N=function(e){return Object(y.jsxs)(j.a,{component:"label",children:[Object(y.jsx)("input",{accept:"audio/*",id:"pomodoro-music",type:"file",style:{display:"none"},onChange:function(t){var n=null!==t.target.files?t.target.files[0]:null;null!==n&&(-1!==n.type.indexOf("audio")?e.onMusicChange(n):alert("\u30aa\u30fc\u30c7\u30a3\u30aa\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u3093\u3067\u304f\u3060\u3055\u3044"))}}),Object(y.jsx)(C.a,{})]})},k=n(111),B=Object(r.a)((function(e){return Object(u.a)({root:{"& > *":{fontSize:"20px",marginTop:"10px",marginBottom:"10px"}}})})),I=function(e){var t=B();return Object(y.jsx)(k.a,{id:"outlined-number",label:e.label,type:"number",InputLabelProps:{shrink:!0},variant:"outlined",value:e.time,onChange:function(t){var n=t.target.value;n?Number(n)<=1?e.setTime(1):e.setTime(Number(n)):e.setTime(Number(NaN))},className:t.root})},w=n(114),V=n(107),z=n(108),U=function(e){return Object(o.useEffect)((function(){(0===e.volume&&!e.isMute||0!==e.volume&&e.isMute)&&e.setIsMute(!e.isMute)}),[e,e.isMute,e.volume]),Object(y.jsxs)(i.a.Fragment,{children:[Object(y.jsx)(v.a,{id:"input-slider",gutterBottom:!0,children:"Volume"}),Object(y.jsxs)(b.a,{container:!0,spacing:2,alignItems:"center",children:[Object(y.jsx)(m.a,{onClick:function(t){e.setVolBeforeMute(e.volume),e.setUsrVolume(0),e.setIsMute(!e.isMute)},style:{display:e.isMute?"none":""},children:Object(y.jsx)(V.a,{})}),Object(y.jsx)(m.a,{onClick:function(t){e.setUsrVolume(e.volBeforeMute),e.setIsMute(!e.isMute)},style:{display:e.isMute?"":"none"},children:Object(y.jsx)(z.a,{})}),Object(y.jsx)(b.a,{item:!0,xs:!0,children:Object(y.jsx)(w.a,{value:e.volume,onChange:function(t,n){e.setUsrVolume(n)},"aria-labelledby":"continuous-slider"})})]})]})},F=Object(r.a)((function(e){return Object(u.a)({settingBtn:{fontSize:"10vmin"},fadeBox:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"#000",opacity:.5,zIndex:1}})})),L=function(){var e=Object(o.useState)(25),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(o.useState)(5),r=Object(a.a)(s,2),u=r[0],p=r[1],x=Object(o.useState)(!1),g=Object(a.a)(x,2),h=g[0],v=g[1],M="./alarmBreak.mp3",S=Object(o.useState)(new Audio(M)),C=Object(a.a)(S,2),k=C[0],B=C[1],w=Object(o.useState)(new Audio(M)),V=Object(a.a)(w,2),z=V[0],L=V[1],A=Object(o.useState)(new Audio(M)),R=Object(a.a)(A,2),E=R[0],P=R[1],J=Object(o.useState)(100),_=Object(a.a)(J,2),D=_[0],K=_[1],q=Object(o.useState)(100),G=Object(a.a)(q,2),H=G[0],Q=G[1],W=Object(o.useState)(!1),X=Object(a.a)(W,2),Y=X[0],Z=X[1],$=F();return Object(y.jsxs)(i.a.Fragment,{children:[Object(y.jsxs)(l.a,{className:"root",children:[Object(y.jsx)(f.a,{trigger:Object(y.jsx)(j.a,{style:{color:"#eeeeee",position:"relative",top:0,left:"80%"},children:Object(y.jsx)(d.a,{className:$.settingBtn})}),modal:!0,onOpen:function(){v(!0)},onClose:function(){v(!1),isNaN(n)?c(1):isNaN(u)&&p(1)},children:function(e){return Object(y.jsxs)(b.a,{style:{backgroundColor:"#eeeeee",padding:"20px",borderRadius:"10px"},children:[Object(y.jsxs)(b.a,{container:!0,alignItems:"center",justify:"center",children:[Object(y.jsx)(I,{time:n,setTime:c,label:"\u4f5c\u696d\u6642\u9593(min)"}),Object(y.jsx)(N,{onMusicChange:function(e){var t=window.URL.createObjectURL(e);B(new Audio(t))}})]}),Object(y.jsxs)(b.a,{container:!0,alignItems:"center",justify:"center",children:[Object(y.jsx)(I,{time:u,setTime:p,label:"\u4f11\u61a9\u6642\u9593(min)"}),Object(y.jsx)(N,{onMusicChange:function(e){var t=window.URL.createObjectURL(e);L(new Audio(t))}})]}),Object(y.jsx)(U,{volume:D,setUsrVolume:K,volBeforeMute:H,setVolBeforeMute:Q,isMute:Y,setIsMute:Z}),Object(y.jsx)(b.a,{container:!0,alignItems:"center",justify:"center",children:Object(y.jsx)(m.a,{variant:"outlined",onClick:function(){v(!1),e(),isNaN(n)?c(1):isNaN(u)&&p(1)},children:"OK"})})]})}}),Object(y.jsx)(T,{pomodoroTime:n,breakTime:u,usrMusic:E,pomodoroMusic:k,breakTimeMusic:z,usrVolume:D,onMusicChange:function(e){P(e)}})]}),Object(y.jsx)(O.a,{className:$.fadeBox,style:{visibility:h?"visible":"hidden"}})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,116)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),o(e),i(e),c(e),s(e)}))};s.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(L,{})}),document.getElementById("root")),A()}},[[68,1,2]]]);
//# sourceMappingURL=main.11d55715.chunk.js.map