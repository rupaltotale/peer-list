import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PersonComponent extends Component {
  @service store;
  @tracked isEditting = false;
  @tracked newName = this.args.person.name;
  @tracked newPerson = '';

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
  createReporter() {
    const newPerson = this.newPerson;
    this.newPerson = '';
    const person = this.args.person;
    const newRecord = this.store.createRecord('person', {
      name: newPerson,
    });
    newRecord.save().then(() => {
      this.store.findRecord('person', person.id).then(function (updatedPerson) {
        // ...after the record has loaded
        updatedPerson.reporters.push(newRecord.id);
        person.save();
      });
      // this.args.members.content.addObject(newRecord._internalModel);
    });
  }

  @action
  toggleEditting() {
    this.isEditting = !this.isEditting;
    if (this.isEditting) {
      this.newName = this.args.person.name;
    }
  }
}
