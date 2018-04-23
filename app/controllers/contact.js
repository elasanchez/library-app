import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

  emailAddress : '',
  message: '',

  // emailIsEmpty : computed.empty('emailAddress'), //matching regex will eliminate empty case
  emailIsValid: computed.match('emailAddress', /^.+@.+\..+$/), //regex for email

  // textBoxIsEmpty: computed.empty('message'), //checking length of text >= 5 eliminates empty
  islongEnough: computed.gte('message.length', 5),

  conditions: computed.and('emailIsValid', 'islongEnough'), // can be used for AND op
  isDisabled: computed.not('conditions'),
  // Long way without AND and NOT funcitons
  // isDisabled: computed('emailIsValid','islongEnough', function() {
  //   return !this.get('emailIsValid')|| !this.get('islongEnough');
  // }),

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
