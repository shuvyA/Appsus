import noteService from '../service/note-service.js'
import utilsService from '../service/utils.js'

import noteTxt from '../cmps/note/note-txt-cmp.js';
import noteImg from '../cmps/note/note-img-cmp.js';
import listNotes from '../cmps/note/list-notes-cmp.js';

const NOTES_KEY = 'NOTES_KEY';

export default {
    template: `
    <section  class="note-app container">
        <!-- <h1>appSus</h1> -->
        <list-notes v-bind:notes="notesToShow"></list-notes>


    </section>
    `,
    data() {

        return {
            notes: [],

            selectNote: null,
            popo: 'popo',

        }
    },
    created() {
        // if (utilsService.loadFromStorage(NOTES_KEY) && (utilsService.loadFromStorage(NOTES_KEY).length > 0)) {
        //     return (this.notes = utilsService.loadFromStorage(NOTES_KEY));
        // }else {

        noteService.query()
            .then(notes => {
                console.log('notes')
                this.notes = notes;
            })
        // }

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
        listNotes,
    },



}