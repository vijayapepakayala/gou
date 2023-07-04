import { LightningElement, wire } from 'lwc';
import getPageDetails from '@salesforce/apex/testfbpage1.getPageDetails';

export default class FacebookFeed extends LightningElement {
  pageDetails;

  @wire(getPageDetails)
  wiredPageDetails({ error, data }) {
    if (data) {
      this.pageDetails = data;
    } else if (error) {
      console.error('Error retrieving page details:', error);
    }
  }

  handleLike(event) {
    var id = parseInt(event.target.name);
    this.receivedMessage.feed[id - 1].like++;
  }
  
  handleShare(event) {
    var id = parseInt(event.target.name);
    this.receivedMessage.feed[id - 1].share++;
  }
  
}
