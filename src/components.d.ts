/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface PersonCard {
    'contact': string;
    'other': string;
  }
}

declare namespace LocalJSX {
  interface PersonCard extends JSXBase.HTMLAttributes {
    'contact'?: string;
    'onSharing'?: (event: CustomEvent<any>) => void;
    'other'?: string;
  }

  interface IntrinsicElements {
    'person-card': PersonCard;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


declare global {



  interface HTMLPersonCardElement extends Components.PersonCard, HTMLStencilElement {}
  var HTMLPersonCardElement: {
    prototype: HTMLPersonCardElement;
    new (): HTMLPersonCardElement;
  };

  interface HTMLElementTagNameMap {
    'person-card': HTMLPersonCardElement;
  }

  interface ElementTagNameMap extends HTMLElementTagNameMap {}
}

