import noteTxtPreview from './note-txt-preview.js'


export default {

    props: ['notes'],

    template: `

    <section class="preview-note-txt">
        <h1>preview </h1>
        <!-- <ul>
            <li v-for="note in notes">text: {{note.text}}| title:  {{note.title}}</li>
        
        </ul> -->

        {{notes}}

        <note-txt-preview></note-txt-preview>

        <component v-for="(note, idx) in notes" :is="note.type" :key="idx" :note="note"> 
    
        </component>
        
            
    </section>

    `,
    data() {
        return {
            // currNote: this.emptyNote(),


        }
    },
    methods: {

        
    },
    components: {
        noteTxtPreview,
    },
   

}

