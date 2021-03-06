import emailPreview from './email-preview-cmp.js';
import emailDetails from './email-details-cmp.js';

export default {
	props: ['emails'],
	template: `
        <section class="email-list flex">
			<ul class="clean-list">

                <li v-for="email in emails" :key="email.id" 
                :class="[email.isRead? 'italic' : 'bold']">

                <email-preview :email="email" @select-email="selectEmail"   @delete-email="deleteEmail">
                </email-preview>
                
                </li>

			</ul>

				<email-details v-if="selectedEmail" :email="selectedEmail" 
                @close-mail="closeMail" @delete-email="deleteEmail">
                </email-details>

        </section>
    `,
	data() {
		return {
			selectedEmail: null,
			// ??
			// newEmail: null
		};
	},
	methods: {
		selectEmail(email) {
			!this.selectedEmail ? (this.selectedEmail = email) : (this.selectedEmail = null);
			this.$emit('email-read', email);
		},
		closeMail() {
			this.selectedEmail = null;
		},
		deleteEmail(id) {
			this.$emit('delete-email', id);
			this.selectedEmail = false;
		}
	},
	components: {
		emailPreview,
		emailDetails,
	}
};
