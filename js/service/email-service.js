import utils from './utils.js';

export default {
	getEmails,
	getMailById,
	deleteEmailByIdx,
	setRead,
	emptyEmail,
	addEmail,
};

function getEmails() {
	return Promise.resolve(emails);
}

function emptyEmail() {
	return Promise.resolve({
		subject: '',
		body: '',
		isRead: false,
		sentAt: getTime(),
		id: utils.makeId()
	});
}

function getTime() {
	var date = new Date();
	return date;
}

function addEmail(email) {
	Promise.resolve(emails.unshift(email));
}

function getMailById(id) {
	let mail = mail.find(mail => mail.id === id);
	return Promise.resolve(mail);
}

function setRead(id) {
	let email = emails.find(mail => mail.id === id);
	email.isRead = true;
}

function deleteEmailByIdx(id) {
	let idx = emails.findIndex(mail => mail.id === id);
	emails.splice(idx, 1);
}

var emails = [
	{ subject: 'first', body: 'body1', isRead: false, sentAt: getTime(), id: utils.makeId() },
	{ subject: 'second', body: 'body2', isRead: false, sentAt: getTime(), id: utils.makeId() },
	{ subject: 'third', body: 'body3', isRead: false, sentAt: getTime(), id: utils.makeId() }
];

function getOnlineEmails() {
	return fetch(`http://filltext.com/?rows=20&subject={lorem|6}}&subject={lorem|50}`)
		.then(res => res.json())
		.then(data => data);
}
