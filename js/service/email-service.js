import utils from './utils.js';

const EMAILS_KEY = 'EMAILS';

export default {
	deleteEmailById,
	setRead,
	emptyEmail,
	addEmail,
	query,
	// getOnlineEmails
};

var emails = utils.loadFromStorage(EMAILS_KEY);
if (!emails || emails.length === 0) emails = createEmails();

function query() {
	return Promise.resolve(emails);
}

function saveEmails() {
	utils.saveToStorage(EMAILS_KEY, emails);
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
	saveEmails();
}

function setRead(email) {
	email.isRead = true;
	saveEmails();
}

function deleteEmailById(id) {
	let idx = emails.findIndex(mail => mail.id === id);
	emails.splice(idx, 1);
	saveEmails();
}

function createEmails() {
	return [
		{ subject: 'first', body: 'body1', isRead: false, sentAt: getTime(), id: utils.makeId() },
		{ subject: 'second', body: 'body2', isRead: false, sentAt: getTime(), id: utils.makeId() },
		{ subject: 'third', body: 'body3', isRead: false, sentAt: getTime(), id: utils.makeId() }
	];
}

function getOnlineEmails() {
	return fetch('http://www.filltext.com/?rows=20&subject={lorem|6}&body={lorem|50}')
		.then(res => res.json())
		.then(data =>
			data.forEach((item, idx) => {
				data.id = utils.makeId();
				console.log(data);
				data.sentAt = getTime();
			})
		);
}
