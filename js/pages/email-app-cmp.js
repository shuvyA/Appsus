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
		
        <email-filter @filter-set="setFilter" @sort-subject="sortSubject">
		</email-filter>
		
        <progress-bar :emailCount="countEmails">
		</progress-bar>
		
        <email-list :emails="emailsToShow" @email-read="setReadEmail" @delete-email="deleteEmail">
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
		setReadEmail(email) {
			emailService.setRead(email);
		},
		saveEmail(email) {
			emailService.addEmail(email);
			this.newEmail = !this.newEmail;
		},
		closeCompose() {
			this.newEmail = false;
		},
		deleteEmail(id) {
			emailService.deleteEmailById(id);
		},
		sortSubject(sort) {
			let sortedEmails = this.emails;
			if (sort) {
				sortedEmails = sortedEmails.sort((a, b) => {
					if (a.subject.toLowerCase() < b.subject.toLowerCase()) return -1;
					if (a.subject.toLowerCase() > b.subject.toLowerCase()) return 1;
					return 0;
				});
			}

			if (!sort) {
				sortedEmails = sortedEmails.reverse();
			}

			return (this.emails = sortedEmails);
		}
	},
	created() {
		emailService.query().then(emails => {
			this.emails = emails;
		});
		// for future implementation
		// emailService.getOnlineEmails().then(emails => {
		// 	console.log(emails);
			
		// 	this.online = emails;
		// });
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
		emailCompose,
		
	}
};
