export default {
	template: ` 
    <section class="email-filter">

    <input type="search" placeholder="search by text" 
        v-model="filter.searchText" @input="setFilter"/>
    <label>
        <input type="radio" value="all" v-model="filter.picked" @change="setFilter" /> All
    </label>
    <label>
        <input type="radio" value="read" v-model="filter.picked" @change="setFilter" /> Read
    </label>
    <label>
        <input type="radio" value="unread" v-model="filter.picked" @change="setFilter" /> Unread
    </label>

    </section>
`,
	data() {
		return {
			filter: {
				searchText: '',
				picked: 'All'
			}
		};
	},
	methods: {
		setFilter() {
			return this.$emit('filter-set', this.filter);
		}
	}
};
