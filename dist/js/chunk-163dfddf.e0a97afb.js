(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-163dfddf"],{"0301":function(e,t,c){"use strict";c("b926")},2048:function(e,t,c){"use strict";c.r(t);var n=c("7a23");Object(n["A"])("data-v-26eeab58");var o={class:"text mb-2"},r={class:"badge bg-info text-dark ms-1"},i={key:0},a=Object(n["i"])("hr",null,null,-1),l={class:"text-center mb-5"},s={class:"d-flex justify-content-center p-2"},u=Object(n["i"])("hr",null,null,-1),d={class:"text-center mb-4"},b={key:1,class:"text-center fs-5"},p={key:2},m=["placeholder"],O=Object(n["i"])("br",null,null,-1),h=Object(n["i"])("br",null,null,-1),j={key:1,class:"text-center fs-5"};function f(e,t,c,f,v,x){var g=Object(n["G"])("CreateCollection"),C=Object(n["G"])("Collections");return Object(n["x"])(),Object(n["h"])("div",null,[Object(n["i"])("h3",o,[Object(n["j"])(Object(n["J"])(x.namePage)+" ",1),Object(n["i"])("span",r,Object(n["J"])(x.ownerUserRight),1)]),x.readOnly?Object(n["g"])("",!0):(Object(n["x"])(),Object(n["h"])("div",i,[a,Object(n["i"])("h3",l,[Object(n["i"])("strong",null,Object(n["J"])(e.$t("view.page.title-2")),1),Object(n["i"])("div",s,[Object(n["k"])(g,{id:e.$route.params.id,onUpdateCollections:x.updateCollections},null,8,["id","onUpdateCollections"])])])])),u,Object(n["i"])("h3",d,Object(n["J"])(e.$t("view.page.title-3")),1),0==v.ownerCollections.length?(Object(n["x"])(),Object(n["h"])("p",b,Object(n["J"])(e.$t("view.page.text-1")),1)):(Object(n["x"])(),Object(n["h"])("div",p,[Object(n["U"])(Object(n["i"])("input",{class:"form-control p-1 rounded",type:"text",placeholder:e.$t("view.page.search-1"),"onUpdate:modelValue":t[0]||(t[0]=function(e){return v.searchValue=e})},null,8,m),[[n["P"],v.searchValue,void 0,{trim:!0}]]),O,h,x.collections.length>0?(Object(n["x"])(),Object(n["f"])(C,{key:0,collections:x.collections,readOnly:x.readOnly,onUpdateCollections:x.updateCollections},null,8,["collections","readOnly","onUpdateCollections"])):(Object(n["x"])(),Object(n["h"])("p",j,Object(n["J"])(e.$t("view.page.text-2")),1))]))])}Object(n["y"])();var v=c("5530"),x=c("1da1"),g=(c("b0c0"),c("99af"),c("4de4"),c("caad"),c("2532"),c("498a"),c("96cf"),c("fb43"));c("a4d3"),c("e01a");Object(n["A"])("data-v-bed8c2da");var C={class:"card-body"},w={class:"form-outline border rounded-3 mb-2 "},y={class:"form-outline border rounded-3 mb-2 "},E={class:"form-outline border rounded-3 mb-2"},k=["disabled"];function T(e,t,c,o,r,i){var a=Object(n["G"])("DropZone"),l=Object(n["G"])("Multiselect");return Object(n["x"])(),Object(n["h"])("div",{class:Object(n["r"])("card w-100 shadow-sm bg-".concat(e.theme," text-").concat(e.themeText))},[Object(n["i"])("div",C,[Object(n["i"])("form",{onSubmit:t[3]||(t[3]=Object(n["V"])((function(){return i.createCollection&&i.createCollection.apply(i,arguments)}),["prevent"]))},[Object(n["i"])("div",w,[Object(n["k"])(a,{id:c.id},null,8,["id"])]),Object(n["i"])("div",y,[Object(n["U"])(Object(n["i"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.collection.name=e}),type:"text",id:"form8Example1",class:Object(n["r"])("form-control text-".concat(e.themeText))},null,2),[[n["P"],r.collection.name]]),Object(n["i"])("label",{for:"form8Example1",class:Object(n["r"])("form-label fs-6 text-".concat(e.themeText))},Object(n["J"])(e.$t("component.collection.change.create.name")),3)]),Object(n["k"])(l,{modelValue:r.collection.topic,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.collection.topic=e}),placeholder:e.$t("component.collection.change.create.search-1"),label:"name",trackBy:"name",options:e.topics,searchable:!0,class:"mb-2 text-black"},{option:Object(n["T"])((function(e){var t=e.option;return[Object(n["j"])(Object(n["J"])(t.name),1)]})),_:1},8,["modelValue","placeholder","options"]),Object(n["i"])("div",E,[Object(n["U"])(Object(n["i"])("textarea",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return r.collection.description=e}),class:Object(n["r"])("form-control text-".concat(e.themeText)),id:"form4Example3",rows:"4"},null,2),[[n["P"],r.collection.description]]),Object(n["i"])("label",{class:Object(n["r"])("form-label fs-6 text-".concat(e.themeText)),for:"form4Example3"},Object(n["J"])(e.$t("component.collection.change.create.description")),3)]),Object(n["i"])("button",{type:"submit",class:"w-100 btn btn-lg btn-primary",disabled:i.disabled},Object(n["J"])(e.$t("component.collection.change.create.button")),9,k)],32)])],2)}Object(n["y"])();c("a9e3"),c("7db0");var _=c("e583"),$=c("a306"),R=c("5502"),I={components:{DropZone:_["a"],Multiselect:$["a"]},props:{id:{type:Number,required:!0}},data:function(){return{blocked:!1,collection:{name:"",topic:"",description:"",image:""}}},computed:Object(v["a"])(Object(v["a"])({},Object(R["c"])(["topics","theme","themeText","uppy","isAdmin"])),{},{topicId:function(){var e,t=this;return(null===(e=this.topics.find((function(e){return e.name===t.collection.topic})))||void 0===e?void 0:e.id)||-1},disabled:function(){return-1==this.topicId||this.blocked}}),methods:Object(v["a"])(Object(v["a"])({},Object(R["b"])(["CREATE_MY_COLLECTION","CREATE_COLLECTION"])),{},{clearForm:function(){this.collection.image="",this.collection.name="",this.collection.description="",this.collection.topic="",this.uppy.reset()},createMyCollection:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.CREATE_MY_COLLECTION({name:e.collection.name,description:e.collection.description,id_topic:e.topicId,image:e.collection.image});case 2:case"end":return t.stop()}}),t)})))()},createCollectionById:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.CREATE_COLLECTION({id:e.id,name:e.collection.name,description:e.collection.description,id_topic:e.topicId,image:e.collection.image});case 2:case"end":return t.stop()}}),t)})))()},createCollection:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var c,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.blocked=!0,t.next=4,e.uppy.upload();case 4:if(e.collection.image=t.sent,e.collection.image=e.collection.image.successful[0].response.body.msg.name,!e.isAdmin){t.next=11;break}return t.next=9,e.createCollectionById();case 9:t.next=13;break;case 11:return t.next=13,e.createMyCollection();case 13:e.$emit("updateCollections"),e.$toast.success(e.$t("component.collection.change.create.success-1")),e.clearForm(),t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](0),e.$toast.error((null===(c=t.t0.respone)||void 0===c||null===(n=c.data)||void 0===n?void 0:n.msg)||e.$t("component.collection.change.create.error"));case 21:return t.prev=21,e.blocked=!1,setTimeout(e.$toast.clear,3e3),t.finish(21);case 25:case"end":return t.stop()}}),t,null,[[0,18,21,25]])})))()}})};c("d1fb");I.render=T,I.__scopeId="data-v-bed8c2da";var U=I,L={components:{Collections:g["a"],CreateCollection:U},data:function(){return{searchValue:"",owner:{},ownerCollections:[]}},created:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.GET_USER(e.$route.params.id);case 3:return e.owner=t.sent,e.owner||e.$router.push("/page404"),t.next=7,e.updateCollections();case 7:t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),e.$router.push("/page404");case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},computed:Object(v["a"])(Object(v["a"])({},Object(R["c"])(["user","adminRights","isAdmin"])),{},{ownerUserRight:function(){var e,t;return null===(e=this.owner)||void 0===e||null===(t=e.right)||void 0===t?void 0:t.name},isMyPage:function(){return this.user.id==this.$route.params.id},namePage:function(){return this.isMyPage?"".concat(this.user.name," (").concat(this.$t("view.page.title-1"),")"):"".concat(this.owner.name)},readOnly:function(){return!(this.user.id&&(this.isMyPage||this.isAdmin))},collections:function(){var e=this;return this.ownerCollections.filter((function(t){return t.name.trim().toLowerCase().includes(e.searchValue.toLowerCase())}))}}),methods:Object(v["a"])(Object(v["a"])({},Object(R["b"])(["GET_USER","GET_USER_COLLECTIONS","COUNT_COLLECTION_ITEMS"])),{},{updateCollections:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.GET_USER_COLLECTIONS(e.$route.params.id);case 2:e.ownerCollections=t.sent,c=0;case 4:if(!(c<e.ownerCollections.length)){t.next=11;break}return t.next=7,e.COUNT_COLLECTION_ITEMS(e.ownerCollections[c].id);case 7:e.ownerCollections[c].countItems=t.sent;case 8:c++,t.next=4;break;case 11:case"end":return t.stop()}}),t)})))()}})};c("0301");L.render=f,L.__scopeId="data-v-26eeab58";t["default"]=L},b926:function(e,t,c){},d1fb:function(e,t,c){"use strict";c("efa5")},efa5:function(e,t,c){}}]);
//# sourceMappingURL=chunk-163dfddf.e0a97afb.js.map