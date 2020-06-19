export const formatDate = value => {
	const date = new Date(value);
	const year = date.getFullYear();
	const day = date.getDay();
	const month = date.getMonth() + 1;
	const hour = date.getHours();
	const minute = date.getMinutes();
	return `${year}-${month}-${day} ${hour}:${minute}`;
};
