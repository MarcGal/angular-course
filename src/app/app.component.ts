import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-course-beginner';

  onLogoClicked() {
    alert('Hello world');
  }

  onKeyUp(newTitle: string) {
    console.log(newTitle);
    this.title = newTitle;
  }

}
