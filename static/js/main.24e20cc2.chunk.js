(this["webpackJsonpfinal-app"]=this["webpackJsonpfinal-app"]||[]).push([[0],{25:function(e,t,a){e.exports=a(70)},30:function(e,t,a){},31:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(21),s=a.n(l),r=(a(30),a(4)),i=a(5),c=a(7),u=a(6),d=(a(31),a(22)),m=a.n(d),h=["you don't have to be great to start- but you have to start to be great","spend life with who makes you happy- not who you have to impress","your only obligation in any lifetime is to be true to yourself","you don't have to be someone else to impress people. Let them be impressed by the real you","your time is limited, so don't waste it living someone else's life","Time is precious, waste it wisely","Storms make trees take deeper roots","you live, make a bunch of mistakes and learn from them. while all this is happening you'll grow & never be the person you once were","Do something once a day that scares you","Smile and the world will smile with you","Don't strive to be anybody but yourself. Celebrate your uniqueness","a smart person will learn from their mistakes. a genius will learn from everyone else's","sometimes you need to step outside, get some fresh air & remind yourself of who you are & what you want to be","Smile- it looks good on you:-)","being happy doesn't mean being perfect. it means you've decided to look beyond imperfections","a smile is the prettiest thing you can wear:-)","don't let anyone's ignorance, hate, drama or negativity stop you from being the best person you can be","Be curious, Not judgemental","you were born because you're going to be important some day.. even if it's just to one person:-)","Don't ask what the meaning of life is. You define it","someday, someone will walk into your life & make you realise why it never worked with anyone else","Intelligence without ambition is a bird without wings"],p=["vd0.mp4","vd1.mp4","vd2.mp4","vd3.mp4","vd4.mp4","vd5.mp4","https://youtu.be/OVeMmH2w7OE","https://youtu.be/femR2wbTHaQ","https://youtu.be/3tCBIDzF34M","https://youtu.be/fTvelC4ZZds","https://youtu.be/trn8f8-wTag","https://youtu.be/fe-xbF1ztXo","https://youtu.be/A8A1k1i0YnM","https://youtu.be/mhleha-SqCA","https://youtu.be/8KU45gCsGX4","https://youtu.be/L3qaRVXRz0g","https://youtu.be/inkjVuJlXQU","https://youtu.be/KiVKGhwKd1k","https://youtu.be/-GYoAtwcEQw","https://youtu.be/C2Xmkg3HRp0","https://youtu.be/BxAg-JNHy3g","https://youtu.be/bcPjsyzqkp4"],y=["https://youtu.be/jiLz9kiycnM","https://youtu.be/sFMRqxCexDk","https://youtu.be/KihumhUnjAQ","https://youtu.be/cIriwVhRPVA","https://youtu.be/3zS-DWJYT14","https://youtu.be/rtOvBOTyX00","https://youtu.be/CjxugyZCfuw","https://youtu.be/NaQ_4ZvCbOE","https://youtu.be/KFppTBdCse8","https://youtu.be/dKM516jRXvQ","https://youtu.be/nYh-n7EOtMA","https://youtu.be/IsaOXzb4Uh0","https://youtu.be/-vTCrrw8EnM","https://youtu.be/cyKZXbxx2lc","https://youtu.be/FM7MFYoylVs","https://youtu.be/d-diB65scQU","https://youtu.be/A0BPkm95-dc","https://youtu.be/JYkVka5Z4Kc","https://youtu.be/iWBTEngjktA","https://youtu.be/d3FagpYDxnc"],b=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onClickSubmit=function(e){n.randNum=Math.floor(e.length*Math.random()),n.setState({vid:e[n.randNum]})},n.randNum=null,n.state={vid:[p[13]]},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("article",{className:"d-flex flex-column justify-content-start align-items-center videocontainer"},o.a.createElement("h2",null,"Watch Videos"),o.a.createElement(m.a,{className:"bvideo",url:this.state.vid,onError:function(){return console.warn("juhh")},controls:!0,playing:!0}),o.a.createElement("div",{className:"ui small buttons mt-1"},o.a.createElement("button",{className:"button ui red",onClick:function(){return e.onClickSubmit(p)}},"Click for Funny Video"),o.a.createElement("div",{className:"or"}),o.a.createElement("button",{className:"button ui violet",onClick:function(){return e.onClickSubmit(y)}},"Click for Video Song")))}}]),a}(o.a.Component),v=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).fqlist=function(){n.randNum=Math.floor(h.length*Math.random()),n.setState({aquote:h[n.randNum]})},n.randNum=13,n.state={aquote:h[n.randNum]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.interval=setInterval(this.fqlist,1e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return o.a.createElement("article",{className:"bquote align-self-center my-2 py-3"},o.a.createElement("p",null,this.state.aquote))}}]),a}(o.a.Component),f=a(8),E=a.n(f),w=a(23),g=a(24),k=a.n(g),N=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).testfunc=Object(w.a)(E.a.mark((function e(){var t,a,l,s,r,i,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://api.covid19india.org/v4/data.json");case 2:c=e.sent,console.log(c.data.AP),n.setState({newData:Object.entries(c.data.AP.districts),npcases:null!==(t=null===(a=c.data.AP.delta)||void 0===a?void 0:a.confirmed)&&void 0!==t?t:"No update yet",nccases:null!==(l=null===(s=c.data.AP.delta)||void 0===s?void 0:s.recovered)&&void 0!==l?l:"No update yet",ndcases:null!==(r=null===(i=c.data.AP.delta)||void 0===i?void 0:i.deceased)&&void 0!==r?r:"No update yet",tcncases:c.data.AP.total.confirmed,tccases:c.data.AP.total.recovered,tdcases:c.data.AP.total.deceased,mdates:c.data.AP.meta.last_updated}),n.setState({distData:o.a.createElement("table",{className:"ui striped table unstackable inverted compact m-0 p-0"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"District"),o.a.createElement("th",null,"New"),o.a.createElement("th",null,"Active"),o.a.createElement("th",null,"Deceased"),o.a.createElement("th",null,"Cured/ Migrated"),o.a.createElement("th",null,"Total"))),o.a.createElement("tbody",null,n.state.newData.map((function(e){var t,a,l,s,r,i,c,u,d,m,h,p;return o.a.createElement("tr",{key:n.k+=1},o.a.createElement("td",null,null!==(t=e[0])&&void 0!==t?t:"N/A"),o.a.createElement("td",null,null!==(a=null===(l=e[1].delta)||void 0===l?void 0:l.confirmed)&&void 0!==a?a:"N/A"),o.a.createElement("td",null,(null===(s=e[1].total)||void 0===s?void 0:s.confirmed)-(null===(r=e[1].total)||void 0===r?void 0:r.recovered)-(null===(i=e[1].total)||void 0===i?void 0:i.deceased)||"N/A"),o.a.createElement("td",null,null!==(c=null===(u=e[1].total)||void 0===u?void 0:u.deceased)&&void 0!==c?c:"N/A"),o.a.createElement("td",null,null!==(d=null===(m=e[1].total)||void 0===m?void 0:m.recovered)&&void 0!==d?d:"N/A"),o.a.createElement("td",null,null!==(h=null===(p=e[1].total)||void 0===p?void 0:p.confirmed)&&void 0!==h?h:"N/A"))}))))}),n.setState({cacases:n.state.tcncases-n.state.tccases-n.state.tdcases-n.state.newData[3][1].total.confirmed+n.state.newData[3][1].total.recovered-n.state.newData[7][1].total.confirmed+n.state.newData[7][1].total.recovered});case 7:case"end":return e.stop()}}),e)}))),n.k=0,n.state={newData:[],npcases:null,nccases:null,ndcases:null,cacases:null,tcncases:null,tccases:null,tdcases:null,mdates:"Loading..",distData:o.a.createElement("div",null,"COVID-19 details for Andhra Pradesh - Loading..")},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.testfunc()}},{key:"render",value:function(){return o.a.createElement("div",{className:"table-responsive"},o.a.createElement("h2",{className:"mt-4 mb-0 pb-0"},"COVID-19 case records: Andhra Pradesh"),this.state.distData,o.a.createElement("div",{className:"legend"},'||Legend|| New:"new cases reported today" || Active:"currently active cases" || Cured:"cured cases till date" || Total:"Active+Deceased+Cured || source:github.com/covid19india/api ||'),o.a.createElement("i",null,"*Last updated on: ",this.state.mdates),o.a.createElement("h3",{className:"pb-0 mb-0"},"Daily Reports: COVID-19 in A.P."),o.a.createElement("ul",null,o.a.createElement("li",null,"New +ve cases: ",this.state.npcases),o.a.createElement("li",null,"New cured cases: ",this.state.nccases),o.a.createElement("li",null,"New deceased: ",this.state.ndcases),o.a.createElement("li",null,"Currently active +ve cases: ",this.state.cacases),o.a.createElement("li",null,"Total cured: ",this.state.tccases),o.a.createElement("li",null,"Total deceased: ",this.state.tdcases),o.a.createElement("li",null,"Total confirmed: ",this.state.tcncases," ",o.a.createElement("i",null,"*Totals include 'foriegn evacuees' and 'other state' (migrated) cases"))))}}]),a}(o.a.Component),j=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"header"},o.a.createElement("header",{className:"hcontent"},o.a.createElement("h1",{className:"m-0 pt-2"},"Restore yourself when you're Alone.."),o.a.createElement("span",{className:"caption pt-0 mt-0"},"From Boring to Beyond ",o.a.createElement("i",{className:"coffee icon"})))),o.a.createElement("section",{className:"d-flex flex-column justify-content-start align-items-center"},o.a.createElement(v,null),o.a.createElement(b,null),o.a.createElement(N,null)),o.a.createElement("section",{className:"footer mb-2"},o.a.createElement("footer",{className:"fcontent"},o.a.createElement("p",null,"-Thanks for coming-",o.a.createElement("br",null),"-This website is in developement-",o.a.createElement("br",null),"-Explore-Enjoy-",o.a.createElement("br",null),"-Ideas and suggestions are most welcome- ",o.a.createElement("br",null),o.a.createElement("a",{href:"mailto: contact@iboring.xyz"},"write to me at \xa0",o.a.createElement("i",{className:"envelope icon"}),"contact@iboring.xyz")))))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.24e20cc2.chunk.js.map