(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(31)},24:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),i=n.n(o),c=(n(24),n(10)),u=n(11),l=n(15),d=n(12),s=n(4),h=n(16),g=n(1),p=n(2);function m(){var e=Object(g.a)(["\n    color: white;\n    padding-left: 10px;\n    padding-right: 10px;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n"]);return m=function(){return e},e}function f(){var e=Object(g.a)(["\n    border-radius: ","px;\n    background-color: none;\n    border: 1px solid black;\n    padding-left: 10px;\n    padding-right: 10px;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    ","\n    &:hover {\n        background-color: ",";\n    }\n    &:active {\n        background-color: white;\n    }\n"]);return f=function(){return e},e}function b(){var e=Object(g.a)(["\n    display: flex;\n    flex-direction: row;\n    overflow: hidden;\n    padding: 0;\n    font-size: 20px;\n    background-color: none;\n"]);return b=function(){return e},e}function v(){var e=Object(g.a)(["\n    color: black;\n    margin-bottom: 0;\n    padding: 0;\n"]);return v=function(){return e},e}function y(){var e=Object(g.a)(["\n    color: black;\n    background-color: none;\n    padding: 0;\n    margin-bottom: 0;\n    margin-right: 6px;\n"]);return y=function(){return e},e}function D(){var e=Object(g.a)(["\n    height: auto;\n    width: auto;\n    background-color: none;\n    padding-left: 10px;\n    padding-right: 10px;\n    margin-left: 10px;\n    margin-right: 10px;\n    border: 1px solid black;\n    border-radius: ","px;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    ","\n    &:hover {\n        background-color: ",";\n    }\n    &:active {\n        background-color: white;\n    }\n"]);return D=function(){return e},e}function w(){var e=Object(g.a)(["\n    width: ","px;\n    height: ","px;\n    background-color: none;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    border: 1px solid black;\n    box-sizing: border-box;\n    border-top-left-radius: ","px;\n    border-top-right-radius: ","px;\n"]);return w=function(){return e},e}var x=p.a.div(w(),600,60,24,24),k=p.a.div(D(),24,"box-shadow: 1px 1px 1px;","grey"),M=p.a.div(y()),E=p.a.div(v()),j=p.a.div(b()),O=p.a.div(f(),24,"box-shadow: 1px 1px 1px;","grey"),T=p.a.div(m()),Y=function(e){var t=e.month,n=e.year,a=e.incMonth,o=e.decMonth,i=e.today;return r.a.createElement(x,null,r.a.createElement(k,{onClick:o},"Prev"),r.a.createElement(T,null,"Today"),r.a.createElement(j,null,r.a.createElement(M,null,function(e){switch(e){case 0:return"January";case 1:return"February";case 2:return"March";case 3:return"April";case 4:return"May";case 5:return"June";case 6:return"July";case 7:return"August";case 8:return"September";case 9:return"October";case 10:return"November";case 11:return"December";default:return""}}(t)),r.a.createElement(E,null,n)),r.a.createElement(O,{onClick:i},"Today"),r.a.createElement(k,{onClick:a},"Next"))};function F(){var e=Object(g.a)(["\n    margin: 0;\n    padding: 0;\n    background-color: none;\n    text-align: center;\n"]);return F=function(){return e},e}function S(){var e=Object(g.a)(["\n    text-align: center;\n    font-size: 12px;\n    padding: 0;\n    margin-top: 0;\n    margin-bottom: -10px;\n"]);return S=function(){return e},e}function z(){var e=Object(g.a)(["\n    text-align: center;\n    font-size: 10px;\n    margin: 0;\n"]);return z=function(){return e},e}function C(){var e=Object(g.a)(["\n    width: ","px;\n    height: ","px;\n    border: 1px solid black;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    background-color: ",";\n    color: ",";\n    &:hover {\n        background-color: ",";\n    }\n"]);return C=function(){return e},e}var J=p.a.div(C(),600/7,40,function(e){return e.grey?"hsl( 11, 0%, 90%)":"none"},function(e){return e.highlight?"red":"none"},function(e){return e.setDate}),I=p.a.p(z()),N=p.a.p(S()),P=p.a.div(F()),W=function(e){for(var t=e.weekDay,n=e.date,a=e.month,o=e.year,i=e.grey,c=e.highlight,u=e.setDate,l=e.events,d=[],s=0;s<l&&!(s>6);s++)d.push(".");var h=d.join("");return r.a.createElement(J,{setDate:u?"grey":"none",grey:i,highlight:c,onClick:u?function(){return u(n,a,o)}:""},r.a.createElement(I,null,function(e){switch(e){case 0:return"Sun";case 1:return"Mon";case 2:return"Tues";case 3:return"Wed";case 4:return"Thur";case 5:return"Fri";case 6:return"Sat";case 7:return"Sun";default:return""}}(t)),r.a.createElement(N,null,n.toString()),r.a.createElement(P,null,h))},A=n(3),B=n.n(A);function H(){var e=Object(g.a)(["\n    display: grid;\n    grid-template-columns: repeat(7, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n    grid-column-gap: 0;\n    grid-row-gap: 0;\n    height: ","px;\n    width: ","px;\n"]);return H=function(){return e},e}var R=p.a.div(H(),function(e){var t=e.days;return 40*(Math.round(t/8)+1)},600),V=function(e){for(var t=e.year,n=e.month,a=e.days,o=e.dateToDisplay,i=e.setDate,c=e.events,u=[],l=B()().month(n).date(1).day(),d=B()().month(n-1).daysInMonth(),s=function(e,a){var o=c.filter(function(a){return a.date.getFullYear()===t&&a.date.getMonth()===n&&a.date.getDate()===e}).length;u.push(r.a.createElement(W,{key:1e4*Math.random(),weekDay:a-1,date:e,month:n,year:t,grey:!0,events:o}))},h=d-l+1,g=1;h<=d;h++,g++)s(h,g);for(var p=function(e){if(e===o.getDate()&&o.getMonth()===n&&o.getFullYear()===t){var a=c.filter(function(a){return a.date.getFullYear()===t&&a.date.getMonth()===n&&a.date.getDate()===e}).length;u.push(r.a.createElement(W,{key:e,weekDay:B()().month(n).date(e).day(),date:e,month:n,year:t,grey:!1,setDate:i,events:a,highlight:!0}))}else{var l=c.filter(function(a){return a.date.getFullYear()===t&&a.date.getMonth()===n&&a.date.getDate()===e}).length;u.push(r.a.createElement(W,{key:e,weekDay:B()().month(n).date(e).day(),date:e,month:n,year:t,grey:!1,setDate:i,events:l}))}},m=1;m<=a;m++)p(m);var f=function(e,a){var o=c.filter(function(e){return e.date.getFullYear()===t&&e.date.getMonth()===n&&e.date.getDate()===a}).length;u.push(r.a.createElement(W,{key:1e4*Math.random(),weekDay:e,date:a,month:n,year:t,grey:!0,events:o}))};for(g=B()().month(n).date(a).day()+1,h=1;g<7;g++,h++)f(g,h);var b=u.length;return r.a.createElement(R,{days:b},u)};function q(){var e=Object(g.a)(["\n    margin-left: 10px;\n"]);return q=function(){return e},e}function G(){var e=Object(g.a)(["\n    display: ",";\n    border: 1px solid black;\n    border-bottom-left-radius: ","px;\n    border-bottom-right-radius: ","px;\n    width: ",";\n    height: auto;\n"]);return G=function(){return e},e}var K=p.a.div(G(),function(e){return e.display?"block":"none"},24,24,600),L=p.a.p(q()),Q=function(e){var t=e.display,n=e.events,a=n.map(function(e){return r.a.createElement("li",null,e.event)});return r.a.createElement(K,{display:t},r.a.createElement(L,null,0===n.length?"No events today":n[0].date.toDateString()),r.a.createElement("ul",null,a))};function U(){var e=Object(g.a)([""]);return U=function(){return e},e}function X(){var e=Object(g.a)(["\n    border: 1px solid black;\n    border-radius: ","px;\n    margin-left: auto;\n    margin-right: auto;\n    width: ","px;\n    margin-top: calc(50vh - ","px);\n    background-color: white;\n    box-shadow: 1px 1px 1px;\n"]);return X=function(){return e},e}var Z=p.a.div(X(),24,600,200),$=p.a.div(U()),_=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={date:B()(new Date),displayEvents:!0,dateToDisplay:new Date,events:[{date:new Date,event:"Haircut"},{date:new Date,event:"Write code to eat the world"},{date:new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()+1),event:"Soccer game"},{date:new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()+1),event:"Pickup kids"},{date:new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()+1),event:"Make dinner"},{date:new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()+1),event:"Watch favorite TV show"},{date:new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()+1),event:"Read emails"},{date:new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()+2),event:"Party at Elliott's"}]},n.incrementMonth=n.incrementMonth.bind(Object(s.a)(n)),n.decrementMonth=n.decrementMonth.bind(Object(s.a)(n)),n.setToToday=n.setToToday.bind(Object(s.a)(n)),n.setDateToDisplay=n.setDateToDisplay.bind(Object(s.a)(n)),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"incrementMonth",value:function(){this.setState(function(e){return{date:e.date.month(e.date.month()+1)}})}},{key:"decrementMonth",value:function(){this.setState(function(e){return{date:e.date.month(e.date.month()-1)}})}},{key:"setToToday",value:function(){this.setState({date:B()(new Date),dateToDisplay:new Date})}},{key:"setDateToDisplay",value:function(e,t,n){this.setState({dateToDisplay:new Date(n,t,e)})}},{key:"render",value:function(){var e=this,t=this.state.events.filter(function(t){return t.date.getDate()===e.state.dateToDisplay.getDate()&&t.date.getMonth()===e.state.dateToDisplay.getMonth()&&t.date.getFullYear()===e.state.dateToDisplay.getFullYear()});return r.a.createElement(Z,null,r.a.createElement(Y,{today:this.setToToday,incYear:this.incrementYear,decYear:this.decementYear,incMonth:this.incrementMonth,decMonth:this.decrementMonth,month:this.state.date.month(),year:this.state.date.year()}),r.a.createElement(V,{year:this.state.date.year(),month:this.state.date.month(),days:this.state.date.daysInMonth(),dateToDisplay:this.state.dateToDisplay,setDate:this.setDateToDisplay,events:this.state.events}),r.a.createElement($,null,r.a.createElement(Q,{display:this.state.displayEvents,events:t})))}}]),t}(a.Component);i.a.render(r.a.createElement(_,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.f98820cf.chunk.js.map