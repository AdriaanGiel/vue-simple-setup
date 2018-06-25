import Vue from 'vue';
import hello from './components/hello';


const vue = new Vue({
    el:"#app",
    components:{
        "hello": hello
    }
});