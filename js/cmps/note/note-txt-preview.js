
export default {

    props: ['note'],

    template: `

    <section class="note-txt-preview item">
        
        <div class="title-text flex space-between"> {{note.title}} 
            <div>

                <button>✎</button>
                <button @click.prevent="deleteNote">✘</button>
            </div>
        </div>
            <div class="main-text">
            {{note.text}}  
            </div>
            
    </section>

    `,
    created() {

    },
    data() {
        return {


        }
    },
    methods: {
        deleteNote() {
            console.log('delete', this.note.title, 'and', this.note.id);
            this.$emit('del-note', this.note.id);

        }


    },


}
