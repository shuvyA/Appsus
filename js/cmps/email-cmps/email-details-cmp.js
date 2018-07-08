export default {
	props: ['email'],
	template: `
       <section class="email-details">
			<h2>{{email.subject}} </h2>
			<p>{{email.body}}</p>
			<button class="back-btn" @click="closeMail">←</button>
			<button class="del-btn" @click="onDeleteEmail">&times;</button>
       </section>
    `,
	data() {
		return {};
	},
	methods: {
		closeMail() {
			this.$emit('close-mail');
		},
		onDeleteEmail() {
			this.$emit('delete-email', this.email.id);
		}
	}
};
