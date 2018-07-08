export default {
	props: ['email'],
	template: `
    <section class="email-preview"  @click="selectEmail">
           <p class="preview flex"> {{email.subject}} <br/> 
			{{mail.time}} {{mail.date}}  
			</p>

			<button class="del-btn" @click.stop="onDeleteEmail">&times;</button>

    </section>
    `,
	data() {
		return {
			mail: {
				time: '',
				date: ''
			}
		};
	},
	methods: {
		selectEmail() {
			this.$emit('select-email', this.email);
		},
		formattedTime() {
			let sentAt = JSON.stringify(this.email.sentAt);
			this.mail.time = sentAt.substring(15, 20);
			this.mail.date = sentAt.substring(1, 11);
		},
		onDeleteEmail() {
			this.$emit('delete-email', this.email.id);
		}
	},
	created() {},
	mounted() {
		this.formattedTime();
	},
	computed: {}
};
// { subject: 'first', body: 'body1', isRead: false, sentAt: getTime() },
