import { LightningElement, wire} from 'lwc';
import recordSelected from '@salesforce/messageChannel/Record_Selected__c';
import {subscribe, unsubscribe, MessageContext} from 'lightning/messageService';


export default class Detail extends LightningElement {
    subscription = null;
    detailsAccount;

    @wire(MessageContext)
    messageContext;

    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    disconnectedCallback() {
        this.unsubscribeToMessageChannel();
    }

    subscribeToMessageChannel() {
        this.subscription = subscribe(
          this.messageContext,
          recordSelected,
          (message) => this.handleMessage(message)
        );
    }
    
    handleMessage(message) {
        this.detailsAccount = message.recordData;
    }

    unsubscribeToMessageChannel() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }    
}