<template>
	<div id="home">
		<h1>{{msg}}</h1>
		<button>googleアカウントでログイン</button>
	</div>
</template>

<script>
export default {
	name: "home",
	data(){
		return{
			msg: "Welcome to MyMarkdown"
		};
	}
};
</script>
