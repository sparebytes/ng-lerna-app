import { Component } from '@angular/core';

import { WidgetsModule } from '@my/widgets';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  aDate = new Date();
}
