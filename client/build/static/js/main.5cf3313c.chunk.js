(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{45:function(e,t,n){e.exports=n(72)},55:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(21),r=n(16);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(2),o=n(3);function u(){var e=Object(i.a)(["\n    height: 50px;\n    display: flex;\n    align-items: center;\n    background-color: #f5f5f5;\n  \n    ul {\n      margin: 0;\n      padding: 0;\n    }\n  \n    li {\n      display: inline-block;\n      margin-left: 20px;\n  \n      a {\n        text-decoration: none;\n        font-size: 20px;\n        color: #333;\n      }\n    }\n  "]);return u=function(){return e},e}var s=o.a.div(u()),m=function(){return l.a.createElement(s,null,l.a.createElement("img",{src:"https://valeatherco.s3-us-west-2.amazonaws.com/logo.png",alt:"logo",height:"50px",width:"50px"}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(r.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/products"},"Products")),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/about"},"About")),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/contact"},"Contact")),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/admin"},"Admin"))))},h=n(17),f=n(75),d=n(74);function p(){var e=Object(i.a)(["\n  min-height: calc(100vh - 50px);\n  background-color: #333;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n\n  div.title {\n    font-size: 40px;\n    font-weight: bold;\n  }\n  section {\n    p {\n      font-size: 20px;\n    }\n  }\n"]);return p=function(){return e},e}var b=o.a.div(p()),g=function(){return l.a.createElement(b,null,l.a.createElement("div",{className:"title"},"Welcome to VA Leather Co!"),l.a.createElement("section",null,l.a.createElement("img",{src:"https://valeatherco.s3-us-west-2.amazonaws.com/logo.png",alt:"logo"})))},E=n(6),v=n(7),x=n(9),j=n(8),y=n(10),O=(n(55),n(5));function C(){var e=Object(i.a)(["\n  \n  background-color: #f76565;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  margin: 10px\n\n  span {\n    color: #fff;\n    font-size: 40px;\n  }\n\n  section {\n    color: #fff;\n  }\n"]);return C=function(){return e},e}var k=function(e){function t(e){var n;return Object(E.a)(this,t),(n=Object(x.a)(this,Object(j.a)(t).call(this))).state={bucketUrl:e.bucketUrl,itemName:e.itemName,imageUrl:e.imageUrl,description:e.description,price:e.price,currentImage:e.imageUrl[0],currentImageNum:0},n.handleButtonCLick=n.handleButtonCLick.bind(Object(O.a)(n)),n}return Object(y.a)(t,e),Object(v.a)(t,[{key:"handleButtonCLick",value:function(e){var t=e.target.name,n=this.state.currentImageNum;"nextImage"===t?(console.log("next"+n),n=(n+1)%this.state.imageUrl.length,console.log(n)):"prevImage"===t&&(console.log("prev"+this.state.imageUrl.length),n=(n-1)%this.state.imageUrl.length,console.log(n)),this.setState({currentImage:this.state.imageUrl[n],currentImageNum:n})}},{key:"render",value:function(){return l.a.createElement(I,null,l.a.createElement("h1",null,this.state.itemName),l.a.createElement("img",{src:this.state.bucketUrl+this.state.currentImage,alt:"Pic1",height:"300px",width:"300px"}),l.a.createElement("span",null,l.a.createElement("button",{type:"button",name:"prevImage",onClick:this.handleButtonCLick},"Previous Image"),l.a.createElement("button",{type:"button",name:"nextImage",onClick:this.handleButtonCLick},"Next Image")),l.a.createElement("h2",null,"Price: ",this.state.price),l.a.createElement("p",null,this.state.description))}}]),t}(l.a.Component),I=o.a.div(C()),S=k,w=function(e){function t(){var e;return Object(E.a)(this,t),(e=Object(x.a)(this,Object(j.a)(t).call(this))).getDataFromDb=function(){fetch("http://localhost:3000/getProducts").then((function(e){return e.json()})).then((function(t){return e.setState({products:t.data})})).catch((function(e){alert(e)}))},e.state={products:[]},e}return Object(y.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){if(this.getDataFromDb(),!this.state.intervalIsSet){var e=setInterval(this.getDataFromDb,5e3);this.setState({intervalIsSet:e})}}},{key:"componentWillUnmount",value:function(){this.state.intervalIsSet&&(clearInterval(this.state.intervalIsSet),this.setState({intervalIsSet:null}))}},{key:"render",value:function(){var e=this.state.products;return l.a.createElement("div",{id:"productContainer"},l.a.createElement("ul",{id:"productList"},e.length<=0?"No Products":e.map((function(t){return l.a.createElement("li",{display:"inline-block",style:{padding:"10px"},key:e._id},l.a.createElement(S,{itemName:t.itemName,price:t.price,description:t.description,bucketUrl:"https://valeatherco.s3-us-west-2.amazonaws.com/",imageUrl:t.imageUrl}))}))))}}]),t}(l.a.Component);function N(){var e=Object(i.a)(["\n  min-height: calc(100vh - 50px);\n  background-color: #d28caa;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n\n  span {\n    color: #fff;\n    font-size: 40px;\n  }\n\n  section {\n    color: #fff;\n  }\n"]);return N=function(){return e},e}var U=o.a.div(N()),P=function(){return l.a.createElement(U,null,l.a.createElement(w,null))};function D(){var e=Object(i.a)(["\n  min-height: calc(100vh - 50px);\n  background-color: #4bc9c0;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n\n  span {\n    color: #fff;\n    font-size: 40px;\n  }\n\n  section {\n    color: #fff;\n  }\n"]);return D=function(){return e},e}var z=function(e){function t(){var e;return Object(E.a)(this,t),(e=Object(x.a)(this,Object(j.a)(t).call(this))).state={aboutText:""},e}return Object(y.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:3000/getSiteInfo").then((function(e){return e.json()})).then((function(t){e.setState({aboutText:t.data[0].about})})).catch((function(e){alert(e)}))}},{key:"render",value:function(){return l.a.createElement(M,null,l.a.createElement("span",null,"About VA Leather Co."),l.a.createElement("section",null,l.a.createElement("p",null,this.state.aboutText)))}}]),t}(l.a.Component),M=o.a.div(D()),A=z;function B(){var e=Object(i.a)(["\n  min-height: calc(100vh - 50px);\n  background-color: #f76565;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n\n  span {\n    color: #fff;\n    font-size: 40px;\n  }\n\n  section {\n    color: #fff;\n  }\n"]);return B=function(){return e},e}var L=function(e){function t(){var e;return Object(E.a)(this,t),(e=Object(x.a)(this,Object(j.a)(t).call(this))).state={contactText:"",contactEmail:""},e}return Object(y.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:3000/getSiteInfo").then((function(e){return e.json()})).then((function(t){e.setState({contactText:t.data[0].contactMessage,contactEmail:t.data[0].contactEmail})})).catch((function(e){alert(e)}))}},{key:"render",value:function(){return l.a.createElement(T,null,l.a.createElement("span",null,"Contact"),l.a.createElement("section",null,l.a.createElement("p",null,this.state.contactText),l.a.createElement("br",null),l.a.createElement("p",null,"Email: ",this.state.contactEmail)))}}]),t}(l.a.Component),T=o.a.div(B()),W=L,F=n(20),H=n(22),J=n.n(H),V=function(e){function t(){var e;return Object(E.a)(this,t),(e=Object(x.a)(this,Object(j.a)(t).call(this))).state={itemName:"",price:"",description:"",imageUrl:[]},e.handleSubmit=e.handleSubmit.bind(Object(O.a)(e)),e.handleChange=e.handleChange.bind(Object(O.a)(e)),e}return Object(y.a)(t,e),Object(v.a)(t,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;if("imageUrl"===n)for(var l,c=document.getElementById("fileInput").files,r=0;r<c.length;r++)l=c.item(r),this.state.imageUrl.push(l.name);else"price"===n?this.setState(Object(F.a)({},n,Number(a))):this.setState(Object(F.a)({},n,a))}},{key:"handleSubmit",value:function(e){e.preventDefault(),J.a.post("http://localhost:3000/submitProduct",this.state).then((function(e){alert("Item submitted successfully!")})).catch((function(e){alert(e)})),this.setState({itemName:"",price:"",description:"",imageUrl:[]})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("label",null,"Item Name:",l.a.createElement("input",{type:"text",name:"itemName",value:this.state.itemName,onChange:this.handleChange,placeholder:"Item name here"})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,"Item Price:",l.a.createElement("input",{type:"number",min:"0",name:"price",value:this.state.price,onChange:this.handleChange,placeholder:"Item price here"})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,"Item Description:",l.a.createElement("br",null),l.a.createElement("textarea",{rows:"8",cols:"50",name:"description",value:this.state.description,onChange:this.handleChange,placeholder:"Item description here"})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,"Item Images:",l.a.createElement("input",{type:"file",multiple:!0,name:"imageUrl",id:"fileInput",onChange:this.handleChange,placeholder:"Hold shift to select multiple images"})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{type:"button",onClick:this.handleSubmit},"Submit")))}}]),t}(l.a.Component);function $(){var e=Object(i.a)(["\n  min-height: calc(100vh - 50px);\n  background-color: #d28caa;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n\n  span {\n    color: #fff;\n    font-size: 40px;\n  }\n\n  section {\n    color: #fff;\n  }\n"]);return $=function(){return e},e}var _=o.a.div($()),q=function(){return l.a.createElement(_,null,l.a.createElement(V,null))},G=function(e){function t(){var e;return Object(E.a)(this,t),(e=Object(x.a)(this,Object(j.a)(t).call(this))).state={about:"",contactMessage:"",contactEmail:""},e.handleSubmit=e.handleSubmit.bind(Object(O.a)(e)),e.handleChange=e.handleChange.bind(Object(O.a)(e)),e}return Object(y.a)(t,e),Object(v.a)(t,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(F.a)({},n,a))}},{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:3000/getSiteInfo").then((function(e){return e.json()})).then((function(t){e.setState({about:t.data[0].about,contactMessage:t.data[0].contactMessage,contactEmail:t.data[0].contactEmail})})).catch((function(e){alert(e)}))}},{key:"handleSubmit",value:function(e){e.preventDefault(),J.a.post("http://localhost:3000/submitSiteInfo",this.state).then((function(e){alert("Info submitted successfully!")})).catch((function(e){alert(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("label",null,"About:",l.a.createElement("br",null),l.a.createElement("textarea",{rows:"8",cols:"50",name:"about",value:this.state.about,onChange:this.handleChange,placeholder:"Write your about page here"})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,"Contact Info:",l.a.createElement("br",null),l.a.createElement("textarea",{rows:"8",cols:"50",name:"contactMessage",value:this.state.contactMessage,onChange:this.handleChange,placeholder:"Item description here"})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,"Contact Email:",l.a.createElement("input",{type:"text",name:"contactEmail",value:this.state.contactEmail,onChange:this.handleChange,placeholder:"Contact email here"})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{type:"button",onClick:this.handleSubmit},"Submit")))}}]),t}(l.a.Component);function K(){var e=Object(i.a)(["\n  min-height: calc(100vh - 50px);\n  background-color: #d28caa;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n\n  span {\n    color: #fff;\n    font-size: 40px;\n  }\n\n  section {\n    color: #fff;\n  }\n"]);return K=function(){return e},e}var Q=function(e){function t(){var e;return Object(E.a)(this,t),(e=Object(x.a)(this,Object(j.a)(t).call(this))).state={currentPage:""},e.handleChange=e.handleChange.bind(Object(O.a)(e)),e}return Object(y.a)(t,e),Object(v.a)(t,[{key:"handleChange",value:function(e){var t=e.target.name;"subProd"===t?this.setState({currentPage:l.a.createElement(q,null)}):"siteInfo"===t&&this.setState({currentPage:l.a.createElement(G,null)})}},{key:"render",value:function(){return l.a.createElement(R,null,l.a.createElement("span",null,l.a.createElement("button",{type:"button",name:"subProd",onClick:this.handleChange},"Submit Product"),l.a.createElement("button",{type:"button",name:"siteInfo",onClick:this.handleChange},"Site Info")),l.a.createElement("br",null),l.a.createElement("br",null),this.state.currentPage)}}]),t}(l.a.Component),R=o.a.div(K()),X=Q;function Y(){var e=Object(i.a)(["\n  .fade-enter {\n    opacity: 0.01;\n  }\n\n  .fade-enter.fade-enter-active {\n    opacity: 1;\n    transition: opacity 300ms ease-in;\n  }\n\n  .fade-exit {\n    opacity: 1;\n  }\n\n  .fade-exit.fade-exit-active {\n    opacity: 0.01;\n    transition: opacity 300ms ease-in;\n  }\n\n  div.transition-group {\n    position: relative;\n  }\n\n  section.route-section {\n    position: absolute;\n    width: 100%;\n    top: 0;\n    left: 0;\n  }\n"]);return Y=function(){return e},e}var Z=o.a.div(Y()),ee=Object(h.f)((function(e){var t=e.location;return l.a.createElement(Z,null,l.a.createElement(f.a,{className:"transition-group"},l.a.createElement(d.a,{key:t.key,timeout:{enter:300,exit:300},classNames:"fade"},l.a.createElement("section",{className:"route-section"},l.a.createElement(h.c,{location:t},l.a.createElement(h.a,{exact:!0,path:"/",component:g}),l.a.createElement(h.a,{path:"/Products",component:P}),l.a.createElement(h.a,{path:"/About",component:A}),l.a.createElement(h.a,{path:"/Contact",component:W}),l.a.createElement(h.a,{path:"/Admin",component:X}))))))}));Object(c.render)(l.a.createElement((function(){return l.a.createElement(r.a,null,l.a.createElement("div",null,l.a.createElement(m,null),l.a.createElement(ee,null)))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.5cf3313c.chunk.js.map