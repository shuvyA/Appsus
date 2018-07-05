export default {
	props: ['email'],
	template: `
       <section class="email-details">
        <div>
			<h2>email details: </h2>{{email}}
			<button  @click="closeMail">&times;</button>
			<button  @click="onDeleteEmail">Delete</button>
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
