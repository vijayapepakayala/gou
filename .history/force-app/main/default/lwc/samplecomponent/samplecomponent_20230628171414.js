import { LightningElement} from 'lwc';

export default class Samplecomponent extends LightningElement {
     Name;
    handleClick(event){
        this.Name=event.target.value

    }


}


