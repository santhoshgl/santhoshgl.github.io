(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"8b24":function(t,e,s){"use strict";s.r(e);var i=s("bc3a"),o=s.n(i),a=s("039d"),n=s.n(a),l={name:"PageIndex",data(){return{count:100,showVoting:!1,email:"",password:"",isPwd:!0,userDetails:{id:"",name:"",email:"",token:""}}},methods:{getAccessToken(){const t={type:"traditional",deviceId:"Macintosh",deviceBrand:"PC/MAC",data:{email:this.email,password:this.password}},e={Accept:"application/json","Access-Control-Allow-Origin":"*","Content-Type":"application/json"};o.a.post("https://userauth.voot.com/usersV3/v3/login",t,{headers:e}).then((({data:t})=>{console.log(t);const{uId:e,email:s,firstName:i,authToken:{accessToken:o}}=t.data;this.userDetails.email=s,this.userDetails.id=e,this.userDetails.token=o,this.userDetails.name=i,console.log(this.userDetails),this.$q.notify({position:"top",type:"positive",message:"Successfully Fetched the user details. Please click on the voting button."}),this.showVoting=!0})).catch((t=>{this.$q.notify({position:"top",type:"negative",message:"Could not vote shamanth"}),console.log(t)}))},voteForShamanth(){const t=n()("103.98.78.103",16,24);console.log(t);const e={showId:"6b3d31e0-7b1e-11eb-a1af-d93c47ce2886",showName:"BBK Voting",categoryId:"",categoryName:"",contestantId:"c0d4b460-7b1f-11eb-a1af-d93c47ce2886",contestantName:"Shamanth",cycleId:"fa77de00-9603-11eb-a1af-d93c47ce2886",userId:this.userDetails.id,userName:this.userDetails.name,userEmail:this.userDetails.email,region:"in",ip:t,loginProvider:"Traditional",userFormDetails:"",accessToken:this.userDetails.token};for(let s=0;s<this.count;s++){let t=12321312321*Math.random();setTimeout((()=>this.voteRandomly(e,t*s)),t*s),setTimeout((()=>this.voteRandomly(e,t)),t)}},voteRandomly(t,e){console.log(t,e);const s={json:"application/json",form:"multipart/form-data"};o.a.post("https://voting-api.voot.com/v1/addvote",t,{headers:{Accept:s.json,"Content-Type":s.json}}).then((({data:t})=>{console.log(t.id),this.$q.notify({position:"top",type:"positive",message:`${t.message} record ID ${t.id}`})})).catch((t=>{this.$q.notify({position:"top",type:"negative",message:`Could not vote shamanth ${j}`}),console.log(t)}))}}},c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"full-height flex column q-py-md justify-center items-center q-px-xl"},[s("q-card",{staticClass:"flex column q-py-lg q-px-xl",staticStyle:{width:"50%"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.showVoting,expression:"!showVoting"}]},[s("h6",{staticClass:"flex flex-center"},[t._v("\n        Please login with your existing VOOT credentials\n      ")]),t._v(" "),s("q-input",{attrs:{label:"Email",type:t.isPwd?"password":"text"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}},[[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"visibility_off":"visibility"},on:{click:function(e){t.isPwd=!t.isPwd}}})]],2),t._v(" "),s("q-input",{attrs:{label:"Password",type:t.isPwd?"password":"text"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}},[[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"visibility_off":"visibility"},on:{click:function(e){t.isPwd=!t.isPwd}}})]],2),t._v(" "),s("div",{staticClass:"q-pt-lg"},[s("q-btn",{staticStyle:{background:"#ff0080",color:"white"},attrs:{label:"Login"},on:{click:t.getAccessToken}})],1)],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showVoting,expression:"showVoting"}]},[s("div",{staticClass:"q-pt-lg full-width flex flex-center"},[s("q-img",{staticStyle:{height:"140px","max-width":"150px"},attrs:{src:"https://voot-interactivity.s3-ap-south-1.amazonaws.com/voting/contestant/image/Colors%20Kannada/BBK-Contestant-Shamanth_260x210.jpeg"}})],1),t._v(" "),s("div",{staticClass:"q-pt-lg full-width flex flex-center"},[s("q-btn",{staticStyle:{background:"#ff0080",color:"white"},attrs:{label:"Voting 99  Times to Shamanth"},on:{click:t.voteForShamanth}})],1)])])],1)},r=[],d=s("2455"),h=!1,p=null,m=null,u=null,v=Object(d["a"])(l,c,r,h,p,m,u);e["default"]=v.exports}}]);