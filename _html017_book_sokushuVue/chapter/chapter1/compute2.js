var app = new Vue({
	el:'#app',
	data:{
		email:'Yamada@example.com'
	},
	//計算するプロパティ
	methods:{
		localEmail:function(){
			return this.email.split('@')[0].toLowCase();
		}
	}
})