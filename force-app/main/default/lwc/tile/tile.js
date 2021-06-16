import { LightningElement, api,wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';

import recordSelected from '@salesforce/messageChannel/Record_Selected__c';


export default class Tile extends LightningElement {
    @api account;

    @wire(MessageContext)
    messageContext;

    tileClick() {
        const payload = { recordData: this.account};
        publish(this.messageContext, recordSelected, payload);
    }
}