import homePage from './pages/home-cmp.js'
import emailApp from './pages/email-app-cmp.js'
import noteApp from './pages/note-app-cmp.js'

export default [
	{ path: '/', component: homePage },
	{ path: '/email', component: emailApp },
	{ path: '/note', component: noteApp },
	{ path: '*', redirect: '/' }
];
