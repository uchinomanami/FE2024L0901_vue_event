// JavaScript用ファイル
new VTTCue({
    el: '#app',
    data(){
        return{
            text: 'hello Vue.js'
        };
    },
    method:{
        handleClick(){
            this.text='button pushed';
        }
    }
});