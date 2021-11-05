Vue.component('codenames', {
    props: ['names', 'codename'],
    data: function(){
        return{
            showing: this.names
        }

    },
    methods: {
        name: function(){
            if (this.showing === this.names){
                this.showing = this.codename
            }else{
                this.showing = this.names
            }
        }
    },

    template: '<button v-on:click="name">{{showing}}</button>'

})

var app = new Vue({
    el: "#app",
    data:{
        nameField: "",
        emailField: "",
        nameMess: "",
        emailMess: "",
        success: "",
        list: [{name:"Protagonist",codename:"Joker"},{name:"Anne",codename:"Panther"},{name:"Ryuji",codename:"Skull"}]
    },
    methods:{
        submit: function(){
            if(this.nameMess === "Valid Name" && this.emailMess === "Valid Email"){
                this.success = "Submitted";
                this.nameMess = "";
                this.emailMess = "";
            }else{
                this.success = "Not Submitted"
            }
        }
    },
    watch:{
        nameField: function(){
            if(this.nameField.length < 2){
                this.nameMess = "Too Short!"
            }else{
                this.nameMess = "Valid Name"
            }
        },
        emailField: function(){
            var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(regex.test(this.emailField) === true){
                this.emailMess = "Valid Email"
            }else{
                this.emailMess = "Not vailid email"
            }


        }
    }
})