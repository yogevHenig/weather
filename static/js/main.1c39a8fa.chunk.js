(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],[,,,,,,,,,function(t,e,a){t.exports=a(20)},,,,,function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),s=a(3),c=a.n(s),r=(a(14),a(1)),o=a.n(r),l=a(4),h=a(5),m=a(6),u=a(8),p=a(7),d=(a(16),a(17),function(t){var e=t.city,a=t.temperature,n=t.humidity,s=t.windspeed,c=t.iconURL;return i.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center lg"},i.a.createElement("main",{className:"pa4 black-80"},i.a.createElement("div",{className:"measure "},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},e),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6"},"Temprature: ".concat(a," \xb0C")),i.a.createElement("label",{className:"db fw6 lh-copy f6"},"Humidity: ".concat(n,"%")),i.a.createElement("label",{className:"db fw6 lh-copy f6"},"Windspeed: ".concat(s,"Km/h")),i.a.createElement("img",{id:"inputImg",alt:"",src:"https://".concat(c),width:"64px",hight:"64px"}))))))}),f=(a(18),function(t){var e=t.onInputChange,a=t.onButtonSubmit;return i.a.createElement("div",null,i.a.createElement("p",{className:"f3"},"This Magic will find your city weather. Give it a try!"),i.a.createElement("div",{className:"center lg"},i.a.createElement("div",{className:"form2 center pa4 br3 shadow-5"},i.a.createElement("input",{placeholder:"Enter a city name",className:"f4 pa2 w-70 center",type:"tex",onChange:e}),i.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-blue",onClick:a},"Find"))))}),w=function(t){Object(u.a)(a,t);var e=Object(p.a)(a);function a(){var t;return Object(h.a)(this,a),(t=e.call(this)).fetchDataByCity=function(){var t=Object(l.a)(o.a.mark((function t(e,a){var n,i,s,c,r,l,h,m,u,p,d,f,w;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("fetch data for",e),"https://cors-anywhere.herokuapp.com/",n="https://www.google.com/search?q=weather+".concat(e),t.next=5,fetch("https://cors-anywhere.herokuapp.com/"+n,{headers:{"Access-Control-Allow-Origin":"*"}});case 5:return i=t.sent,console.log("never blabla??",i),t.next=9,i.text();case 9:if((s=(s=t.sent).substr(s.indexOf("Weather Result"))).length){t.next=13;break}throw Error("no data!");case 13:for(c=s.indexOf('id="wob_ttm" style="display:none">'),r=s.substr(c+'id="wob_ttm" style="display:none">'.length,2).split("").filter((function(t){return t>=0&&t<=9})).join(""),l=s.indexOf('<span id="wob_hm">'),h=s.substr(l+'<span id="wob_hm">'.length,2),m=s.indexOf('d="wob_tws">'),u=s.substr(m+'d="wob_tws">'.length,2),p=s.indexOf("gstatic"),d=p,console.log("never1??");s[d]+s[d+1]+s[d+2]!=="png";)d++;return console.log("never2??"),f=s.substr(p,d-p+3),w=a.concat([{name:e,temperature:r,humidity:h,windspeed:u,icon:f}]),console.log("finished",e),t.abrupt("return",w);case 30:t.prev=30,t.t0=t.catch(0),console.log(t.t0);case 33:case"end":return t.stop()}}),t,null,[[0,30]])})));return function(e,a){return t.apply(this,arguments)}}(),t.onInputChange=function(e){t.setState({input:e.target.value})},t.onButtonSubmit=function(e){t.fetchDataByCity(t.state.input,[]).then((function(e){t.setState({city:e})}))},t.removeCity=function(){var e=t.state.city;e.pop(),t.setState({city:e})},t.state={cities:[],city:[],input:""},t}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var t=this;console.log("Lets bring some data!"),this.fetchDataByCity("Tel-Aviv",[]).then((function(e){if(!e)throw Error("noData");t.fetchDataByCity("New-York",e).then((function(e){if(!e)throw Error("noData");t.setState({cities:e})}))})).catch(console.log),console.log("Done!")}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfnS75QwwkgQCc01HRB3SQOQDrAbqCW4D_3g&usqp=CAU",className:"App-logo",alt:"logo"}),i.a.createElement("p",null,"Let's See Some Weather!")),i.a.createElement("div",{className:"AppBody"},i.a.createElement(d,{city:this.state.cities[0]?this.state.cities[0].name:"",temperature:this.state.cities[0]?this.state.cities[0].temperature:"",humidity:this.state.cities[0]?this.state.cities[0].humidity:"",windspeed:this.state.cities[0]?this.state.cities[0].windspeed:"",iconURL:this.state.cities[0]?this.state.cities[0].icon:""}),i.a.createElement(d,{city:this.state.cities[1]?this.state.cities[1].name:"",temperature:this.state.cities[1]?this.state.cities[1].temperature:"",humidity:this.state.cities[1]?this.state.cities[1].humidity:"",windspeed:this.state.cities[1]?this.state.cities[1].windspeed:"",iconURL:this.state.cities[1]?this.state.cities[1].icon:""})),i.a.createElement(f,{onButtonSubmit:this.onButtonSubmit,onInputChange:this.onInputChange}),0!==this.state.city.length?i.a.createElement("div",null,i.a.createElement(d,{city:this.state.city[0]?this.state.city[0].name:"",temperature:this.state.city[0]?this.state.city[0].temperature:"",humidity:this.state.city[0]?this.state.city[0].humidity:"",windspeed:this.state.city[0]?this.state.city[0].windspeed:"",iconURL:this.state.city[0]?this.state.city[0].icon:""})):i.a.createElement("div",null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(19);c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.1c39a8fa.chunk.js.map