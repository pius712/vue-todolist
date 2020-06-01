<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<form class="form" @submit.prevent="submitForm">
				<div>
					<label>id: </label>
					<input type="text" v-model="userId" />
				</div>
				<div>
					<label>password: </label>
					<input type="password" v-model="password" />
				</div>
				<button
					class="btn"
					:disabled="!isEmailValid || !password"
					type="submit"
				>
					로그인
				</button>
			</form>
			<p v-if="logMsg !== ''">{{ logMsg }}</p>
		</div>
	</div>
</template>

<script>
import { loginUser } from '@/api/index.js';
import { validateEmail } from '@/utils/validation';
export default {
	data() {
		return {
			userId: '',
			password: '',
			logMsg: '',
		};
	},
	computed: {
		isEmailValid() {
			return validateEmail(this.userId);
		},
	},
	methods: {
		async submitForm() {
			try {
				const userData = {
					username: this.userId,
					password: this.password,
				};
				const { data } = await loginUser(userData);
				console.log(data);
				// this.logMsg = `${data.user.username}님 안녕하세요.`;
				this.$store.commit('setToken', data.token);
				this.$store.commit('setUsername', data.user.username);
				this.$router.push('/main');
				// this.initForm();
			} catch (error) {
				console.log(error.response.data);
				this.logMsg = error.response.data;
			}
		},
		initForm() {
			this.username = '';
			this.password = '';
		},
	},
};
</script>

<style></style>
