import utilsService from '../../service/utils.js'

export default {
    template: `

    <section class="note-img">
        <h1>add-img</h1>
        <form>
            <!-- <input type="text" v-model="currNote.title"> -->
            <img style="max-width:100%" src="/img/102.jpg">
            <button @click.prevent="addNote" >Save note</button>
         
        </form>
            
       
    </section>

    `,
    data() {
        return {
            // currNote: this.emptyNote(),


        }
    },
    methods: {

        addNote() {
            // console.log('add note',this.note.text);

            this.$emit('add-note', this.currNote);
            this.note = this.emptyNote();

        },

        emptyNote() {
            return {
                readAt: '',
                text: '',
                title: '',
                id: utilsService.makeId(),
                type:'note-img',
            };

        },
    },
    components: {

    },

}


