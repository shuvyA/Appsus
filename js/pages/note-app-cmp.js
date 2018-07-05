// import noteService from '../service/note-service.js'

import noteTxt from '../cmps/note/note-txt-cmp.js';



export default {
    template: `
    <section class="note-app">
        <h1>appSus</h1>
        <note-txt @add-note="addNote"></note-txt>

        <h2 v-if="selectNote">{{selectNote}}</h2>

      <component v-for="(note, idx) in notes" :is="note.noteType" :key="idx" :data="notes.data">
          {{note.data.text}}
        </component> -->

    </section>
    `,
    data() {

        return {
            // currNotes: 
            notes: [
                {noteType:'note-txt',data:''},
                {noteType:'note-txt',data:''}
            ],
            selectNote: null,
            popo:'popo',

        }
    },
    created() {

    },
    methods: {
        addNote(note) {

            console.log(note.text, 'note is');
            this.notes.push({noteType:'note-txt', data: {greet : 'Marhaba!'}})
            // this.selectNote = note.text;
            return

        }



    },
    components: {
        noteTxt,
    },



}