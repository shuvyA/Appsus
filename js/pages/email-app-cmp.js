import emailService from '../service/email-service.js';
import emailList from '../cmps/email-cmps/email-list-cmp.js'


export default {
	template: `
    <section class="email-app">
        <h1>Emails</h1>
        <div class="emails">
        <!-- {{ emails }} -->
        <email-list v-bind:emails="emails"></email-list>
        </div>
    </section>
    `,
	data() {
		return {
			emails: []
		};
	},
	created() {
		emailService.getMails().then(emails => {
			this.emails = emails;
			// console.log(this.emails);
		});
	},
	components: {
        emailService,
        emailList,
	}
};
