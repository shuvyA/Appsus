export default {
	props: ['email'],
	template: `
       <section class="email-details">
        <div>
			<h2>email details: </h2>{{mailDetails}}
			<button  @click="closeMail">&times;</button>
       </div>
       </section>
    `,
	data() {
		return {};
	},
	methods: {
		closeMail() {
			this.$emit('close-mail');
		}
	}
};
