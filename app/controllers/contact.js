import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

  emailAddress : '',
  message: '',

  emailIsEmpty : computed.empty('emailAddress'),
  emailIsValid: computed.match('emailAddress', /^.+@.+\..+$/), //regex for email

  textBoxIsEmpty: computed.empty('message'),
  // textBoxIsValid: computed.match('message', /^.*.*a-zA-Z.*.*(a-zA-Z || *).$/),
  islongEnough: computed.gte('message.length', 5),

  // Ember.computed.and('firstComputedProperty', 'secondComputedProperty') can be used for AND op
  isDisabled: computed('emailIsEmpty','emailIsValid', 'textBoxIsEmpty','islongEnough', function() {
    return this.get('emailIsEmpty') ||
     !this.get('emailIsValid') ||
     this.get('textBoxIsEmpty')||
     !this.get('islongEnough');
  }),

  actions:
  {
    sendMessage: function() {
      alert(`Sending your message: \n${this.get('message')} \nContact email: \n${this.get('emailAddress')}`);
      this.set('contactResponseMessage', 'Your message has been received, we will contact you soon! \nThank you for your request.' );
      this.set('emailAddress', '');
      this.set('message','');

    }
  }

});
