import { Directive, OnInit, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective implements OnInit {

  @Input('appUnless')
  // tslint:disable-next-line: semicolon
  isSh: boolean

  ngOnInit(){
    if(!this.isSh){
      this.vcRef.createEmbeddedView(this.tmRef)

    }
    else {
      this.vcRef.clear()
    }
    }

  constructor(
    private tmRef: TemplateRef<any>,
    private vcRef: ViewContainerRef


  ) { }

  }
}
