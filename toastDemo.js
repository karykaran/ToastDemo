import { LightningElement,track,wire,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ToastDemo extends LightningElement {
    // connectedCallback(){
    //     const evt = new ShowToastEvent({
    //         title: "Success!",
    //         message: "Successfully Changed " + this.objectApiName,
    //         variant: "info",
    //         mode:'sticky',
    //     });
    //     this.dispatchEvent(evt);
    // }
}