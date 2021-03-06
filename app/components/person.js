import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PersonComponent extends Component {
  @service store;
  @tracked selected = this.args.person.name ? false : true;
  @tracked isEditting = this.selected;
  @tracked newName = this.args.person.name;
  @tracked displayingMenuOptions = false;
  @tracked showModal = false;
  @tracked displayingCards = false;

  @action
  showMenuOptions() {
    this.displayingMenuOptions = true;
  }

  @action
  hideMenuOptions() {
    this.displayingMenuOptions = false;
  }

  @action
  deletePerson() {
    const person = this.args.person;
    let delPerson = this.store.peekRecord('person', person.id);
    const _hideModal = () => {
      this.hideModal();
    };
    delPerson.destroyRecord().then(_hideModal);
  }

  @action
  updatePerson() {
    const person = this.args.person;
    let newName = this.newName;
    const _toggleEditting = () => {
      this.toggleEditting();
    };
    this.store.findRecord('person', person.id).then(function (updatedPerson) {
      // ...after the record has loaded
      updatedPerson.name = newName;
      person.save().then(_toggleEditting);
    });
  }

  @action
  async addNewReporter() {
    const person = this.args.person;
    let reporter = this.store.createRecord('person', {
      name: '',
    });
    let reporters = await person.reporters;
    reporters.pushObject(reporter);
    // TODO: use await here
    reporter.save().then(function () {
      person.save();
    });
  }

  @action
  async addNewPeer() {
    const person = this.args.person;
    let peer = this.store.createRecord('person', {
      name: '',
      manager: person.manager,
    });
    peer.save();
  }

  @action
  async addNewManager() {
    const person = this.args.person;
    let oldManager = await person.manager;
    let manager = this.store.createRecord('person', {
      name: '',
      reporters: oldManager.reporters,
    });
    oldManager.reporters.forEach((reporter) => {
      oldManager.reporters.removeObject(reporter);
    });
    oldManager.reporters.pushObject(manager);
    manager.save().then(function () {
      oldManager.save();
    });
  }

  @action
  toggleEditting() {
    console.log('editting');
    this.isEditting = !this.isEditting;
    this.newName = this.args.person.name;
  }

  @action
  hideModal() {
    this.showModal = false;
  }

  @action
  displayModal() {
    this.showModal = true;
  }

  @action
  showCards() {
    this.displayingCards = true;
  }

  @action
  hideCards() {
    this.displayingCards = false;
  }

  @action
  toggleCards() {
    this.displayingCards = !this.displayingCards;
  }
}
