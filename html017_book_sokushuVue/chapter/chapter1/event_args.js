var app = new Vue({
	el:'#app',
	data:{
		message:""
	},
	methods:{
		onclick: function(message, e){
			console.log(message)
			console.log(e)
		}
	},
})