<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<form class="form" @submit.prevent="submitForm">
				<div>
					<label for="username">id: </label>
					<input id="username" type="text" v-model="username" />
				</div>
				<div>
					<label for="password">password: </label>
					<input id="password" type="password" v-model="password" />
				</div>
				<div>
					<label for="nickname">nickname: </label>
					<input id="nickname" type="text" v-model="nickname" />
				</div>
				<button class="btn" type="submit">login</button>
			</form>
		</div>
	</div>
</template>

<script>
import { registerUser } from '@/api/index';
export default {
	data() {
		return {
			username: '',
			password: '',
			nickname: '',
			logMessage: '',
		};
	},
	methods: {
		async submitForm() {
			try {
				console.log('폼제출');
				const userData = {
					username: this.username,
					password: this.password,
					nickname: this.nickname,
				};
				const { data } = await registerUser(userData);
				console.log(data);
				this.logMessage = `${data.nickname} 님 반갑습니다.`;
				this.initForm();
			} catch (error) {
				console.log(error);
			}
		},
		initForm() {
			this.username = '';
			this.password = '';
			this.nickname = '';
		},
	},
};
</script>

<style></style>
