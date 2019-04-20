var app = new Vue({
	el:'#app',
	data:{
		email:'Yamada@example.com'
	},
	//計算するプロパティ
	computed:{
		localEmail:function(){
			return this.email.split(`@`)[0].toLowerCase();

			// なんたら.split(区切り文字（正規表現）)→文字の分割
			// toLowerCase()大文字を小文字に
		}

	}
})