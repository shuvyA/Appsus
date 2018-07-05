var emails = [
	{ subject: 'first', body: 'body1', isRead: false, sentAt: getTime() },
	{ subject: 'second', body: 'body2', isRead: false, sentAt: getTime() },
	{ subject: 'third', body: 'body3', isRead: false, sentAt: getTime() }
];

function getTime() {
	var date = new Date();
	return date;
}
