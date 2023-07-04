import { LightningElement } from 'lwc';

export default class CallinglightningFlow extends LightningElement {
// Add any properties or variables you need here

    // Add any lifecycle hooks or methods here

    // Example method to handle flow status changes
    handleFlowStatusChange(event) {
        // Retrieve the flow status from the event
        const flowStatus = event.detail.status;

        // Perform actions based on the flow status
        if (flowStatus === 'FINISHED') {
            // Flow finished logic
        } else if (flowStatus === 'ERROR') {
            // Flow error logic
        }
    }
}

