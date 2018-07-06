import noteTxtPreview from './note-txt-preview.js'
import noteImgPreview from './note-img-preview.js'
import noteTodoPreview from './note-todo-preview.js'

import noteService from '../../service/note-service.js'

export default {

    props: ['notes'],

    template: `

    <section class="list-notes-cmp">
        <h1>preview </h1>
        
       <div class="masonry" v-if="notes">

            <component v-for="(note, idx) in notes" :is="note.type" :key="idx" :note="note" @del-note="removeNote"> 

            </component>
                
       </div>
    </section>

    `,
    data() {
        return {

        }
    },
    methods: {
        removeNote(noteId) {
            noteService.removeNote(noteId)
        }


    },
    components: {
        noteTxtPreview,
        noteImgPreview,
        noteTodoPreview,
    },


}

