import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appEventIcon]'
})
export class EventIconDirective {

  @Input() set appEventIcon(eventType :{type:string,detail :string}) {
    const iconType = this.getIconForEventType(eventType.type,eventType.detail);

    if (iconType) {
      this.renderer.setAttribute(this.el.nativeElement, 'src', iconType);
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  private getIconForEventType(eventType: string, detail:string): string {
    // Aquí puedes definir la lógica para mapear el tipo de evento a la ruta de la imagen del icono.
    console.log(eventType)
    switch (eventType) {
      case 'subst':
        return 'https://image-service.onefootball.com/transform?w=24&h=24&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Fcw%252Ficons%252Fsubstitution.svg';
      case 'Goal':
        return 'https://oneftbl-cms.imgix.net/https%3A%2F%2Fimages.onefootball.com%2Fcw%2Ficons%2Fgoal-dark.svg?auto=format%2Ccompress&crop=faces&dpr=2&fit=crop&h=24&q=25&w=24&s=e4ba345d35e1b099bf0e05b57b6ab288';
      case 'Card':
        {

        if(detail==='Red Card')
          return '../assets/red_card.png';
        else
          return 'https://image-service.onefootball.com/transform?w=24&h=24&dpr=2&image=https%253A%252F%252Fimages.onefootball.com%252Fcw%252Ficons%252Fyellow-card-light.svg'
        }
      default:
        return ''; // Devuelve una ruta vacía o un valor por defecto si el tipo de evento no coincide.
    }
  }
}
