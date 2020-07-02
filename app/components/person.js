import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PersonComponent extends Component {
  @service store;
  @tracked selected = this.args.person.name ? false : true;
  @tracked isEditting = this.selected;
  @tracked newName = this.args.person.name;

  // @tracked newPerson = '';
  // @tracked newPeer = '';
  @tracked showingAddButtons = false;

  @action
  showEditButtons() {
    this.showingAddButtons = true;
  }

  @action
  hideEditButtons() {
    this.showingAddButtons = false;
  }

  @action
  deletePerson() {
    const person = this.args.person;
    let delPerson = this.store.peekRecord('person', person.id);
    delPerson.destroyRecord();
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
    this.isEditting = !this.isEditting;
    // if (this.isEditting) {
    this.newName = this.args.person.name;
    // }
  }
}
