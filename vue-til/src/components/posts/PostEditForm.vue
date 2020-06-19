<template>
	<div class="contents">
		<h1 class="page-header">일지 수정</h1>
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
				<button type="submit" class="btn">Edit</button>
			</form>
		</div>
		<p class="log">logMessage</p>
	</div>
</template>

<script>
import { fetchOnePost, editPost } from '@/api/index';

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
		async fetchItem() {
			console.log(this.$route.params.id);
			const { data } = await fetchOnePost(this.$route.params.id);
			this.title = data.title;
			this.contents = data.contents;
		},
		async submitForm() {
			const post = {
				_id: this.$route.params.id,
				title: this.title,
				contents: this.contents,
			};
			const resposne = await editPost(post);
			console.log('editted');
			this.$router.push('/main');
		},
	},
	created() {
		this.fetchItem();
	},
	// computed: {
	// 	title() {},
	// },
};
</script>

<style></style>
