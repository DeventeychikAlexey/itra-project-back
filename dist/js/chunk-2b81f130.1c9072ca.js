(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b81f130"],{"0f3c":function(e,t,i){},"4df4":function(e,t,i){"use strict";var c=i("0366"),n=i("7b0b"),l=i("9bdd"),o=i("e95a"),r=i("50c4"),a=i("8418"),s=i("35a1");e.exports=function(e){var t,i,d,u,m,b,f=n(e),h="function"==typeof this?this:Array,p=arguments.length,O=p>1?arguments[1]:void 0,j=void 0!==O,x=s(f),g=0;if(j&&(O=c(O,p>2?arguments[2]:void 0,2)),void 0==x||h==Array&&o(x))for(t=r(f.length),i=new h(t);t>g;g++)b=j?O(f[g],g):f[g],a(i,g,b);else for(u=x.call(f),m=u.next,i=new h;!(d=m.call(u)).done;g++)b=j?l(u,O,[d.value,g],!0):d.value,a(i,g,b);return i.length=g,i}},"83a7":function(e,t,i){"use strict";i("0f3c")},"9bdd":function(e,t,i){var c=i("825a"),n=i("2a62");e.exports=function(e,t,i,l){try{return l?t(c(i)[0],i[1]):t(i)}catch(o){throw n(e),o}}},a630:function(e,t,i){var c=i("23e7"),n=i("4df4"),l=i("1c7e"),o=!l((function(e){Array.from(e)}));c({target:"Array",stat:!0,forced:o},{from:n})},d28b:function(e,t,i){var c=i("746f");c("iterator")},d520:function(e,t,i){"use strict";var c=i("7a23"),n={class:"d-flex flex-column me-4"};function l(e,t,i,l,o,r){var a=Object(c["G"])("Field");return Object(c["x"])(),Object(c["h"])("div",n,[(Object(c["x"])(!0),Object(c["h"])(c["a"],null,Object(c["E"])(i.fields,(function(e,t){return Object(c["x"])(),Object(c["h"])("div",{key:t,class:"mb-2"},[Object(c["k"])(a,{field:e,index:2*t,type:i.type},null,8,["field","index","type"])])})),128))])}i("99af");var o={class:"form-outline border rounded-3 me-2"},r=["id"],a=["for"],s={key:0,class:"form-outline border rounded-3 "},d=["type","id"],u=["for"],m={key:1},b={class:"form-check d-flex align-items-center"},f=["name","id"],h=["for"],p={class:"form-check d-flex align-items-center"},O=["name","id"],j=["for"];function x(e,t,i,n,l,x){return Object(c["x"])(),Object(c["h"])("div",{class:Object(c["r"])("d-flex bg-".concat(e.theme," text-").concat(e.themeText))},[Object(c["i"])("div",o,[Object(c["U"])(Object(c["i"])("input",{type:"text",class:Object(c["r"])("form-control active text-".concat(e.themeText)),id:"fieldTitle".concat(i.index).concat(i.type),"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.field.title=e})},null,10,r),[[c["P"],i.field.title]]),Object(c["i"])("label",{class:Object(c["r"])("form-label fs-6 text-".concat(e.themeText)),for:"fieldTitle".concat(i.index).concat(i.type)},Object(c["J"])(e.$t("component.collection.item.change.fieldItem.name"))+" "+Object(c["J"])(i.index/2+1),11,a)]),"boolean"!=i.type?(Object(c["x"])(),Object(c["h"])("div",s,[Object(c["U"])(Object(c["i"])("input",{type:i.type,class:Object(c["r"])("form-control active text-".concat(e.themeText)),id:"fieldValue".concat(i.index).concat(i.type),"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.field.value=e})},null,10,d),[[c["N"],i.field.value]]),Object(c["i"])("label",{class:Object(c["r"])("form-label fs-6 text-".concat(e.themeText)),for:"fieldValue".concat(i.index).concat(i.type)},Object(c["J"])(e.$t("component.collection.item.change.fieldItem.value"))+" "+Object(c["J"])(i.index/2+1),11,u)])):(Object(c["x"])(),Object(c["h"])("div",m,[Object(c["i"])("div",b,[Object(c["U"])(Object(c["i"])("input",{class:"form-check-input",type:"radio",name:"fieldValue".concat(i.index),id:"fieldValue".concat(i.index).concat(i.type),value:"true","onUpdate:modelValue":t[2]||(t[2]=function(e){return i.field.value=e}),checked:"true"},null,8,f),[[c["O"],i.field.value]]),Object(c["i"])("label",{class:"form-check-label fs-6",for:"fieldValue".concat(i.index).concat(i.type)},Object(c["J"])(e.$t("component.collection.item.change.fieldItem.true")),9,h)]),Object(c["i"])("div",p,[Object(c["U"])(Object(c["i"])("input",{class:"form-check-input",type:"radio",name:"fieldValue".concat(i.index),id:"fieldValue".concat(i.index+1).concat(i.type),value:"false","onUpdate:modelValue":t[3]||(t[3]=function(e){return i.field.value=e})},null,8,O),[[c["O"],i.field.value]]),Object(c["i"])("label",{class:"form-check-label fs-6",for:"fieldValue".concat(i.index+1).concat(i.type)},Object(c["J"])(e.$t("component.collection.item.change.fieldItem.false")),9,j)])]))],2)}var g=i("5530"),y=(i("a9e3"),i("5502")),v={props:{index:{type:Number,required:!0},field:{type:Object,required:!0},type:{type:String,required:!0}},computed:Object(g["a"])({},Object(y["c"])(["theme","themeText"]))};v.render=x;var I=v,T={props:{fields:{type:Array,required:!0},type:{type:String,required:!0}},components:{Field:I}};T.render=l;t["a"]=T},f27d:function(e,t,i){"use strict";i.r(t);var c=i("7a23"),n={class:"mb-2"},l=Object(c["i"])("hr",null,null,-1),o={class:"text-center mb-5"},r={class:"d-flex justify-content-center p-2"};function a(e,t,i,a,s,d){var u=Object(c["G"])("Item"),m=Object(c["G"])("Edit");return Object(c["x"])(),Object(c["h"])("div",null,[Object(c["i"])("div",n,[d.updatedItem?(Object(c["x"])(),Object(c["f"])(u,{key:0,item:d.updatedItem,readOnly:s.readOnly},null,8,["item","readOnly"])):Object(c["g"])("",!0)]),Object(c["i"])("div",null,[l,Object(c["i"])("h3",o,[Object(c["i"])("strong",null,Object(c["J"])(e.$t("view.item-edit.title-1")),1),Object(c["i"])("div",r,[d.updatedItem?(Object(c["x"])(),Object(c["f"])(m,{key:0,item:d.updatedItem},null,8,["item"])):Object(c["g"])("",!0)])])])])}var s=i("1da1"),d=i("5530");i("96cf"),i("99af"),i("b0c0");Object(c["A"])("data-v-2a250b48");var u={class:"card-body"},m={class:"form-outline border rounded-3 mb-2"},b={class:"text-start mt-3"},f={class:" row mb-4 g-2"},h={class:"col-xl-4 col-md-6 col-12 form-outline border rounded-3"},p=["max","min"],O={class:"col-xl-4 col-md-6 col-12 form-outline border rounded-3 "},j=["max","min"],x={class:"col-xl-4 col-md-6 col-12 form-outline border rounded-3 "},g=["max","min"],y={class:"col-xl-4 col-md-6 col-12 form-outline border rounded-3 "},v=["max","min"],I={class:"col-xl-4 col-md-6 col-12 form-outline border rounded-3  "},T=["max","min"],F={class:"row mb-4"},k={key:0,class:"col-xl-4 col-md-6 col-12"},w={class:"text-start mt-3"},C={key:1,class:"col-xl-4 col-md-6 col-12"},S={class:"text-start mt-3"},N={key:2,class:"col-xl-4 col-md-6 col-12"},D={class:"text-start mt-3"},E={key:3,class:"col-xl-4 col-md-6 col-12"},U={class:"text-start mt-3"},$={key:4,class:"col-xl-4 col-md-6 col-12"},B={class:"text-start mt-3"},J=["disabled"];function V(e,t,i,n,l,o){var r=Object(c["G"])("Multiselect"),a=Object(c["G"])("Fields");return Object(c["x"])(),Object(c["h"])("div",{class:Object(c["r"])("card w-100 shadow-sm bg-".concat(e.theme," text-").concat(e.themeText))},[Object(c["i"])("div",u,[Object(c["i"])("form",{onSubmit:t[7]||(t[7]=Object(c["V"])((function(){return o.editItem&&o.editItem.apply(o,arguments)}),["prevent"]))},[Object(c["i"])("div",m,[Object(c["U"])(Object(c["i"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.collectionItem.name=e}),type:"text",id:"form8Example1",class:Object(c["r"])("form-control ".concat(l.collectionItem.name&&"active"," text-").concat(e.themeText))},null,2),[[c["P"],l.collectionItem.name]]),Object(c["i"])("label",{for:"form8Example1",class:Object(c["r"])("form-label fs-6 text-".concat(e.themeText," "))},Object(c["J"])(this.$t("component.collection.item.change.edit.name")),3)]),Object(c["k"])(r,{modelValue:l.newTags,"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.newTags=e}),mode:"tags",placeholder:this.$t("component.collection.item.change.edit.search-1"),options:e.tags,searchable:!0,createTag:!0,label:"tag",trackBy:"tag",class:"text-black"},{option:Object(c["T"])((function(e){var t=e.option;return[Object(c["j"])(Object(c["J"])(t.tag),1)]})),_:1},8,["modelValue","placeholder","options"]),Object(c["i"])("h6",b,Object(c["J"])(this.$t("component.collection.item.change.edit.countFields")),1),Object(c["i"])("div",f,[Object(c["i"])("div",h,[Object(c["U"])(Object(c["i"])("input",{type:"number",id:"typeNumber1",max:l.maxCount,min:l.minCount,class:Object(c["r"])("form-control active text-".concat(e.themeText)),"onUpdate:modelValue":t[2]||(t[2]=function(e){return l.countFieldsNumber=e})},null,10,p),[[c["P"],l.countFieldsNumber,void 0,{number:!0}]]),Object(c["i"])("label",{class:Object(c["r"])("form-label text-".concat(e.themeText)),for:"typeNumber1"},Object(c["J"])(this.$t("component.collection.item.change.edit.fieldNumber")),3)]),Object(c["i"])("div",O,[Object(c["U"])(Object(c["i"])("input",{type:"number",id:"typeNumber2",max:l.maxCount,min:l.minCount,class:Object(c["r"])("form-control active text-".concat(e.themeText)),"onUpdate:modelValue":t[3]||(t[3]=function(e){return l.countFieldsText=e})},null,10,j),[[c["P"],l.countFieldsText,void 0,{number:!0}]]),Object(c["i"])("label",{class:Object(c["r"])("form-label text-".concat(e.themeText)),for:"typeNumber2"},Object(c["J"])(this.$t("component.collection.item.change.edit.fieldText")),3)]),Object(c["i"])("div",x,[Object(c["U"])(Object(c["i"])("input",{type:"number",id:"typeNumber3",max:l.maxCount,min:l.minCount,class:Object(c["r"])("form-control active text-".concat(e.themeText)),"onUpdate:modelValue":t[4]||(t[4]=function(e){return l.countFieldsString=e})},null,10,g),[[c["P"],l.countFieldsString,void 0,{number:!0}]]),Object(c["i"])("label",{class:Object(c["r"])("form-label text-".concat(e.themeText)),for:"typeNumber3"},Object(c["J"])(this.$t("component.collection.item.change.edit.fieldString")),3)]),Object(c["i"])("div",y,[Object(c["U"])(Object(c["i"])("input",{type:"number",id:"typeNumber4",max:l.maxCount,min:l.minCount,class:Object(c["r"])("form-control active text-".concat(e.themeText)),"onUpdate:modelValue":t[5]||(t[5]=function(e){return l.countFieldsDate=e})},null,10,v),[[c["P"],l.countFieldsDate,void 0,{number:!0}]]),Object(c["i"])("label",{class:Object(c["r"])("form-label text-".concat(e.themeText)),for:"typeNumber4"},Object(c["J"])(this.$t("component.collection.item.change.edit.fieldDate")),3)]),Object(c["i"])("div",I,[Object(c["U"])(Object(c["i"])("input",{type:"number",id:"typeNumber5",max:l.maxCount,min:l.minCount,class:Object(c["r"])("form-control active text-".concat(e.themeText)),"onUpdate:modelValue":t[6]||(t[6]=function(e){return l.countFieldsBoolean=e})},null,10,T),[[c["P"],l.countFieldsBoolean,void 0,{number:!0}]]),Object(c["i"])("label",{class:Object(c["r"])("form-label text-".concat(e.themeText)),for:"typeNumber5"},Object(c["J"])(this.$t("component.collection.item.change.edit.fieldBool")),3)])]),Object(c["i"])("div",F,[l.collectionItem.fieldsNumber.length>0?(Object(c["x"])(),Object(c["h"])("div",k,[Object(c["i"])("h6",w,Object(c["J"])(this.$t("component.collection.item.change.edit.fieldNumber-title")),1),Object(c["k"])(a,{fields:l.collectionItem.fieldsNumber,type:"number"},null,8,["fields"])])):Object(c["g"])("",!0),l.collectionItem.fieldsText.length>0?(Object(c["x"])(),Object(c["h"])("div",C,[Object(c["i"])("h6",S,Object(c["J"])(this.$t("component.collection.item.change.edit.fieldText-title")),1),Object(c["k"])(a,{fields:l.collectionItem.fieldsText,type:"text"},null,8,["fields"])])):Object(c["g"])("",!0),l.collectionItem.fieldsString.length>0?(Object(c["x"])(),Object(c["h"])("div",N,[Object(c["i"])("h6",D,Object(c["J"])(this.$t("component.collection.item.change.edit.fieldString-title")),1),Object(c["k"])(a,{fields:l.collectionItem.fieldsString,type:"text"},null,8,["fields"])])):Object(c["g"])("",!0),l.collectionItem.fieldsDate.length>0?(Object(c["x"])(),Object(c["h"])("div",E,[Object(c["i"])("h6",U,Object(c["J"])(this.$t("component.collection.item.change.edit.fieldDate-title")),1),Object(c["k"])(a,{fields:l.collectionItem.fieldsDate,type:"date"},null,8,["fields"])])):Object(c["g"])("",!0),l.collectionItem.fieldsBoolean.length>0?(Object(c["x"])(),Object(c["h"])("div",$,[Object(c["i"])("h6",B,Object(c["J"])(this.$t("component.collection.item.change.edit.fieldBool-title")),1),Object(c["k"])(a,{fields:l.collectionItem.fieldsBoolean,type:"boolean"},null,8,["fields"])])):Object(c["g"])("",!0)]),Object(c["i"])("button",{type:"submit",class:"w-100 btn btn-lg btn-secondary",disabled:o.disabled},Object(c["J"])(this.$t("component.collection.item.change.edit.button")),9,J)],32)])],2)}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,c=new Array(t);i<t;i++)c[i]=e[i];return c}function _(e){if(Array.isArray(e))return A(e)}Object(c["y"])();i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function M(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}i("fb6a");function R(e,t){if(e){if("string"===typeof e)return A(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?A(e,t):void 0}}function G(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function P(e){return _(e)||M(e)||R(e)||G()}i("d81d");var q=i("a306"),L=i("d520"),Y=i("5502"),z={components:{Multiselect:q["a"],Fields:L["a"]},props:{item:{type:Object,required:!0}},data:function(){return{newTags:this.item.tags.map((function(e){var t=e.tag;return t})),blocked:!1,maxCount:6,minCount:0,collectionItem:Object.assign({},this.item),countFieldsNumber:0,countFieldsText:0,countFieldsString:0,countFieldsDate:0,countFieldsBoolean:0,fieldsNumberCopy:[],fieldsTextCopy:[],fieldsStringCopy:[],fieldsDateCopy:[],fieldsBooleanCopy:[]}},computed:Object(d["a"])(Object(d["a"])({},Object(Y["c"])(["topics","theme","themeText","isAdmin","tags"])),{},{disabled:function(){return this.blocked}}),watch:{countFieldsNumber:function(e){this.collectionItem.fieldsNumber=this.createFields(this.fieldsNumberCopy,e)},countFieldsText:function(e){this.collectionItem.fieldsText=this.createFields(this.fieldsTextCopy,e)},countFieldsString:function(e){this.collectionItem.fieldsString=this.createFields(this.fieldsStringCopy,e)},countFieldsDate:function(e){this.collectionItem.fieldsDate=this.createFields(this.fieldsDateCopy,e,"date")},countFieldsBoolean:function(e){this.collectionItem.fieldsBoolean=this.createFields(this.fieldsBooleanCopy,e)}},methods:Object(d["a"])(Object(d["a"])({},Object(Y["b"])(["EDIT_MY_ITEM","EDIT_ITEM","UPDATE_TAGS"])),{},{createFields:function(e,t){for(var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c=0;c<t&&c<this.maxCount;c++)if(e[c]||"date"!==i)e[c]||(e[c]={title:"",value:""});else{var n=new Date;e[c]={title:"",value:"".concat(n.getFullYear(),"-").concat(n.getMonth()+1>=10?n.getMonth()+1:"0"+(n.getMonth()+1),"-").concat(n.getDate()>=10?n.getDate():"0"+n.getDay())}}return t>this.maxCount?e.slice(0,this.maxCount):e.slice(0,t)},editMyItem:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.EDIT_MY_ITEM({itemId:e.collectionItem.id,name:e.collectionItem.name,tags:e.newTags,fieldsNumber:e.collectionItem.fieldsNumber,fieldsText:e.collectionItem.fieldsText,fieldsString:e.collectionItem.fieldsString,fieldsDate:e.collectionItem.fieldsDate,fieldsBoolean:e.collectionItem.fieldsBoolean});case 2:case"end":return t.stop()}}),t)})))()},editItemById:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.EDIT_ITEM({itemId:e.collectionItem.id,name:e.collectionItem.name,tags:e.newTags,fieldsNumber:e.collectionItem.fieldsNumber,fieldsText:e.collectionItem.fieldsText,fieldsString:e.collectionItem.fieldsString,fieldsDate:e.collectionItem.fieldsDate,fieldsBoolean:e.collectionItem.fieldsBoolean});case 2:case"end":return t.stop()}}),t)})))()},editItem:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.blocked=!0,!e.isAdmin){t.next=7;break}return t.next=5,e.editItemById();case 5:t.next=9;break;case 7:return t.next=9,e.editMyItem();case 9:return t.next=11,e.UPDATE_TAGS();case 11:e.$router.push("/collection/".concat(e.item.id_collection)),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](0),e.$toast.error((null===(i=t.t0.response.data)||void 0===i?void 0:i.msg)||e.$t("component.collection.item.change.edit.error"));case 17:return t.prev=17,e.blocked=!1,setTimeout(e.$toast.clear,3e3),t.finish(17);case 21:case"end":return t.stop()}}),t,null,[[0,14,17,21]])})))()}}),created:function(){this.item&&(this.countFieldsNumber=this.item.fieldsInteger.length,this.countFieldsText=this.item.fieldsText.length,this.countFieldsString=this.item.fieldsString.length,this.countFieldsDate=this.item.fieldsDate.length,this.countFieldsBoolean=this.item.fieldsBoolean.length,this.fieldsNumberCopy=P(this.item.fieldsInteger),this.fieldsTextCopy=P(this.item.fieldsText),this.fieldsStringCopy=P(this.item.fieldsString),this.fieldsDateCopy=P(this.item.fieldsDate),this.fieldsBooleanCopy=P(this.item.fieldsBoolean),this.collectionItem.fieldsNumber=this.createFields(this.fieldsNumberCopy,this.countFieldsNumber),this.collectionItem.fieldsText=this.createFields(this.fieldsTextCopy,this.countFieldsText),this.collectionItem.fieldsString=this.createFields(this.fieldsStringCopy,this.countFieldsString),this.collectionItem.fieldsDate=this.createFields(this.fieldsDateCopy,this.countFieldsDate,"date"),this.collectionItem.fieldsBoolean=this.createFields(this.fieldsBooleanCopy,this.countFieldsBoolean))}};i("83a7");z.render=V,z.__scopeId="data-v-2a250b48";var H=z,K=i("64e3"),Q={components:{Edit:H,Item:K["a"]},data:function(){return{item:null,readOnly:!0}},computed:Object(d["a"])(Object(d["a"])({},Object(Y["c"])(["user","isAdmin"])),{},{updatedItem:function(){return this.item},isMyPage:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var i,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.GET_USER_COLLECTIONS(null===(i=e.user)||void 0===i?void 0:i.id);case 2:return c=t.sent,t.abrupt("return",c.some((function(t){return t.id===e.item.id_collection})));case 4:case"end":return t.stop()}}),t)})))()},restricted:function(){return!(this.user.id&&(this.isMyPage||this.isAdmin))}}),methods:Object(d["a"])({},Object(Y["b"])(["GET_ITEM","GET_USER_COLLECTIONS"])),created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.GET_ITEM(e.$route.params.id);case 2:e.item=t.sent,e.item&&!e.restricted||e.$router.push("/page404");case 4:case"end":return t.stop()}}),t)})))()}};Q.render=a;t["default"]=Q}}]);
//# sourceMappingURL=chunk-2b81f130.1c9072ca.js.map