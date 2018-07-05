import noteService from '../service/note-service.js'

import noteTxt from '../cmps/note/note-txt-cmp.js';
import noteImg from '../cmps/note/note-img-cmp.js';
import previewNotes from '../cmps/note/preview-notes-cmp.js';



export default {
    template: `
    <section class="note-app">
        <h1>appSus</h1>
        <!-- <note-txt @add-note="addNote"></note-txt> -->
<!-- {{notes}} -->
        <!-- <h2 v-if="selectNote">{{selectNote}}</h2> -->
        <preview-notes v-bind:notes="notesToShow"></preview-notes>


    </section>
    `,
    data() {

        return {
            // currNotes: 
            notes: noteService.quary(),

            selectNote: null,
            popo:'popo',

        }
    },
    created() {

    },
    computed: {

       notesToShow() {

        return this.notes;
       },

       },
    methods: {
        // addNote(note) {

        //     console.log(note.text, 'note is');
        //     this.notes.push({noteType:'note-txt', data: {greet : 'Marhaba!'}})
        //     // this.selectNote = note.text;
        //     return

        // }



    },
    components: {
        noteTxt,
        noteImg,
        previewNotes,
    },



}