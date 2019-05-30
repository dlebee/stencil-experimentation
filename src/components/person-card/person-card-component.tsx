import { Component, Prop, h, Watch, EventEmitter, Event } from '@stencil/core';
import { IPerson } from './IPerson';

@Component({
    tag: 'person-card',
    styleUrl: 'person-card-style.css',
    shadow: true
})
export class PersonCardComponent
{
    @Prop({mutable: true}) contact: string;
    @Prop() other: string;
    @Event() sharing: EventEmitter;

    private _contact: IPerson;

    @Watch('contact') 
    contactChangeHandler(newValue: string | IPerson) {

        if(typeof newValue == 'string')
            this._contact = JSON.parse(newValue);
        else
            this._contact = newValue;
    }

    componentWillLoad() {
        this.contactChangeHandler(this.contact);
    }

    emitSharedEvent() {
        this.sharing.emit(this._contact);
    }

    render() {
        
        return (
            <div class="person-card">
                <div class="person-card-title">
                    Hello { 
                        this._contact ? 
                        this._contact.firstName + ' ' + this._contact.lastName
                        : 'Stranger'
                    }
                </div>
                <button class="share-button" onClick={() => this.emitSharedEvent()}>Share</button>
            </div>
        );
    }
}