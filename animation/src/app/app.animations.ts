import { trigger, state, style, transition, animate } from '@angular/animations';

export const RemoveTrigger = trigger('rowRemoved', [
    state('void', style({ 
        opacity: 0,
        transform: 'scale(1.5,.5)'
     })),
    transition('* => void', animate('500ms'))
]);