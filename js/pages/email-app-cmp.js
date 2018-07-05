import emailService from '../service/email-service.js';
import emailList from '../cmps/email-cmps/email-list-cmp.js';
import progressBar from '../cmps/email-cmps/progress-bar-cmp.js';

export default {
	template: `
    <section class="email-app">
        
        <h1>Emails</h1>
        
        <progress-bar :unread="unreadEmails"></progress-bar>

        <email-list :emails="emails"></email-list>
        <!-- @add-counter="unreadMails" -->
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
		});
	},
	methods: {},
	components: {
		emailService,
		emailList,
		progressBar
	},
	computed: {
		unreadEmails() {
			var counter = 0;
			this.emails.forEach(email => {
				if (email.isRead) counter++;
			});
			return this.emails.length - counter;
		}
	}
};
