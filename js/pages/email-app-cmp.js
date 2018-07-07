import emailService from '../service/email-service.js';
import emailList from '../cmps/email-cmps/email-list-cmp.js';
import progressBar from '../cmps/email-cmps/progress-bar-cmp.js';
import emailFilter from '../cmps/email-cmps/email-filter-cmp.js';
import emailCompose from '../cmps/email-cmps/email-compose-cmp.js';

export default {
	template: `
    <section class="email-app">
        
		<email-compose v-if="newEmail" @send-mail="saveEmail" @cancel-email="closeCompose">
		</email-compose>
		
        <email-filter @filter-set="setFilter">
		</email-filter>
		
        <progress-bar :emailCount="countEmails">
		</progress-bar>
		
        <email-list :emails="emailsToShow" @email-read="setReadEmail">
		</email-list>
		
		<button class="compose-email" @click="newEmail = !newEmail">
		+
		</button>

    </section>
    `,
	data() {
		return {
			emails: [],
			newEmail: false,
			filter: null,
			//for future implementation
			online: null
		};
	},
	methods: {
		setFilter(filter) {
			this.filter = filter;
		},
		setReadEmail(id) {
			emailService.setRead(id);
		},
		saveEmail(email) {
			emailService.addEmail(email);
			this.newEmail = !this.newEmail;
		},
		closeCompose() {
			this.newEmail = false;
		}
	},
	created() {
		emailService.getEmails().then(emails => {
			this.emails = emails;
		});
		// for future implementation
		// emailService.getOnlineEmails().then(email => (this.online = email));
	},
	computed: {
		countEmails() {
			let counter = 0;
			this.emails.forEach(email => {
				if (!email.isRead) counter++;
			});
			return [this.emails.length, counter];
		},
		emailsToShow() {
			let emailsToShow = this.emails;
			if (emailsToShow && this.filter) {
				if (this.filter.searchText) {
					emailsToShow = emailsToShow.filter(email => {
						return email.subject.includes(this.filter.searchText);
					});
				}
				if (this.filter.picked !== 'all') {
					emailsToShow = emailsToShow.filter(email => {
						return this.filter.picked === 'read' ? email.isRead : !email.isRead;
					});
				}
			}
			return emailsToShow;
		}
	},
	components: {
		emailService,
		emailList,
		progressBar,
		emailFilter,
		emailCompose
	}
};
