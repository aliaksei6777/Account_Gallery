import { LightningElement, track} from 'lwc';
import getAccountList from '@salesforce/apex/AccountData.getAccountList';


export default class Selector extends LightningElement {
    @track accounts;

    value = 'all';

    get options() {
        return [
            { label: 'All types', value: 'all' },
            { label: 'Technology Partner', value: 'Technology Partner' },
            { label: 'Customer - Direct', value: 'Customer - Direct' },
            { label: 'Prospect', value: 'Prospect' },
            { label: 'Installation Partner', value: 'Installation Partner' }
        ];
    }

    connectedCallback() {
        this.fetchData()
    }
    
    async fetchData(){
        try {
            let result = await getAccountList({selectType: this.value})
            this.accounts = result;
        } catch (e){
            console.log('Selector error ',e);
        }
    }

    handleChange(event) {
        this.value = event.detail.value;
        this.fetchData()
    }

    
}