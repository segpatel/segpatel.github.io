(function(e){function t(t){for(var a,r,s=t[0],l=t[1],c=t[2],d=0,p=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},o={app:0},i=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"07f9":function(e,t,n){"use strict";var a=n("787c"),o=n.n(a);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Home",{attrs:{msg:"Agora Basic Video Call"}})],1)},i=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[e._m(0),n("div",{staticClass:"agora-box"},[n("div",{staticClass:"agora-input"},[n("div",{staticClass:"agora-text"},[e._v("* Appid")]),n("el-input",{attrs:{placeholder:"Appid",clearable:""},model:{value:e.option.appid,callback:function(t){e.$set(e.option,"appid",t)},expression:"option.appid"}})],1),n("div",{staticClass:"agora-input"},[n("div",{staticClass:"agora-text"},[e._v("Token")]),n("el-input",{attrs:{placeholder:"Token",clearable:""},model:{value:e.option.token,callback:function(t){e.$set(e.option,"token",t)},expression:"option.token"}})],1),n("div",{staticClass:"agora-input"},[n("div",{staticClass:"agora-text"},[e._v("* Channel Name")]),n("el-input",{attrs:{placeholder:"Channel Name",clearable:""},model:{value:e.option.channel,callback:function(t){e.$set(e.option,"channel",t)},expression:"option.channel"}})],1),n("div",{staticClass:"agora-button"},[n("el-button",{attrs:{type:"primary",disabled:e.disableJoin},on:{click:e.joinEvent}},[e._v("join")]),n("el-button",{attrs:{type:"primary",plain:"",disabled:!e.disableJoin},on:{click:e.leaveEvent}},[e._v("leave")])],1)]),n("div",{staticClass:"agora-view"},[n("div",{staticClass:"agora-video"},[e.localStream?n("StreamPlayer",{attrs:{stream:e.localStream,domId:e.localStream.getId()}}):e._e()],1),e._l(e.remoteStreams,(function(e,t){return n("div",{key:t,staticClass:"agora-video"},[n("StreamPlayer",{attrs:{stream:e,domId:e.getId()}})],1)}))],2)])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"agora-title-box"},[n("div",{staticClass:"agora-title"},[e._v("Agora Basic Video Call")])])}],l=(n("4de4"),n("7db0"),n("a15b"),n("d3b7"),n("d4ec")),c=n("bee2"),u=n("6b5f"),d=n.n(u),p=n("faa1"),f=n.n(p),m=function(){function e(){Object(l["a"])(this,e),this.option={appId:"",channel:"",uid:"",token:""},this.client=null,this.localStream=null,this._eventBus=new f.a}return Object(c["a"])(e,[{key:"joinChannel",value:function(e){var t=this;return new Promise((function(n,a){t.client=d.a.createClient({mode:"rtc",codec:"vp8"}),t.client.init(e.appid,(function(){console.log("init success"),t.clientListener(),t.client.join(e.token?e.token:null,e.channel,null,(function(a){console.log("join channel: "+t.option.channel+" success, uid: ",a),t.option={appid:e.appid,token:e.token,channel:e.channel,uid:a},n()}),(function(e){console.error("client join failed",e)}))}),(function(e){a(e),console.error(e)})),console.log("[agora-vue] appId",e.appid)}))}},{key:"publishStream",value:function(){var e=this;return new Promise((function(t,n){e.localStream=d.a.createStream({streamID:e.option.uid,audio:!0,video:!0,screen:!1}),e.localStream.init((function(){console.log("init local stream success"),t(e.localStream),e.client.publish(e.localStream,(function(e){console.log("publish failed"),console.error(e)}))}),(function(e){n(e),console.error("init local stream failed ",e)}))}))}},{key:"clientListener",value:function(){var e=this,t=this.client;t.on("stream-added",(function(t){e._eventBus.emit("stream-added",t)})),t.on("stream-subscribed",(function(t){e._eventBus.emit("stream-subscribed",t)})),t.on("stream-removed",(function(t){e._eventBus.emit("stream-removed",t)})),t.on("peer-online",(function(t){e._eventBus.emit("peer-online",t)})),t.on("peer-leave",(function(t){e._eventBus.emit("peer-leave",t)}))}},{key:"on",value:function(e,t){this._eventBus.on(e,t)}},{key:"leaveChannel",value:function(){var e=this;return new Promise((function(t,n){e.client.unpublish(e.localStream,(function(e){console.log(e)})),e.client.leave((function(){e.localStream.isPlaying()&&e.localStream.stop(),e.localStream.close(),e.client=null,t(),console.log("client leaves channel success")}),(function(e){n(e),console.log("channel leave failed"),console.error(e)}))}))}}]),e}(),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"player",staticClass:"agora-video-player",attrs:{id:e.domId}})},h=[],b={name:"stream-player",props:["stream","domId"],mounted:function(){this.$nextTick((function(){this.stream&&!this.stream.isPlaying()&&this.stream.play("".concat(this.domId),{fit:"cover"},(function(e){e&&"aborted"!==e.status&&console.warn("trigger autoplay policy")}))}))},beforeDestroy:function(){this.stream&&(this.stream.isPlaying()&&this.stream.stop(),this.stream.close())}},g=b,y=(n("07f9"),n("2877")),S=Object(y["a"])(g,v,h,!1,null,null,null),_=S.exports,C=console.log.bind(console),j={components:{StreamPlayer:_},data:function(){return{option:{appid:"79f26bae6f7b4699a36b227fb662ad53",token:"00679f26bae6f7b4699a36b227fb662ad53IAA/uYrlXNzt7r35O+J7ytmOjbkeNKozXqC854e90ZhqOFBizpcAAAAAEAC0V+LrtP4QYAEAAQC0/hBg",uid:null,channel:"audio_test"},disableJoin:!1,localStream:null,remoteStreams:[]}},props:{msg:String},methods:{joinEvent:function(){var e=this;this.option.appid?this.option.channel?(this.rtc.joinChannel(this.option).then((function(){e.$message({message:"Join Success",type:"success"}),e.rtc.publishStream().then((function(t){e.$message({message:"Publish Success",type:"success"}),e.localStream=t})).catch((function(t){e.$message.error("Publish Failure"),C("publish local error",t)}))})).catch((function(t){e.$message.error("Join Failure"),C("join channel error",t)})),this.disableJoin=!0):this.judge("Channel Name"):this.judge("Appid")},leaveEvent:function(){var e=this;this.disableJoin=!1,this.rtc.leaveChannel().then((function(){e.$message({message:"Leave Success",type:"success"})})).catch((function(t){e.$message.error("Leave Failure"),C("leave error",t)})),this.localStream=null,this.remoteStreams=[]},judge:function(e){this.$notify({title:"Notice",message:"Please enter the ".concat(e),position:"top-left",type:"warning"})}},created:function(){var e=this;this.rtc=new m;var t=this.rtc;t.on("stream-added",(function(e){var n=e.stream;C("[agora] [stream-added] stream-added",n.getId()),t.client.subscribe(n)})),t.on("stream-subscribed",(function(t){var n=t.stream;C("[agora] [stream-subscribed] stream-added",n.getId()),e.remoteStreams.find((function(e){return e.getId()===n.getId()}))||e.remoteStreams.push(n)})),t.on("stream-removed",(function(t){var n=t.stream;C("[agora] [stream-removed] stream-removed",n.getId()),e.remoteStreams=e.remoteStreams.filter((function(e){return e.getId()!==n.getId()}))})),t.on("peer-online",(function(t){e.$message("Peer ".concat(t.uid," is online"))})),t.on("peer-leave",(function(t){e.$message("Peer ".concat(t.uid," already leave")),e.remoteStreams=e.remoteStreams.filter((function(e){return e.getId()!==t.uid}))}))}},k=j,P=(n("da72"),Object(y["a"])(k,r,s,!1,null,"f635f866",null)),w=P.exports,I={name:"App",components:{Home:w}},O=I,x=(n("034f"),Object(y["a"])(O,o,i,!1,null,null,null)),$=x.exports,A=n("5c96"),B=n.n(A);n("0fae");a["default"].use(B.a),a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e($)}}).$mount("#app")},"787c":function(e,t,n){},"85ec":function(e,t,n){},ae90:function(e,t,n){},da72:function(e,t,n){"use strict";var a=n("ae90"),o=n.n(a);o.a}});
//# sourceMappingURL=app.75e434f0.js.map