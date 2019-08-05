import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  ifValue = true;

  makeItTrue= () => this.ifValue = true;
  makeItFalse = () => this.ifValue = false;
}
