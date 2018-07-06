import utils from '../../service/utils.js';
import emailService from '../../service/email-service.js';

export default {
	template: `
    <section class="email-compose">
	<div class="email-content">
		<input class="new-subj" type="text" placeholder="subject" v-model="email.subject" />
		<br/>
    	<textarea  class="new-txt" rows="8" cols="50" placeholder="body" v-model="email.body" />
	</div>
	<button class="email-submit" @click="sendEmail" :disabled="!isValid">submit</button>

    </section>
    `,
	data() {
		return {
			email: null
		};
	},
	created() {
		this.email = emailService.emptyEmail().then(newEmail => (this.email = newEmail));
	},
	methods: {
		sendEmail() {
			this.$emit('send-mail', this.email);
			emailService.emptyEmail().then(newEmail => (this.email = newEmail))
		}
	},
	computed: {
		isValid() {
			return this.email.subject && this.email.body;
		}
	},
	components: {
		emailService,
		utils
	}
};

// composeEmail() {
//     console.log('hi making new mail');
//     emailService.newEmail().then(email => {
//         this.newEmail = email;
//     });
// }