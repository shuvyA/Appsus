import emailPreview from './email-preview-cmp.js';
import emailDetails from './email-details-cmp.js';
import emailService from '../../service/email-service.js';

export default {
	props: ['emails'],
	template: `
        <section class="emails">

            <ul>

                <li v-for="email in emails" :key="email.id" 
                :class="[email.isRead? 'italic' : 'bold']">

                <email-preview :email="email" @select-email="selectEmail">
                </email-preview>
                
                </li>
                <email-details v-if="selectedEmail" :email="selectedEmail" @close-mail="closeMail">
                </email-details>

            </ul>

        </section>
    `,
	data() {
		return {
			selectedEmail: null
		};
	},
	methods: {
		selectEmail(email) {
			this.selectedEmail = email;
			this.isRead(email);
		},
		closeMail() {
			this.selectedEmail = null;
		},
		isRead(email) {
			emailService.setRead(email.id);
			console.log('is set read?', email.isRead);
		}
	},
	components: {
		emailPreview,
		emailDetails,
		emailService
	}
};
