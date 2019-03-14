var app = new Vue({
	el:'#app',
	data:{
		message: ''
	},
	methods: {
		help:function(){
			window.alert('20文字以内で入力してください');
		}
	}
})