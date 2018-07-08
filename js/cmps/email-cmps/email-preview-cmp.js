export default {
	props: ['email'],
	template: `
    <section class="email-preview"  @click="selectEmail">
        <p class="preview-subj flex"> {{email.subject}}
		</p>
		<br/>
		<span class="mail-time">	{{mail.time}} {{mail.date}}  
		</span>
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
			this.mail.time = sentAt.substring(12, 17);
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
