
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
<div v-if=" imgEdit">
    <!-- <h2>Select an image</h2> -->
    <input type="file" @change="onFileChange">
  </div>
  <div v-else>
    <!-- <img :src="image" /> -->
    <!-- <button @click="removeImage">Remove image</button> -->
  </div>

    <img :src=note.src />
    
            
    </section>

    `,
    created() {

    },
    data() {
        return {
            imgEdit: false,
            image: '',

        }
    },
    methods: {
        deleteNote() {
            console.log('delete', this.note.title, 'and', this.note.id);
            this.$emit('del-note', this.note.id);

        },
        EditNoteImg() {
            console.log('img edit');
            this.imgEdit = true;


        },

        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
        },
        createImage(file) {
            var image = new Image();
            var reader = new FileReader();
            // this.note.src = new FileReader();
            var vm = this;

            reader.onload = (e) => {
                // console.log('popopo', reader.result)
                // console.log('popopo', e.target.result)
                this.note.src = reader.result;
                this.imgEdit = false;
                // vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        removeImage: function (e) {
            this.image = '';
        }

    },


}
