import { Component, ViewChild, OnInit, Renderer } from '@angular/core';


@Component({
  selector: 'accordion',
  templateUrl: 'accordion.html'
})
export class AccordionComponent implements OnInit {
  accordionExpanded = false;

  @ViewChild("cc") cardContent: any;
  cards: any;

  constructor(public renderer: Renderer) {
    this.cards = [{
      id: 0,
      "title": "title1",
      "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make "
    },
    {
      id: 1,
      "title": "title2",
      "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make "
    },
    {
      id: 2,
      "title": "title3",
      "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make "
    }];
  }
  ngOnInit() {

  }
  toggleAccordion(cc) {
    console.log(cc);
    if (this.accordionExpanded) {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
    }
    else {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "500px");
    }
    this.accordionExpanded = !this.accordionExpanded;
  }

}
