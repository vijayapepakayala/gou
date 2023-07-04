import { LightningElement,track,wire } from 'lwc';
import validateCredentials from '@salesforce/apex/LoginController.validateCredentials';
import { NavigationMixin } from 'lightning/navigation';
export default class Loginpage extends NavigationMixin (LightningElement) {
    @track username;
    @track password;
    @track error;
  
    handleUsernameChange(event) {
      this.username = event.target.value;
    }
  
    handlePasswordChange(event) {
      this.password = event.target.value;
    }
  
    @wire(validateCredentials, { username: '$username', password: '$password' })
    wiredValidateCredentials({ error, data }) {
      if (data) {
        // Handle the successful login response
        console.log('Login successful');
      } else if (error) {
        // Handle any errors
        console.error(error);
      }
    }
  
    handleLogin() {
      // Nothing to do here since we are using the wire adapter
      validateCredentials({username:this.username,password:this.password})
      .then(result =>{
        if(result){
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Question__c',
                    actionName: 'home'
                },
            });
          console.log('login successfully');
        }else{
            this.error = 'Invalid username or password';
        }
      })
      .catch(error =>{
        console.error(error);
      });
    }
    }  
