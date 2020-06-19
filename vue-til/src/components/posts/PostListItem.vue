<template>
	<div class="list-container">
		<ul>
			<li>
				<div class="post-title">{{ item.title }}</div>
				<div class="post-contents">{{ item.contents }}</div>
				<div class="post-time">
					{{ item.createdAt | formatDate }}
					<ion-icon name="create-outline" @click="routeEditPage"></ion-icon>
					<ion-icon name="trash-outline" @click="showModal = true"></ion-icon>
					<Modal
						v-if="showModal"
						@deleteItem="deleteItem"
						@notDeleteItem="showModal = false"
					></Modal>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import Modal from '@/components/common/Modal';
import { deletePost } from '@/api/index';
export default {
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			showModal: false,
		};
	},
	methods: {
		async deleteItem() {
			this.showModal = true;
			this.$store.dispatch('DELETE_ITEM', { _id: this.item._id });
			console.log('dleteItem');
			// console.log(this.item._id);
			// const response = await deletePost({ _id: this.item._id });
			// console.log(response);
		},
		routeEditPage() {
			this.$router.push(`/post/${this.item._id}`);
		},
	},
	components: {
		Modal,
	},
};
</script>

<style></style>
