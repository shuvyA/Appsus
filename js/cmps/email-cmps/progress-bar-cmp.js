export default {
	props: ['unread'],
	template: `
    <section class="progress-bar">
        unread {{unread}}
    </section>
    `,
	data() {
		return {};
	},
	created() {},
	mounted() {}
};
