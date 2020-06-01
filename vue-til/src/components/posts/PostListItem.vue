<template>
	<div class="list-container">
		<ul>
			<li>
				<div class="post-title">{{ item.title }}</div>
				<div class="post-contents">{{ item.contents }}</div>
				<div class="post-time">{{ item.createdAt }}</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style></style>
