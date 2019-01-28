
import { Component, ViewChild, OnInit, Renderer, Input } from '@angular/core';

/**
 * Generated class for the Accordion4Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accordion4',
  templateUrl: 'accordion4.html'
})
export class Accordion4Component implements OnInit {

  accordionExapanded = false;
  @ViewChild("dd") cardContent: any;
  @Input('title') title: string;
  icon: string = "arrow-forward";

  constructor(public renderer: Renderer) {
    
  }
  	ngOnInit() {
    console.log(this.cardContent.nativeElement);
    this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
  }

  toggleAccordion() {

    if (this.accordionExapanded) {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 16px");

    } else {

      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "800px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "13px 16px");
       this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";

    }

    this.accordionExapanded = !this.accordionExapanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";

  }

}
