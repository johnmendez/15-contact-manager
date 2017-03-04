import { removeContact } from '../actions';


class ItemView {
  constructor(data, store) {
    this.data = data;
    this.store = store;

    this.el = document.createElement('li');
    this.el.classList.add('grid__item');
    this.el.innerHTML = `
    <div class="contact">
      <h1 class="contact__name"></h1>
      <p class="contact__street"></p>
      <p class="contact__location"></p>
      <button type="button" name="button" class="contact__btn">Delete</button>
    </div>`;
  }

  mounted() {
    this.el.addEventListener('click', () => {
      this.store.dispatch(removeContact(this.data.id));
    });
  }

  render() {
    this.el.querySelector('.contact__name').innerText = `${this.data.firstName}, ${this.data.lastName}`;
    this.el.querySelector('.contact__street').innerText = this.data.street;
    this.el.querySelector('.contact__location').innerText = `${this.data.city}, ${this.data.state}`;
  }
}

export default class ContactListView {
  constructor(el, store) {
    this.el = el;
    this.store = store;
  }

  mounted() {
    this.store.subscribe(() => {
      this.render();
    });
  }

  render() {
    this.el.innerHTML = '';
    const contacts = this.store.getState().contacts;

    contacts.forEach((current) => {
      const view = new ItemView(current, this.store);
      view.mounted();
      view.render();

      this.el.appendChild(view.el);
    });
  }
}
