<template>
	<div class="contents">
		<h1 class="page-header">일지</h1>
		<div class="form-wrapper">
			<form class="form" @submit.prevent="submitForm">
				<div>
					<label for="title">title</label>
					<input v-model="title" id="title" type="text" />
				</div>
				<div>
					<label for="contents">contents</label>
					<textarea v-model="contents" id="contents" type="text" rows="5" />
					<p v-if="!isContentValid" class="validation-text warning ">
						Contents length must be less than 200
					</p>
				</div>
				<button type="submit" class="btn">생성</button>
			</form>
		</div>
		<p class="log">logMessage</p>
	</div>
</template>

<script>
import { createPost } from '@/api/index';
export default {
	data() {
		return {
			title: '',
			contents: '',
			logMessage: '',
		};
	},
	computed: {
		isContentValid() {
			return this.contents.length <= 200;
		},
	},
	methods: {
		async submitForm() {
			try {
				console.log('hello');
				const postData = { title: this.title, contents: this.contents };
				const response = await createPost(postData);
				console.log(response);
				this.$router.push('/main');
			} catch (error) {
				console.log(error);
				this.logMessage = error.response.data.message;
			}
		},
	},
};
</script>

<style scoped>
.form-wrapper .form {
	width: 100%;
}
.btn {
	color: white;
}
</style>
