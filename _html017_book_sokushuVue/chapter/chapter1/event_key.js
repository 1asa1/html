var app = new Vue({
	el:'#app',
	data:{
		// nameに最初に居れとく内容
		name: 'ゲスト'
	},
	methods: {
		// やりたいプログラムを書き込む場所がメソッド
		clear: function(){
			this.name = '';
		}
	}
})