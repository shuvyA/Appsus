import utilsService from '../../service/utils.js'


export default {
    template: `

    <section class="note-txt">
        <h1>add-txt</h1>
        <form>
            <label>Subject</label>
            <input type="text" v-model="currNote.title">
            <textarea v-model="currNote.text"  placeholder="add multiple lines"></textarea>
            <button @click.prevent="addNote" >Save note</button>
            <!-- <div v-if="note.text"> -->
                <!-- {{note.text}} -->
            <!-- </div> -->
           
        </form>


        
            
    </section>

    `,
    data() {
        return {
            currNote: this.emptyNote(),


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
                type:'note-txt',
            };

        },
    },
    components: {

    },

}




    // created() {
        //     console.log('note-txt created');


        // },
        // mounted() {

        // },
        // destroyed() {

        // },