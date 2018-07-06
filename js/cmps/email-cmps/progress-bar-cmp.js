export default {
	props: ['unread'],
	template: `
    <section class="progress-bar flex align-center">
		<progress max="100" :value="progBar"></progress> <span class="margin-left">{{unread}} unread messages </span>
    </section>
    `,
	data() {
		return {};
	},
	created() {},
	computed: {
		progBar() {
			return (length = this.unread * 20);
		}
	},
	mounted() {}
};
