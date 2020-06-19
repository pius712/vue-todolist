import LoginForm from '@/components/LoginForm.vue';
import { shallowMount } from '@vue/test-utils';

const wrapper = shallowMount(LoginForm, {
	data() {
		return {
			userId: 'test',
		};
	},
});

describe('LoginForm test', () => {
	test('ID는 이메일 형식이어야 한다.', () => {
		const username = wrapper.find('#username');
		// console.log(username.element.value);
		console.log(username.element);

		expect(username.html().value).toBe('test');
	});
});
