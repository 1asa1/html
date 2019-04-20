var app = new Vue({
	el:'#app',
	data:{
		message:""
	},
	methods:{
		onclick: function(a){
			console.log(a);
		}
	},
})