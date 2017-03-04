import ContactFormView from '../view/contact-form';
import ContactListView from '../view/contact-list';

export default class AppController {
  constructor(el, store) {
    this.el = el;
    this.store = store;

    this.contactForm = new ContactFormView(this.el.querySelector('.contact-form'), this.store);
    this.contactList = new ContactListView(this.el.querySelector('.grid'), this.store);
  }

  created() {
    this.store.subscribe(() => {
      const contacts = this.store.getState().contacts;
      window.localStorage.contacts = JSON.stringify(contacts);
    });

    this.contactForm.mounted();
    this.contactList.mounted();

    const dataString = window.localStorage.contacts || '[]';

    this.store.dispatch({ type: 'CONTACT@FIND_ALL', data: JSON.parse(dataString) });
  }
}
