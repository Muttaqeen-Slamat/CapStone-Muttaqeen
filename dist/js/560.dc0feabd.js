"use strict";(self["webpackChunkcapstone_muttaqeen_frontend"]=self["webpackChunkcapstone_muttaqeen_frontend"]||[]).push([[560],{4560:function(e,a,l){l.r(a),l.d(a,{default:function(){return _}});var t=l(641),o=l(3751);const r=e=>((0,t.Qi)("data-v-e7f75454"),e=e(),(0,t.jt)(),e),s=r((()=>(0,t.Lk)("h4",{class:""}," Create Your Profile ",-1))),d={class:"mb-3"},n=r((()=>(0,t.Lk)("p",null,"First Name:",-1))),i={class:"mb-3"},u=r((()=>(0,t.Lk)("p",null,"Last Name:",-1))),m={class:"mb-3"},p=r((()=>(0,t.Lk)("p",null,"Username:",-1))),c={class:"mb-3"},k=r((()=>(0,t.Lk)("p",null,"Age:",-1))),L={class:"mb-3"},y=r((()=>(0,t.Lk)("p",null,"Gender:",-1))),f=r((()=>(0,t.Lk)("option",{value:"Male"},"Male",-1))),g=r((()=>(0,t.Lk)("option",{value:"Female"},"Female",-1))),b=[f,g],h={class:"mb-3"},w=r((()=>(0,t.Lk)("p",null,"Email:",-1))),v={class:"mb-3"},N=r((()=>(0,t.Lk)("p",null,"Password:",-1))),x=r((()=>(0,t.Lk)("div",null,[(0,t.Lk)("button",{type:"submit",class:"btn"},"Sign Up")],-1)));function U(e,a,l,r,f,g){return(0,t.uX)(),(0,t.CE)(t.FK,null,[s,(0,t.Lk)("div",null,[(0,t.Lk)("form",{onSubmit:a[7]||(a[7]=(0,o.D$)(((...e)=>g.register&&g.register(...e)),["prevent"]))},[(0,t.Lk)("div",d,[n,(0,t.bo)((0,t.Lk)("input",{type:"text",class:"form-control w-50 mx-auto",placeholder:"First Name","onUpdate:modelValue":a[0]||(a[0]=e=>f.payload.firstName=e),required:""},null,512),[[o.Jo,f.payload.firstName]])]),(0,t.Lk)("div",i,[u,(0,t.bo)((0,t.Lk)("input",{type:"text",class:"form-control w-50 mx-auto",placeholder:"Last Name","onUpdate:modelValue":a[1]||(a[1]=e=>f.payload.lastName=e),required:""},null,512),[[o.Jo,f.payload.lastName]])]),(0,t.Lk)("div",m,[p,(0,t.bo)((0,t.Lk)("input",{type:"text",class:"form-control w-50 mx-auto",placeholder:"UserName/Alias","onUpdate:modelValue":a[2]||(a[2]=e=>f.payload.userName=e),required:""},null,512),[[o.Jo,f.payload.userName]])]),(0,t.Lk)("div",c,[k,(0,t.bo)((0,t.Lk)("input",{type:"number",class:"form-control w-50 mx-auto",placeholder:"Age","onUpdate:modelValue":a[3]||(a[3]=e=>f.payload.age=e),required:""},null,512),[[o.Jo,f.payload.age]])]),(0,t.Lk)("div",L,[y,(0,t.bo)((0,t.Lk)("select",{type:"text",class:"form-control w-50 mx-auto",placeholder:"Gender","onUpdate:modelValue":a[4]||(a[4]=e=>f.payload.gender=e),required:""},b,512),[[o.u1,f.payload.gender]])]),(0,t.Lk)("div",h,[w,(0,t.bo)((0,t.Lk)("input",{type:"email",class:"form-control w-50 mx-auto",placeholder:"Email","onUpdate:modelValue":a[5]||(a[5]=e=>f.payload.email=e),required:""},null,512),[[o.Jo,f.payload.email]])]),(0,t.Lk)("div",v,[N,(0,t.bo)((0,t.Lk)("input",{type:"password",class:"form-control w-50 mx-auto",placeholder:"Password","onUpdate:modelValue":a[6]||(a[6]=e=>f.payload.emailPwd=e),required:""},null,512),[[o.Jo,f.payload.emailPwd]])]),x],32)])],64)}var q=l(8465),V=l.n(q),P={name:"AddUser",data(){return{payload:{firstName:"",lastName:"",userName:"",gender:"",age:"",email:"",emailPwd:""}}},methods:{async register(){try{await this.$store.dispatch("register",this.payload),V().fire({title:"Registration Successful",text:"Please wait while you being redirected",imageUrl:"https://i.postimg.cc/VkQXmqTy/dancing-duckdancing.gif",imageWidth:250,imageHeight:250,icon:"success",timer:2e3,showConfirmButton:!1})}catch(e){console.error(e),V().fire({title:"Error",text:"Failed to add user",icon:"error",timer:2e3}),setTimeout((()=>{window.location.reload()}),3e3)}}}},F=l(6262);const J=(0,F.A)(P,[["render",U],["__scopeId","data-v-e7f75454"]]);var _=J}}]);
//# sourceMappingURL=560.dc0feabd.js.map