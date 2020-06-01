<template>
	<div class="app">
		<AppHeader></AppHeader>
		<div class="app-contents">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
// import LoginPage from '@/components/LoginPage.vue';
// import SignupPage from '@/components/SignupPage.vue';
import AppHeader from '@/components/AppHeader.vue';
export default {
	name: 'App',
	components: {
		AppHeader,
		// LoginPage,
		// SignupPage,
	},
};
</script>

<style>
@import './css/common.css';
@import './css/reset.css';
</style>
