var app = new Vue({
	el:'#app',
	data:{
		name: 'ゲスト'
	},
	methods: {
		clear: function(){
			this.name = '';
		}
	}
})