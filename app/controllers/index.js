// TODO: Delete file
import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createPerson() {
      const newPerson = this.newPerson;
      this.set('newPerson', '');
      const newRecord = this.store.createRecord('person', {
        name: newPerson,
        relationship: 'dp',
      });
      newRecord.save().then(() => {
        this.model.members.content.addObject(newRecord._internalModel);
      });
    },
  },
});
