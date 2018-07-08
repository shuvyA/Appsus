
export default {

    props: ['note'],

    template: `

    <section class="note-txt-preview item">
        
        <div class="title-text flex space-between"><div ref="myTitle"  :class="{'edit-txt': statusEdit}"> {{note.title}}</div>  
            <div>

                <button @click.prevent="editTxt">✎</button>
                <button @click.prevent="deleteNote">✘</button>
            </div>
        </div>
        <div class="main-text" ref="myTxt" :class="{'edit-txt': statusEdit}">
            {{note.text}}  
        </div>
        <div v-if="statusEdit">
            save?
        <button  @click.prevent="saveTxt()">✔</button>
        <button  @click.prevent="closeTxtEdit">✘</button>


        </div>
    </section>

    `,
    created() {

    },
    data() {
        return {
            statusEdit: false,

            beforeTxt: '',
            beforeTitle: '',

        }
    },
    methods: {
        deleteNote() {
            console.log('delete', this.note.title, 'and', this.note.id);
            this.$emit('del-note', this.note.id);

        },
        editTxt() {

            this.beforeTitle = this.note.title;
            this.beforeText = this.note.text;
            this.statusEdit = true;

            var txt = this.$refs.myTxt;
            var title = this.$refs.myTitle;
            txt.contentEditable = "true"
            title.contentEditable = "true"


        },
        saveTxt() {

            var txt = this.$refs.myTxt;
            var title = this.$refs.myTitle;
          
            this.$emit('save-txt',  txt.innerText,  title.innerText, this.note.id);
            // this.$emit('save-txt', this.note.text, this.note.title, this.note.id);
            this.statusEdit = false;

        },
        closeTxtEdit() {

            var txt = this.$refs.myTxt;
            var title = this.$refs.myTitle;
            txt.contentEditable = "false";
            title.contentEditable = "false";

            txt.innerText = this.beforeText;
            title.innerText = this.beforeTitle;

            this.statusEdit = false;
        },


    },


}
