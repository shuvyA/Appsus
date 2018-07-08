
export default {

    props: ['note'],

    template: `

    <section class="note-img-preview item">
      <!-- <div class="title-img">{{note.title}}</div> -->
      <div class="title-img flex space-between"> {{note.title}} 
            <div>

                <button @click.prevent="EditNoteImg">✎</button>
                <button @click.prevent="deleteNote">✘</button>
            </div>
</div>
      
    <img :src=note.src />
    
            
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

        },
        EditNoteImg() {
            console.log('img edit');
            
        },

    },


}
