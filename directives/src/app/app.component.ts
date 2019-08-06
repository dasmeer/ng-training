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
        switch (houseIndex) {
            case 0: return "blue";
            case 1: return "green";
            case 2: return "red";
        }
    };

    getHouseNumberStyle = (floorsCount) => ({ fontWeight: `${100 * floorsCount * 2}` });

    isLighted = () => this.isDay ? false : Math.random() > .4;
}
