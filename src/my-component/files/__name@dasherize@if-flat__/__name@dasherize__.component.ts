import { Component, Input, } from '@angular/core';

@Component({
    selector: '<%= dasherize(name+"Component")%>',
    templateUrl: './<%= dasherize(name)%>.component.html',
    styleUrls: [ './<%= dasherize(name)%>.component.css' ]
})

export class <%= classify(name+"Component")%> {

  constructor(){
    console.log( '<%= classify(name) %>' );
  }

}
