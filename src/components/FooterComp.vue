<template lang="">
    <footer id ="footerID" class="py-3 container-fluid">
   <div class="container">
     <div class="row">
       <p class="lead">
         Footer text here &copy;
         <span>{{currYear}}</span>
       </p>
     </div>
     <div class="row">
      <div class="col">
        <p>Col 1 test</p>
      </div>
      <div class="col">
        <p>Col 2 test</p>
      </div>
      <div class="col">
        <p>Col 3 test</p>
        <i class="bi bi-github"></i>
      </div>
     </div>
   </div>
 </footer>
 </template>
 <script>
 export default {
     name:'FooterComp',
     data(){
         return{
             currYear:new Date().getFullYear()
         }
     }
 }
 
 </script>
 <style>
 #footerID {
     position: absolute;
     background-color: rgb(212, 212, 212);
     color: black;
 }

 
 
 </style>