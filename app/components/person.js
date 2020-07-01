import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PersonComponent extends Component {
  @service store;
  @tracked isEditting = false;
  @tracked newName = this.args.person.name;
  @tracked newPerson = '';
  @tracked newPeer = '';

  @action
  deletePerson() {
    const person = this.args.person;
    let delPerson = this.store.peekRecord('person', person.id);
    delPerson.destroyRecord().then(() => {
      // const people = this.store.peekAll('person');
      // people.content.forEach((element) => {
      //   console.log(element);
      // });
      // this.store.findRecord('person', person.id).then(function (updatedPerson) {
      //   // ...after the record has loaded
      //   updatedPerson.reporters.remove(delPerson.id);
      //   person.save();
      // });
      // this.args.members.content.addObject(newRecord._internalModel);
    });
  }

  @action
  updatePerson() {
    const person = this.args.person;
    let newName = this.newName;
    this.store.findRecord('person', person.id).then(function (updatedPerson) {
      // ...after the record has loaded
      updatedPerson.name = newName;
      person.save();
    });
    this.toggleEditting();
  }

  @action
  async createReporter() {
    const newPerson = this.newPerson;
    const person = this.args.person;
    this.newPerson = '';
    let reporter = this.store.createRecord('person', {
      name: newPerson,
    });
    let reporters = await person.reporters;
    reporters.pushObject(reporter);
    reporter.save().then(function () {
      person.save();
    });
  }

  @action
  async createPeer() {
    const newPeer = this.newPeer;
    const person = this.args.person;
    this.newPeer = '';
    let peer = this.store.createRecord('person', {
      name: newPeer,
      manager: person.manager,
    });
    peer.save();
  }

  @action
  toggleEditting() {
    this.isEditting = !this.isEditting;
    // if (this.isEditting) {
    this.newName = this.args.person.name;
    // }
  }
}
