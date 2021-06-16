import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavToAccountPage extends NavigationMixin(LightningElement) {

    @api accountid;

    navigateToRecordViewPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.accountid,
                objectApiName: 'Account',
                actionName: 'view'
            }
        });
    }
}