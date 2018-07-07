//emailCount is array - [0] is total emails, [1] is unread emails - passed from email-app-cmp

export default {
	props: ['emailCount'],
	template: `
    <section class="progress-bar flex align-center">
		<progress max="100" :value="progBar"></progress> <span class="margin-left">{{emailCount[1]}} unread messages </span>
    </section>
    `,
	computed: {
		progBar() {
			if (this.emailCount[0] > 0) {
				let proportion = (parseInt(this.emailCount[1]) / parseInt(this.emailCount[0])) * 100;
				return 100 - proportion;
			}
		}
	}
};
