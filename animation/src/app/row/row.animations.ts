import { trigger, state, style, transition, animate } from '@angular/animations';
const commonStyle = {
    borderBottom: 'black solid 1px',
    color: 'blue'
};

export const HighlightTrigger = trigger('rowHightlight', [
    state('selected', style([commonStyle, {
        backgroundColor: 'lightgreen',
        fontSize: '20px'
    }])),
    state('not-selected', style([commonStyle, {
        backgroundColor: 'lightblue',
        fontSize: '12px',
        color: 'black'
    }])),
    state('*', style(commonStyle)),
    state('void', style({ opacity: 0 })),
    transition('* => not-selected', animate('200ms')),
    transition('* => selected',
        [animate('400ms 50ms ease-in'), style({
            backgroundColor: 'coral',
            fontSize: '15px',
            color: 'white'
        }),
        animate('250ms ease-in-out', style({
            backgroundColor: 'ligthcoral',
            fontSize: '18px',
            color: 'black'
        })),
        animate('200ms')]
    ),
    transition('void => *', animate('500ms'))
]);