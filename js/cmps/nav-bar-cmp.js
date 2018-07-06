export default {
	template: `
		<nav class="nav-bar flex justify-center">
			
			<button class="nav-btn" @click="showMenu = !showMenu">☰</button>

			<router-link class="no-decor flex" exact to="/email" 
			:class="[showMenu? 'menu-display' : '']">
				<span @click="activate('email')">Emails
				<span :class="[(active === 'email')? 'triangle flex' : 'no-opacity']">			
				<span>
				<span></span>
				</span>
				</span>
				</span>
			</router-link>
			

			<router-link class="no-decor flex" exact to="/" 
			:class="[showMenu? 'menu-display' : '']">
				<span @click="activate('home')">Home
				<span :class="[(active === 'home')? 'triangle flex' : 'no-opacity']">
				<span>
				<span></span>
				</span>
				</span>
				</span>
			</router-link>
			


			<router-link class="no-decor flex" to="/note"
			:class="[showMenu? 'menu-display' : '']">
			<span @click="activate('notes')">Notes
				<span :class="[(active === 'notes')? 'triangle flex' : 'no-opacity']">
				<span>
				<span></span>
				</span>
				</span>
				</span>	
			</router-link>
		

		</nav>
	`,
	data() {
		return {
			active: 'email',
			showMenu: false
		};
	},
	methods: {
		activate(val) {
			this.active = val;
		}
	}
};
