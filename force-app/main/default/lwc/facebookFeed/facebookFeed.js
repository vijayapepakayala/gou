import { LightningElement, wire } from 'lwc';
import getPageDetails from '@salesforce/apex/testfbpage1.getPageDetails';

export default class FacebookFeed extends LightningElement {
  pageDetails;

  @wire(getPageDetails)
  wiredPageDetails({ error, data }) {
    if (data) {
      this.pageDetails = {
        id: data.id1,
        name: data.name1,
        website: data.website1,
        fancount: data.fancount1,
      };
    } else if (error) {
      console.error('Error retrieving page details:', error);
    }
  }

  handleLike(event) {
    var id = parseInt(event.target.name);
    this.pageDetails.feed[id - 1].like++;
  }
  
  handleShare(event) {
    var id = parseInt(event.target.name);
    this.pageDetails.feed[id - 1].share++;
  }
}
