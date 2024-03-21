"use strict";(self["webpackChunkcapstone_muttaqeen_frontend"]=self["webpackChunkcapstone_muttaqeen_frontend"]||[]).push([[739],{7739:function(e,a,t){t.r(a),t.d(a,{default:function(){return oa}});var l=t(641),o=t(33);const d=e=>((0,l.Qi)("data-v-387c1379"),e=e(),(0,l.jt)(),e),s={class:"container"},r={class:"table-responsive"},n={class:"table table-hover"},u=d((()=>(0,l.Lk)("thead",null,[(0,l.Lk)("tr",null,[(0,l.Lk)("th",null,"User ID"),(0,l.Lk)("th",null,"First name"),(0,l.Lk)("th",null,"Last name"),(0,l.Lk)("th",null,"Username/Alias"),(0,l.Lk)("th",null,"User age"),(0,l.Lk)("th",null,"Gender"),(0,l.Lk)("th",null,"Email address"),(0,l.Lk)("th",null,"User role"),(0,l.Lk)("th",null,"Action")])],-1))),c={key:0},i={class:"d-flex gap-2"},p=["onClick"],m=d((()=>(0,l.Lk)("i",{class:"bi bi-trash"},null,-1))),b={class:"container"},k={class:"table-responsive"},L={class:"table table-hover"},y=d((()=>(0,l.Lk)("thead",null,[(0,l.Lk)("tr",null,[(0,l.Lk)("th",null,"Product ID"),(0,l.Lk)("th",null,"Image"),(0,l.Lk)("th",null,"Product Name"),(0,l.Lk)("th",null,"Product Category"),(0,l.Lk)("th",null,"Product Price"),(0,l.Lk)("th",null,"Product Quantity"),(0,l.Lk)("th",null,"Product Description"),(0,l.Lk)("th",null,"Action")])],-1))),h={key:0},v=["src"],f={class:"d-flex flex-column gap-4"},g=["onClick"],x=d((()=>(0,l.Lk)("i",{class:"bi bi-trash"},null,-1))),U={key:0},w=d((()=>(0,l.Lk)("h2",null,"User's Cart",-1)));function P(e,a,t,d,P,D){const I=(0,l.g2)("AddUser"),C=(0,l.g2)("updateUser"),N=(0,l.g2)("AddProduct"),J=(0,l.g2)("updateProduct");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("div",null,[(0,l.bF)(I)]),(0,l.Lk)("div",null,[(0,l.Lk)("div",s,[(0,l.Lk)("div",r,[(0,l.Lk)("table",n,[u,D.users?((0,l.uX)(),(0,l.CE)("tbody",c,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(D.users,(e=>((0,l.uX)(),(0,l.CE)("tr",{key:e.userID},[(0,l.Lk)("td",null,(0,o.v_)(e.userID),1),(0,l.Lk)("td",null,(0,o.v_)(e.firstName),1),(0,l.Lk)("td",null,(0,o.v_)(e.lastName),1),(0,l.Lk)("td",null,(0,o.v_)(e.userName),1),(0,l.Lk)("td",null,(0,o.v_)(e.age),1),(0,l.Lk)("td",null,(0,o.v_)(e.gender),1),(0,l.Lk)("td",null,(0,o.v_)(e.email),1),(0,l.Lk)("td",null,(0,o.v_)(e.userRole),1),(0,l.Lk)("td",i,[(0,l.bF)(C,{user:e},null,8,["user"]),(0,l.Lk)("button",{id:"deleteUse",class:"btn deleteButton",onClick:a=>D.deleteUser(e.userID)},[m,(0,l.eW)(" Delete ")],8,p)])])))),128))])):(0,l.Q3)("",!0)])])]),(0,l.Lk)("div",null,[(0,l.bF)(N)]),(0,l.Lk)("div",b,[(0,l.Lk)("div",k,[(0,l.Lk)("table",L,[y,D.products?((0,l.uX)(),(0,l.CE)("tbody",h,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(D.products,(e=>((0,l.uX)(),(0,l.CE)("tr",{key:e.prodID},[(0,l.Lk)("td",null,(0,o.v_)(e.prodID),1),(0,l.Lk)("td",null,[(0,l.Lk)("img",{class:"img-fluid",id:"prodImg",src:e.img,alt:""},null,8,v)]),(0,l.Lk)("td",null,(0,o.v_)(e.prodName),1),(0,l.Lk)("td",null,(0,o.v_)(e.category),1),(0,l.Lk)("td",null,"R "+(0,o.v_)(e.prodPrice),1),(0,l.Lk)("td",null,(0,o.v_)(e.quantity),1),(0,l.Lk)("td",null,(0,o.v_)(e.prodDesc),1),(0,l.Lk)("td",f,[(0,l.bF)(J,{product:e},null,8,["product"]),(0,l.Lk)("button",{id:"deleteBut",class:"btn deleteButton",onClick:a=>D.deleteProduct(e.prodID)},[x,(0,l.eW)(" Delete ")],8,g)])])))),128))])):(0,l.Q3)("",!0)])])]),D.cart?((0,l.uX)(),(0,l.CE)("div",U,[w,(0,l.Lk)("ul",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(D.cart,(e=>((0,l.uX)(),(0,l.CE)("li",{key:e.cartID},(0,o.v_)(e.prodName)+" - Quantity: "+(0,o.v_)(e.quantity),1)))),128))])])):(0,l.Q3)("",!0)])],64)}var D=t(3751);const I=e=>((0,l.Qi)("data-v-21e62502"),e=e(),(0,l.jt)(),e),C=I((()=>(0,l.Lk)("button",{type:"button ",class:"btn modalButton","data-bs-toggle":"modal","data-bs-target":"#exampleModal"}," Add User ",-1))),N={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},J={class:"modal-dialog modal-dialog-centered"},V={class:"modal-content"},_=I((()=>(0,l.Lk)("div",{class:"modal-header"},[(0,l.Lk)("h1",{class:"modal-title fs-5",id:"exampleModalLabel"},"User Details"),(0,l.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1))),A={class:"modal-body"},E={class:"mb-3"},F={class:"mb-3"},q={class:"mb-3"},M={class:"mb-3"},X={class:"mb-3"},$={class:"mb-3"},Q={class:"mb-3"},B={class:"mb-3"},R={class:"mb-3"},K=I((()=>(0,l.Lk)("div",{class:"modal-footer"},[(0,l.Lk)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close"),(0,l.Lk)("button",{type:"submit",class:"btn btn-success"},"Add User")],-1)));function S(e,a,t,o,d,s){return(0,l.uX)(),(0,l.CE)(l.FK,null,[C,(0,l.Lk)("div",N,[(0,l.Lk)("div",J,[(0,l.Lk)("div",V,[_,(0,l.Lk)("div",A,[(0,l.Lk)("form",{onSubmit:a[9]||(a[9]=(0,D.D$)(((...e)=>s.register&&s.register(...e)),["prevent"]))},[(0,l.Lk)("div",E,[(0,l.bo)((0,l.Lk)("input",{type:"number",class:"form-control w-50 mx-auto",placeholder:"User ID","onUpdate:modelValue":a[0]||(a[0]=e=>d.payload.userID=e)},null,512),[[D.Jo,d.payload.userID]])]),(0,l.Lk)("div",F,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:"form-control w-50 mx-auto",placeholder:"First Name","onUpdate:modelValue":a[1]||(a[1]=e=>d.payload.firstName=e)},null,512),[[D.Jo,d.payload.firstName]])]),(0,l.Lk)("div",q,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:"form-control w-50 mx-auto",placeholder:"Last Name","onUpdate:modelValue":a[2]||(a[2]=e=>d.payload.lastName=e)},null,512),[[D.Jo,d.payload.lastName]])]),(0,l.Lk)("div",M,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:"form-control w-50 mx-auto",placeholder:"UserName/Alias","onUpdate:modelValue":a[3]||(a[3]=e=>d.payload.userName=e)},null,512),[[D.Jo,d.payload.userName]])]),(0,l.Lk)("div",X,[(0,l.bo)((0,l.Lk)("input",{type:"number",class:"form-control w-50 mx-auto",placeholder:"Age","onUpdate:modelValue":a[4]||(a[4]=e=>d.payload.age=e)},null,512),[[D.Jo,d.payload.age]])]),(0,l.Lk)("div",$,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:"form-control w-50 mx-auto",placeholder:"Gender","onUpdate:modelValue":a[5]||(a[5]=e=>d.payload.gender=e)},null,512),[[D.Jo,d.payload.gender]])]),(0,l.Lk)("div",Q,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:"form-control w-50 mx-auto",placeholder:"Role","onUpdate:modelValue":a[6]||(a[6]=e=>d.payload.userRole=e)},null,512),[[D.Jo,d.payload.userRole]])]),(0,l.Lk)("div",B,[(0,l.bo)((0,l.Lk)("input",{type:"email",class:"form-control w-50 mx-auto",placeholder:"Email","onUpdate:modelValue":a[7]||(a[7]=e=>d.payload.email=e)},null,512),[[D.Jo,d.payload.email]])]),(0,l.Lk)("div",R,[(0,l.bo)((0,l.Lk)("input",{type:"password",class:"form-control w-50 mx-auto",placeholder:"Password","onUpdate:modelValue":a[8]||(a[8]=e=>d.payload.emailPwd=e)},null,512),[[D.Jo,d.payload.emailPwd]])]),K],32)])])])])],64)}var T=t(8465),j=t.n(T),G={name:"AddUser",data(){return{payload:{userID:"",firstName:"",lastName:"",userName:"",userRole:"",gender:"",age:"",email:"",emailPwd:""}}},methods:{async register(){try{await this.$store.dispatch("register",this.payload),j().fire({title:"Added Successful",text:"User has been added successfully!",icon:"success",timer:2e3,showConfirmButton:!1}),setTimeout((()=>{window.location.reload()}),3e3)}catch(e){console.error(e),j().fire({title:"Error",text:"Failed to add user",icon:"error",timer:2e3}),setTimeout((()=>{window.location.reload()}),3e3)}}}},W=t(6262);const z=(0,W.A)(G,[["render",S],["__scopeId","data-v-21e62502"]]);var O=z;const Y=e=>((0,l.Qi)("data-v-f7fbed28"),e=e(),(0,l.jt)(),e),H=Y((()=>(0,l.Lk)("button",{type:"button ",class:"btn modalButton","data-bs-toggle":"modal","data-bs-target":"#addproductModal"}," Add Product ",-1))),Z={class:"modal fade",id:"addproductModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},ee={class:"modal-dialog modal-dialog-centered"},ae={class:"modal-content"},te=Y((()=>(0,l.Lk)("div",{class:"modal-header"},[(0,l.Lk)("h1",{class:"modal-title fs-5",id:"exampleModalLabel"},"Product Details"),(0,l.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1))),le={class:"modal-body"},oe={class:"mb-3"},de={class:"mb-3"},se={class:"mb-3"},re={class:"mb-3"},ne={class:"mb-3"},ue={class:"mb-3"},ce={class:"mb-3"},ie=Y((()=>(0,l.Lk)("div",{class:"modal-footer"},[(0,l.Lk)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close"),(0,l.Lk)("button",{type:"submit",class:"btn btn-success"},"Add Product")],-1)));function pe(e,a,t,o,d,s){return(0,l.uX)(),(0,l.CE)(l.FK,null,[H,(0,l.Lk)("div",Z,[(0,l.Lk)("div",ee,[(0,l.Lk)("div",ae,[te,(0,l.Lk)("div",le,[(0,l.Lk)("form",{onSubmit:a[7]||(a[7]=(0,D.D$)(((...e)=>s.addProduct&&s.addProduct(...e)),["prevent"]))},[(0,l.Lk)("div",oe,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:"form-control w-50 mx-auto",placeholder:"Prod ID","onUpdate:modelValue":a[0]||(a[0]=e=>d.payload.prodID=e)},null,512),[[D.Jo,d.payload.prodID]])]),(0,l.Lk)("div",de,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:"form-control w-50 mx-auto",placeholder:"Product Name","onUpdate:modelValue":a[1]||(a[1]=e=>d.payload.prodName=e)},null,512),[[D.Jo,d.payload.prodName]])]),(0,l.Lk)("div",se,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:"form-control w-50 mx-auto",placeholder:"Product Image","onUpdate:modelValue":a[2]||(a[2]=e=>d.payload.img=e)},null,512),[[D.Jo,d.payload.img]])]),(0,l.Lk)("div",re,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:"form-control w-50 mx-auto",placeholder:"Product Category","onUpdate:modelValue":a[3]||(a[3]=e=>d.payload.category=e)},null,512),[[D.Jo,d.payload.category]])]),(0,l.Lk)("div",ne,[(0,l.bo)((0,l.Lk)("input",{type:"number",class:"form-control w-50 mx-auto",placeholder:"Quantity","onUpdate:modelValue":a[4]||(a[4]=e=>d.payload.quantity=e)},null,512),[[D.Jo,d.payload.quantity]])]),(0,l.Lk)("div",ue,[(0,l.bo)((0,l.Lk)("input",{type:"number",class:"form-control w-50 mx-auto",placeholder:"Amount","onUpdate:modelValue":a[5]||(a[5]=e=>d.payload.prodPrice=e)},null,512),[[D.Jo,d.payload.prodPrice]])]),(0,l.Lk)("div",ce,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:"form-control w-50 mx-auto",placeholder:"Description","onUpdate:modelValue":a[6]||(a[6]=e=>d.payload.prodDesc=e)},null,512),[[D.Jo,d.payload.prodDesc]])]),ie],32)])])])])],64)}var me={name:"AddProduct",data(){return{payload:{prodID:"",prodName:"",img:"https://i.postimg.cc/XJYqPq88/0-j-Gm-Qz-OLa-Eobi-Nkl-D.png",category:"",quantity:"",prodPrice:"",prodDesc:""}}},computed:{message(){return this.store.state.message}},methods:{async addProduct(){try{await this.$store.dispatch("addProduct",this.payload),j().fire({title:"Added Successful",text:"Product has been added successfully!",icon:"success",timer:2e3,showConfirmButton:!1}),setTimeout((()=>{window.location.reload()}),3e3)}catch(e){console.error(e),j().fire({title:"Error",text:"Failed to add user",icon:"error",timer:2e3}),setTimeout((()=>{window.location.reload()}),3e3)}}}};const be=(0,W.A)(me,[["render",pe],["__scopeId","data-v-f7fbed28"]]);var ke=be;const Le=e=>((0,l.Qi)("data-v-40e97518"),e=e(),(0,l.jt)(),e),ye=Le((()=>(0,l.Lk)("button",{type:"button ",class:"btn modalButton","data-bs-toggle":"modal","data-bs-target":"#updateUserModal"},[(0,l.Lk)("i",{class:"bi bi-pencil-square"}),(0,l.eW)(" Update ")],-1))),he={class:"modal fade",id:"updateUserModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},ve={class:"modal-dialog modal-dialog-centered"},fe={class:"modal-content"},ge=Le((()=>(0,l.Lk)("div",{class:"modal-header"},[(0,l.Lk)("h1",{class:"modal-title fs-5",id:"exampleModalLabel"},"User Details"),(0,l.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1))),xe={class:"modal-body"},Ue={class:"mb-3"},we={class:"mb-3"},Pe={class:"mb-3"},De={class:"mb-3"},Ie={class:"mb-3"},Ce={class:"mb-3"},Ne={class:"mb-3"},Je={class:"modal-footer"},Ve=Le((()=>(0,l.Lk)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1)));function _e(e,a,t,o,d,s){return(0,l.uX)(),(0,l.CE)(l.FK,null,[ye,(0,l.Lk)("div",he,[(0,l.Lk)("div",ve,[(0,l.Lk)("div",fe,[ge,(0,l.Lk)("div",xe,[(0,l.Lk)("form",{onSubmit:a[8]||(a[8]=(0,D.D$)(((...e)=>s.updateUser&&s.updateUser(...e)),["prevent"]))},[(0,l.Lk)("div",Ue,[(0,l.bo)((0,l.Lk)("input",{type:"number",class:"form-control w-50 mx-auto",placeholder:"User ID","onUpdate:modelValue":a[0]||(a[0]=e=>d.payload.userID=e)},null,512),[[D.Jo,d.payload.userID]])]),(0,l.Lk)("div",we,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:"form-control w-50 mx-auto",placeholder:"First Name","onUpdate:modelValue":a[1]||(a[1]=e=>d.payload.firstName=e)},null,512),[[D.Jo,d.payload.firstName]])]),(0,l.Lk)("div",Pe,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:"form-control w-50 mx-auto",placeholder:"Last Name","onUpdate:modelValue":a[2]||(a[2]=e=>d.payload.lastName=e)},null,512),[[D.Jo,d.payload.lastName]])]),(0,l.Lk)("div",De,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:"form-control w-50 mx-auto",placeholder:"UserName/Alias","onUpdate:modelValue":a[3]||(a[3]=e=>d.payload.userName=e)},null,512),[[D.Jo,d.payload.userName]])]),(0,l.Lk)("div",Ie,[(0,l.bo)((0,l.Lk)("input",{type:"number",class:"form-control w-50 mx-auto",placeholder:"Age","onUpdate:modelValue":a[4]||(a[4]=e=>d.payload.age=e)},null,512),[[D.Jo,d.payload.age]])]),(0,l.Lk)("div",Ce,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:"form-control w-50 mx-auto",placeholder:"Gender","onUpdate:modelValue":a[5]||(a[5]=e=>d.payload.gender=e)},null,512),[[D.Jo,d.payload.gender]])]),(0,l.Lk)("div",Ne,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:"form-control w-50 mx-auto",placeholder:"Role","onUpdate:modelValue":a[6]||(a[6]=e=>d.payload.userRole=e)},null,512),[[D.Jo,d.payload.userRole]])]),(0,l.Lk)("div",Je,[Ve,(0,l.Lk)("button",{type:"submit",class:"btn btn-success",onClick:a[7]||(a[7]=a=>s.updateUser(e.userID))},"Update")])],32)])])])])],64)}var Ae={name:"UpdateUser",data(){return{payload:{userID:"",firstName:"",lastName:"",userName:"",userRole:"",gender:"",age:""}}},methods:{async updateUser(){try{await this.$store.dispatch("updateUser",{id:this.payload.userID,data:this.payload}),j().fire({title:"Updated Successfully",text:"User has been updated successfully!",icon:"success",showConfirmButton:!0}),setTimeout((()=>{window.location.reload()}),3e3)}catch(e){console.error(e),j().fire({title:"Error",text:"Failed to add user",icon:"error",timer:2e3}),setTimeout((()=>{window.location.reload()}),3e3)}}}};const Ee=(0,W.A)(Ae,[["render",_e],["__scopeId","data-v-40e97518"]]);var Fe=Ee;const qe=e=>((0,l.Qi)("data-v-5c4e76ea"),e=e(),(0,l.jt)(),e),Me=qe((()=>(0,l.Lk)("button",{type:"button ",class:"btn modalButton","data-bs-toggle":"modal","data-bs-target":"#updateProdModal"},[(0,l.Lk)("i",{class:"bi bi-pencil-square"}),(0,l.eW)(" Update ")],-1))),Xe={class:"modal fade",id:"updateProdModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},$e={class:"modal-dialog modal-dialog-centered"},Qe={class:"modal-content"},Be=qe((()=>(0,l.Lk)("div",{class:"modal-header"},[(0,l.Lk)("h1",{class:"modal-title fs-5",id:"exampleModalLabel"},"Product Details"),(0,l.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1))),Re={class:"modal-body"},Ke={class:"mb-3"},Se={class:"mb-3"},Te={class:"mb-3"},je={class:"mb-3"},Ge={class:"mb-3"},We={class:"mb-3"},ze={class:"mb-3"},Oe={class:"modal-footer"},Ye=qe((()=>(0,l.Lk)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1)));function He(e,a,t,o,d,s){return(0,l.uX)(),(0,l.CE)(l.FK,null,[Me,(0,l.Lk)("div",Xe,[(0,l.Lk)("div",$e,[(0,l.Lk)("div",Qe,[Be,(0,l.Lk)("div",Re,[(0,l.Lk)("form",{onSubmit:a[8]||(a[8]=(0,D.D$)(((...e)=>s.updateProduct&&s.updateProduct(...e)),["prevent"]))},[(0,l.Lk)("div",Ke,[(0,l.bo)((0,l.Lk)("input",{type:"number",class:"form-control w-50 mx-auto",placeholder:"Prod ID","onUpdate:modelValue":a[0]||(a[0]=e=>d.payload.prodID=e)},null,512),[[D.Jo,d.payload.prodID]])]),(0,l.Lk)("div",Se,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:"form-control w-50 mx-auto",placeholder:"Product","onUpdate:modelValue":a[1]||(a[1]=e=>d.payload.prodName=e)},null,512),[[D.Jo,d.payload.prodName]])]),(0,l.Lk)("div",Te,[(0,l.bo)((0,l.Lk)("input",{type:"number",class:"form-control w-50 mx-auto",placeholder:"Price","onUpdate:modelValue":a[2]||(a[2]=e=>d.payload.prodPrice=e)},null,512),[[D.Jo,d.payload.prodPrice]])]),(0,l.Lk)("div",je,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:"form-control w-50 mx-auto",placeholder:"Category","onUpdate:modelValue":a[3]||(a[3]=e=>d.payload.category=e)},null,512),[[D.Jo,d.payload.category]])]),(0,l.Lk)("div",Ge,[(0,l.bo)((0,l.Lk)("input",{type:"number",class:"form-control w-50 mx-auto",placeholder:"Quantity","onUpdate:modelValue":a[4]||(a[4]=e=>d.payload.quantity=e)},null,512),[[D.Jo,d.payload.quantity]])]),(0,l.Lk)("div",We,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:"form-control w-50 mx-auto",placeholder:"Description","onUpdate:modelValue":a[5]||(a[5]=e=>d.payload.prodDesc=e)},null,512),[[D.Jo,d.payload.prodDesc]])]),(0,l.Lk)("div",ze,[(0,l.bo)((0,l.Lk)("input",{type:"text",class:"form-control w-50 mx-auto",placeholder:"Image","onUpdate:modelValue":a[6]||(a[6]=e=>d.payload.img=e)},null,512),[[D.Jo,d.payload.img]])]),(0,l.Lk)("div",Oe,[Ye,(0,l.Lk)("button",{type:"submit",class:"btn btn-success",onClick:a[7]||(a[7]=a=>s.updateProduct(e.prodID))},"Update")])],32)])])])])],64)}var Ze={name:"UpdateProduct",data(){return{payload:{prodID:"",prodName:"",prodPrice:"",category:"",quantity:"",prodDesc:"",img:"https://i.postimg.cc/XJYqPq88/0-j-Gm-Qz-OLa-Eobi-Nkl-D.png"}}},methods:{async updateProduct(){try{await this.$store.dispatch("updateProduct",{id:this.payload.prodID,data:this.payload}),j().fire({title:"Updated Successfully",text:"Product has been updated successfully!",icon:"success",showConfirmButton:!0}),setTimeout((()=>{window.location.reload()}),3e3)}catch(e){console.error(e),j().fire({title:"Error",text:"Failed to update product",icon:"error",timer:2e3}),setTimeout((()=>{window.location.reload()}),3e3)}}}};const ea=(0,W.A)(Ze,[["render",He],["__scopeId","data-v-5c4e76ea"]]);var aa=ea,ta={components:{AddUser:O,AddProduct:ke,UpdateUser:Fe,updateProduct:aa},computed:{users(){return this.$store.state.users},products(){return this.$store.state.products},cart(){return this.$store.state.cart}},mounted(){this.$store.dispatch("fetchUsers"),this.$store.dispatch("fetchProducts"),this.$store.dispatch("fetchUserCarts")},methods:{deleteUser(e){this.$store.dispatch("deleteUser",{id:e})},deleteProduct(e){this.$store.dispatch("deleteProduct",{id:e})}}};const la=(0,W.A)(ta,[["render",P],["__scopeId","data-v-387c1379"]]);var oa=la}}]);
//# sourceMappingURL=739.e014c6d2.js.map