export default {
	props: ['unread'],
	template: `
    <section class="progress-bar flex align-center">
		<progress max="100" :value="progBar"></progress> <span class="margin-left">{{unread[1]}} unread messages </span>
    </section>
    `,
	computed: {
		progBar() {
			console.log(this.unread);
			if (this.unread[0] > 0) {
				let proportion = (parseInt(this.unread[1]) / parseInt(this.unread[0])) * 100;
				return 100 - proportion;
			}
		}
	}
};
