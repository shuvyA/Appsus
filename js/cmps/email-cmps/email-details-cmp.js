export default {
	props: ['email'],
	template: `
       <section class="email-details">
        <div>
			<h2>{{email.subject}} </h2>
			<p>{{email.body}}</p>
			<button  @click="closeMail">←</button>
			<button  @click="onDeleteEmail">&times;</button>
       </div>
       </section>
    `,
	data() {
		return {};
	},
	methods: {
		closeMail() {
			this.$emit('close-mail');
		},
		onDeleteEmail(){
			this.$emit('delete-email',this.email.id)
		}
	}
};
