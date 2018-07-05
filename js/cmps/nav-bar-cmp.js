export default {
	template: `
		<nav class="nav-bar">
            <router-link exact to="/email">Emails</router-link>|
			<router-link exact to="/">Home</router-link>|
			<router-link to="/note">Notes</router-link>
		</nav>
	`,
	data() {
		return {};
	},
	created() {}
};
