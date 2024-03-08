<template>
    <div class="container-fluid">
        <div class="container d-flex text-center justify-content-center align-items-center">
            <p>Hi</p>
        </div>
        <div>
            <p>Email</p>
            <input id="top" type="text" placeholder="example@email.com">
        </div>
        <div>
            <p>Password</p>
            <input id="bottom" type="text" placeholder="Password">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.container{
    background-color: crimson;
    border: solid black 2px;
    border-radius: 25px;
    padding: 100px;
    width: 100px;
    height: 100px;
    margin-bottom: 75px;
}

p{
    color: rgb(0, 0, 0);
}

#top{
    border: solid black;
    border-radius: 50px;
    padding: 10px;
}

#bottom{
    border: solid black;
    border-radius: 50px;
    padding: 10px;    
}
</style>