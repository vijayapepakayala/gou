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

  handleLike() {
    // Handle like button click event
    // Add your logic here
  }

  handleShare() {
    // Handle share button click event
    // Add your logic here
  }
}
