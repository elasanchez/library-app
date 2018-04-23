import {
  computed
  // observer,
  // empty,
} from '@ember/object';
// import { match, not } from '@ember/object/computed'
import Controller from '@ember/controller';

export default Controller.extend({

  emailAddress: '',
  headerMessage: 'Coming Soon',
  // isDisabled : empty('emailAddress')

  isValid: computed.match('emailAddress', /^.+@.+\..+$/), //regex for email
  isDisabled: computed.not('isValid'),

  actions: {
    saveInvitation() {
      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      // set the responseMessage property
      this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
      // Clearing email textbox
      this.set('emailAddress', '');
    }
  }

  // isDisabled: computed('emailAddress', function() {
  //   return this.get('emailAddress') === '';
  // })

  // emailAddressChanged: observer('emailAddress', function() {
  //   console.log(this.get('emailAddress'));
  // }),


  //Computed and observer function templates

  // actualEmailAddress: computed('emailAddress', function() {
   
  //   console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
  // }),
  //
  // emailAddressChanged: observer('emailAddress', function() {
   
  //   console.log('observer is called', this.get('emailAddress'));
   
  // })


});
