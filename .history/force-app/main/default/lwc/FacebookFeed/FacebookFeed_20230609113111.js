import { LightningElement } from 'lwc';
import {track} from 'lwc';
import getFeeds from "@salesforce/apex/RequestProcessor.getFeeds";

export default class FacebookFeed extends LightningElement {
    @track receivedMessage = [];
hasRendered = false;

  getFeeds(){
     getFeeds().then(response=>{
  
     this.receivedMessage = Json.parse(response);
     for(var i = 0; i < this.receivedmessage.feed.length; i++){
	   this.receivedMessage.feed[i].like = 0;
	   this.receivedMessage.feed[i].Comment = 0;
	   this.receivedMessage.feed[i].share = 0;
	 }
  
    console.log(this.receivedMessage);
    }).catch(error=>{
	   console.log(error);
	})
  
  }
 renderedCallback(){
   if(this.hasrendered == false){
     this.getFeeds();
	 this.hasRendered = true;
   }
 
 }
 handleClick(event){
  var id = parseInt(event.target.name);
  var label = event.target.label;
 
  if(label === "Like"){
    this.receivedMessage.feed[id-1].like++;
  }
  if(label === "Comment"){
    this.receivedMessage.feed[id-1].Comment++;
  }
  if(label === "Share"){
    this.receivedMessage.feed[id-1].Share++;
  }
}
}