(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{64:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var o=n(4),i=n(0),c=n.n(i),s=n(10),a=n.n(s),r=(n(64),n(14)),u=n(95),l=n(113),j=n(109),b=n(104),m=n(97),O=n(106),d=n(112),f=n(110),p=n(45),x=n(101),g=n(102),h=n(103),v=n(99),M=n(100),y=n(42),S=Object(u.a)((function(e){return Object(l.a)({progressBottom:{color:e.palette.grey[200]},progressTop:{color:"#aaaaaa",position:"absolute",left:0},in_circle:{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"}})})),T=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),s=n[0],a=n[1],u=Object(i.useState)(!0),l=Object(r.a)(u,2),j=l[0],b=l[1],O=Object(i.useState)(!1),f=Object(r.a)(O,2),p=f[0],T=f[1],C=Object(i.useState)(0),N=Object(r.a)(C,2),k=N[0],B=N[1],I=Object(i.useState)(e.pomodoroTime),w=Object(r.a)(I,2),V=w[0],z=w[1],U=Object(i.useState)(60*V+k),F=Object(r.a)(U,2),L=F[0],A=F[1],R=Object(i.useState)(!1),E=Object(r.a)(R,2),P=E[0],J=E[1];Object(i.useEffect)((function(){if(P||e.onMusicChange(s?e.pomodoroMusic:e.breakTimeMusic),!p){var t=s?e.pomodoroTime:e.breakTime;B(0),z(t),A(60*t)}e.usrMusic.volume=e.usrVolume/100}),[e.usrVolume,e.pomodoroMusic,e.breakTimeMusic,s,P,e]),Object(y.a)((function(){e.usrMusic.pause(),e.usrMusic.currentTime=0,J(!P),e.onMusicChange(s?e.pomodoroMusic:e.breakTimeMusic)}),P?1e4:null),Object(y.a)((function(){k<=0?0===V?(s?(z(e.breakTime),A(60*e.breakTime)):(z(e.pomodoroTime),A(60*e.pomodoroTime)),J(!P),e.usrMusic.volume=e.usrVolume/100,e.usrMusic.play(),a(!s),B(0)):(z((function(e){return e-1})),B(59)):B((function(e){return e-1}))}),p?1e3:null);var _=S();return Object(o.jsxs)(c.a.Fragment,{children:[Object(o.jsx)(m.a,{container:!0,alignItems:"center",justify:"center",style:{marginBottom:"20px"},children:Object(o.jsxs)(d.a,{position:"relative",display:"inline-flex",children:[Object(o.jsx)(v.a,{size:"50vmin",variant:"determinate",value:100,className:_.progressBottom}),Object(o.jsx)(v.a,{size:"50vmin",variant:"determinate",value:100*(1-(60*V+k)/L),className:_.progressTop}),Object(o.jsx)(d.a,{className:_.in_circle,children:Object(o.jsxs)(M.a,{component:"div",color:"textSecondary",children:[Object(o.jsx)(M.a,{style:{fontSize:"5vmin",color:"#eeeeee"},children:s?"\u4f5c\u696d\u4e2d":"\u4f11\u61a9\u4e2d"}),Object(o.jsx)(m.a,{container:!0,justify:"center",className:"timer",children:Object(o.jsxs)(M.a,{style:{fontSize:"5vmin",color:"#eeeeee"},children:[V,":",0===Math.floor(k/10)?"0"+k:k]})})]})})]})}),Object(o.jsxs)(m.a,{container:!0,alignItems:"center",justify:"center",children:[Object(o.jsx)(x.a,{onClick:function(){T(!0),j&&A(60*V+k)},style:{color:"#eeeeee",fontSize:"20vmin",display:p?"none":""}}),Object(o.jsx)(g.a,{onClick:function(){T(!1),b(!1)},style:{color:"#eeeeee",fontSize:"20vmin",display:p?"":"none"}}),Object(o.jsx)(h.a,{onClick:function(){T(!1),b(!0),z(e.pomodoroTime),B(0),a(!0),A(60*e.pomodoroTime)},style:{color:"#eeeeee",fontSize:"20vmin"}})]})]})},C=n(105),N=function(e){return Object(o.jsxs)(b.a,{component:"label",children:[Object(o.jsx)("input",{accept:"audio/*",id:"pomodoro-music",type:"file",style:{display:"none"},onChange:function(t){var n=null!==t.target.files?t.target.files[0]:null;null!==n&&(-1!==n.type.indexOf("audio")?e.onMusicChange(n):alert("\u30aa\u30fc\u30c7\u30a3\u30aa\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u3093\u3067\u304f\u3060\u3055\u3044"))}}),Object(o.jsx)(C.a,{})]})},k=n(111),B=Object(u.a)((function(e){return Object(l.a)({root:{"& > *":{fontSize:"20px",marginTop:"10px",marginBottom:"10px"}}})})),I=function(e){var t=B();return Object(o.jsx)(k.a,{id:"outlined-number",label:e.label,type:"number",InputLabelProps:{shrink:!0},variant:"outlined",value:e.time,onChange:function(t){var n=t.target.value;n?Number(n)<=1?e.setTime(1):e.setTime(Number(n)):e.setTime(Number(NaN))},className:t.root})},w=n(114),V=n(107),z=n(108),U=function(e){return Object(i.useEffect)((function(){(0===e.volume&&!e.isMute||0!==e.volume&&e.isMute)&&e.setIsMute(!e.isMute)}),[e,e.isMute,e.volume]),Object(o.jsxs)(c.a.Fragment,{children:[Object(o.jsx)(M.a,{id:"input-slider",gutterBottom:!0,children:"Volume"}),Object(o.jsxs)(m.a,{container:!0,spacing:2,alignItems:"center",children:[Object(o.jsx)(O.a,{onClick:function(t){e.setVolBeforeMute(e.volume),e.setUsrVolume(0),e.setIsMute(!e.isMute)},style:{display:e.isMute?"none":""},children:Object(o.jsx)(V.a,{})}),Object(o.jsx)(O.a,{onClick:function(t){e.setUsrVolume(e.volBeforeMute),e.setIsMute(!e.isMute)},style:{display:e.isMute?"":"none"},children:Object(o.jsx)(z.a,{})}),Object(o.jsx)(m.a,{item:!0,xs:!0,children:Object(o.jsx)(w.a,{value:e.volume,onChange:function(t,n){e.setUsrVolume(n)},"aria-labelledby":"continuous-slider"})})]})]})},F=Object(u.a)((function(e){return Object(l.a)({settingBtn:{fontSize:"10vmin"},fadeBox:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"#000",opacity:.5,zIndex:1}})})),L=function(){var e=Object(i.useState)(25),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(i.useState)(5),u=Object(r.a)(a,2),l=u[0],x=u[1],g=Object(i.useState)(!1),h=Object(r.a)(g,2),v=h[0],M=h[1],y="./alarmBreak.mp3",S=Object(i.useState)(new Audio(y)),C=Object(r.a)(S,2),k=C[0],B=C[1],w=Object(i.useState)(new Audio(y)),V=Object(r.a)(w,2),z=V[0],L=V[1],A=Object(i.useState)(new Audio(y)),R=Object(r.a)(A,2),E=R[0],P=R[1],J=Object(i.useState)(100),_=Object(r.a)(J,2),D=_[0],K=_[1],q=Object(i.useState)(100),G=Object(r.a)(q,2),H=G[0],Q=G[1],W=Object(i.useState)(!1),X=Object(r.a)(W,2),Y=X[0],Z=X[1],$=F();return Object(o.jsxs)(c.a.Fragment,{children:[Object(o.jsxs)(j.a,{className:"root",children:[Object(o.jsx)(p.a,{trigger:Object(o.jsx)(b.a,{style:{color:"#eeeeee",position:"relative",top:0,left:"80%"},children:Object(o.jsx)(f.a,{className:$.settingBtn})}),modal:!0,onOpen:function(){M(!0)},onClose:function(){M(!1),isNaN(n)?s(1):isNaN(l)&&x(1)},children:function(e){return Object(o.jsxs)(m.a,{style:{backgroundColor:"#eeeeee",padding:"20px",borderRadius:"10px"},children:[Object(o.jsxs)(m.a,{container:!0,alignItems:"center",justify:"center",children:[Object(o.jsx)(I,{time:n,setTime:s,label:"\u4f5c\u696d\u6642\u9593(min)"}),Object(o.jsx)(N,{onMusicChange:function(e){var t=window.URL.createObjectURL(e);B(new Audio(t))}})]}),Object(o.jsxs)(m.a,{container:!0,alignItems:"center",justify:"center",children:[Object(o.jsx)(I,{time:l,setTime:x,label:"\u4f11\u61a9\u6642\u9593(min)"}),Object(o.jsx)(N,{onMusicChange:function(e){var t=window.URL.createObjectURL(e);L(new Audio(t))}})]}),Object(o.jsx)(U,{volume:D,setUsrVolume:K,volBeforeMute:H,setVolBeforeMute:Q,isMute:Y,setIsMute:Z}),Object(o.jsx)(m.a,{container:!0,alignItems:"center",justify:"center",children:Object(o.jsx)(O.a,{variant:"outlined",onClick:function(){M(!1),e(),isNaN(n)?s(1):isNaN(l)&&x(1)},children:"OK"})})]})}}),Object(o.jsx)(T,{pomodoroTime:n,breakTime:l,usrMusic:E,pomodoroMusic:k,breakTimeMusic:z,usrVolume:D,onMusicChange:function(e){P(e)}})]}),Object(o.jsx)(d.a,{className:$.fadeBox,style:{visibility:v?"visible":"hidden"}})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,116)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),o(e),i(e),c(e),s(e)}))};a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(L,{})}),document.getElementById("root")),A()}},[[68,1,2]]]);
//# sourceMappingURL=main.1d4e6901.chunk.js.map