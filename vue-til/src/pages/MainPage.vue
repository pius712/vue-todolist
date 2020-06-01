<template>
	<div>
		<h1 class="page-header">mainpage</h1>
		<LoadingSpinner v-if="isLoading"></LoadingSpinner>
		<div v-else>
			<PostListItem
				v-for="postItem in postItems"
				:key="postItem._id"
				:item="postItem"
			></PostListItem>
		</div>
	</div>
</template>

<script>
import { fetchPosts } from '@/api/index';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import PostListItem from '@/components/posts/PostListItem.vue';
export default {
	data() {
		return {
			isLoading: false,
		};
	},
	computed: {
		postItems() {
			console.log('postItems', this.$store.state.postItems);
			return this.$store.state.postItems;
		},
	},
	methods: {
		async fetchData() {
			this.isLoading = true;
			const { data } = await fetchPosts();
			this.isLoading = false;
			console.log('data.posts', data.posts);
			this.$store.commit('setPosts', data.posts);
		},
	},
	created() {
		this.fetchData();
	},
	components: {
		PostListItem,
		LoadingSpinner,
	},
};
</script>

<style></style>
