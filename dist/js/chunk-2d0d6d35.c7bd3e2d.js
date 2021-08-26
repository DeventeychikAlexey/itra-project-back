(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6d35"],{"73cf":function(e,t,r){"use strict";r.r(t);r("99af"),r("b0c0");var c=r("7a23"),a={class:"rounded d-flex justify-content-center"},s={class:"col-xl-4 col-lg-6 col-md-8 col-sm-12 shadow-lg p-5 pb-0 "},o={class:"text-center"},n={class:"text-primary"},i={class:"p-4"},l={class:"mb-4"},m={class:"mb-4"},b={class:"mb-4"},d={class:"mb-4"},u={type:"submit",class:"btn btn-primary btn-block  mb-3"},j={class:"text-center"};function O(e,t,r,O,x,f){var p=Object(c["G"])("Field"),h=Object(c["G"])("ErrorMessage"),w=Object(c["G"])("router-link"),g=Object(c["G"])("Form");return Object(c["x"])(),Object(c["h"])("div",{class:Object(c["r"])("container-fluid bg-".concat(e.theme," text-").concat(e.themeText))},[Object(c["i"])("div",a,[Object(c["i"])("div",s,[Object(c["i"])("div",o,[Object(c["i"])("h3",n,Object(c["J"])(e.$t("view.register.title")),1)]),Object(c["i"])("div",i,[Object(c["k"])(g,{onSubmit:f.register,class:"needs-validation",novalidate:""},{default:Object(c["T"])((function(){return[Object(c["i"])("div",{class:Object(c["r"])("form-outline mb-3 border border-".concat(e.themeText," rounded-3"))},[Object(c["k"])(p,{name:"name",type:"text",id:"form3Example1",class:Object(c["r"])("form-control text-".concat(e.themeText)),rules:x.name},null,8,["class","rules"]),Object(c["i"])("label",{class:Object(c["r"])("form-label text-".concat(e.themeText)),for:"form3Example1"},Object(c["J"])(e.$t("view.register.user.name"))+"*",3)],2),Object(c["i"])("div",l,[Object(c["k"])(h,{class:Object(c["r"])(" note note-danger bg-".concat(e.theme," text-").concat(e.themeText)),name:"name"},null,8,["class"])]),Object(c["i"])("div",{class:Object(c["r"])("form-outline mb-3 border border-".concat(e.themeText," rounded-3"))},[Object(c["k"])(p,{name:"email",type:"email",id:"form3Example2",class:Object(c["r"])("form-control text-".concat(e.themeText)),rules:x.email},null,8,["class","rules"]),Object(c["i"])("label",{class:Object(c["r"])("form-label text-".concat(e.themeText)),for:"form3Example2"},Object(c["J"])(e.$t("view.register.user.email"))+"*",3)],2),Object(c["i"])("div",m,[Object(c["k"])(h,{class:Object(c["r"])(" note note-danger bg-".concat(e.theme," text-").concat(e.themeText)),name:"email"},null,8,["class"])]),Object(c["i"])("div",{class:Object(c["r"])("form-outline mb-3 border border-".concat(e.themeText," rounded-3"))},[Object(c["k"])(p,{name:"password",type:"password",id:"form3Example3",class:Object(c["r"])("form-control text-".concat(e.themeText)),rules:x.password},null,8,["class","rules"]),Object(c["i"])("label",{class:Object(c["r"])("form-label text-".concat(e.themeText)),for:"form3Example3"},Object(c["J"])(e.$t("view.register.user.password"))+"*",3)],2),Object(c["i"])("div",b,[Object(c["k"])(h,{class:Object(c["r"])(" note note-danger bg-".concat(e.theme," text-").concat(e.themeText)),name:"password"},null,8,["class"])]),Object(c["i"])("div",{class:Object(c["r"])("form-outline mb-3 border border-".concat(e.themeText," rounded-3"))},[Object(c["k"])(p,{name:"repeatPassword",type:"password",id:"form3Example4",class:Object(c["r"])("form-control text-".concat(e.themeText)),rules:x.repeatPassword},null,8,["class","rules"]),Object(c["i"])("label",{class:Object(c["r"])("form-label text-".concat(e.themeText)),for:"form3Example4"},Object(c["J"])(e.$t("view.register.user.password2"))+"*",3)],2),Object(c["i"])("div",d,[Object(c["k"])(h,{class:Object(c["r"])(" note note-danger bg-".concat(e.theme," text-").concat(e.themeText)),name:"repeatPassword"},null,8,["class"])]),Object(c["i"])("button",u,Object(c["J"])(e.$t("view.register.button")),1),Object(c["i"])("div",j,[Object(c["i"])("p",null,[Object(c["j"])(Object(c["J"])(e.$t("view.register.text"))+" ",1),Object(c["k"])(w,{to:"/login"},{default:Object(c["T"])((function(){return[Object(c["j"])(Object(c["J"])(e.$t("view.register.route")),1)]})),_:1})])])]})),_:1},8,["onSubmit"])])])])],2)}var x=r("1da1"),f=r("5530"),p=(r("96cf"),r("7bb1")),h=r("506a"),w=r("5502"),g={components:{Field:p["b"],Form:p["c"],ErrorMessage:p["a"]},data:function(){return{name:h["a"]().required(),email:h["a"](this.$t("form.error.string")).required(this.$t("form.error.required")).email(this.$t("form.error.email")),password:h["a"](this.$t("form.error.string")).required(this.$t("form.error.required")).min(6,this.$t("form.error.min")).max(32,this.$t("form.error.max")),repeatPassword:h["a"](this.$t("form.error.string")).required(this.$t("form.error.required")).min(6,this.$t("form.error.min")).max(32,this.$t("form.error.max"))}},computed:Object(f["a"])({},Object(w["c"])(["theme","themeText"])),methods:Object(f["a"])(Object(f["a"])({},Object(w["b"])(["REGISTER","LOGIN"])),{},{register:function(e){var t=this;return Object(x["a"])(regeneratorRuntime.mark((function r(){var c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.REGISTER({login:e.email,password:e.password,password2:e.repeatPassword,name:e.name});case 3:return r.next=5,t.LOGIN({login:e.email,password:e.password});case 5:c=r.sent,t.$router.push("/user/".concat(c.id)),r.next=13;break;case 9:r.prev=9,r.t0=r["catch"](0),t.$toast.error(r.t0.response.data.msg),setTimeout(t.$toast.clear,3e3);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})))()}})};g.render=O;t["default"]=g}}]);
//# sourceMappingURL=chunk-2d0d6d35.c7bd3e2d.js.map