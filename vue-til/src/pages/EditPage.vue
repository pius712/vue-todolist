<template>
	<div>
		<PostEditForm></PostEditForm>
	</div>
</template>

<script>
import PostEditForm from '@/components/posts/PostEditForm.vue';
import { fetchOneItem } from '@/api/posts';

export default {
	components: {
		PostEditForm,
	},
	// methods: {
	// 	fetchOneItem() {
	// 		// await fetchOneItem()
	// 		console.log('params', this.$route.params.id);
	// 	},
	// },
	// created() {
	// 	this.fetchOneItem();
	// },
};
</script>

<style></style>
