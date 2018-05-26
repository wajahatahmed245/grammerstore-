var  vm = new Vue({
    el: '#vue_det',
    data: {
       company : "Stashing Words",
       lastname  : "Singh",
       address    : "Mumbai"
    },
    methods: {
       mydetails : function() {
          return "I am "+this.firstname +" "+ this.lastname;
       }
    }
 })