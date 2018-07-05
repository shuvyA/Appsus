import utilsService from './utils.js'

var notes = [{
    readAt: '',
    text: 'one one one ',
    title: 'one ',
    id: utilsService.makeId(),
    type: 'note-txt-preview',
},
{
    readAt: '',
    text: 'image one',
    title: '',
    src:'/img/102.jpg',
    id: utilsService.makeId(),
    type: 'note-img',
},
{
    readAt: '',
    text: 'two woedsf df dsf df ds fds f dsdf',
    title: 'twowme dsfko sdfdk ',
    id: utilsService.makeId(),
    type: 'note-txt-preview',
},
{
    readAt: '',
    text: 'dasdasdas',
    title: 'sdasdasdasdadasd',
    id: utilsService.makeId(),
    type: 'note-txt-preview',
},




];



function quary() {
    return notes;
}

export default {
    quary,
}