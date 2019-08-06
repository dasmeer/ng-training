import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'directives';
    isDay = true;
    floors = Array(3);
    houses = [3, 2, 3];

    makeItDay = () => this.isDay = true;
    makeItNight = () => this.isDay = false;

    getColourClass = (houseIndex) => {
        
    };

    isLighted = () => this.isDay ? false : Math.random() > .4;
}
