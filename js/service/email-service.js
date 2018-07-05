import utils from './utils.js'


var emails = [
	{ subject: 'first', body: 'body1', isRead: false, sentAt: getTime(), id : utils.makeId() },
	{ subject: 'second', body: 'body2', isRead: false, sentAt: getTime(), id : utils.makeId() },
	{ subject: 'third', body: 'body3', isRead: false, sentAt: getTime(), id : utils.makeId() }
];


function getMails(){
    return Promise.resolve(emails);
}

function getTime() {
	var date = new Date();
	return date;
}

export default {
	getMails,
	getMailById,
	deleteEmailByIdx,
	setRead
}

function getMailById(id) {
	let mail = mail.find(mail => mail.id === id);
	return Promise.resolve(mail);
}

function setRead(id){
	let email = emails.find(mail => mail.id === id)
	email.isRead = true;
}

function deleteEmailByIdx(id){
	let idx = emails.findIndex(mail => mail.id === id)
	emails.splice(idx,1)
}