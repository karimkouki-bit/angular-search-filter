import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  term:any;
  list = [
    {id: '1', 'name': 'karim', 'email': 'karim456@gmail.com', 'city': 'sousse'},
    { id: '2','name': 'amin', 'email': 'amin456@gmail.com', 'city': 'hamamam sousse'},
    { id: '3','name': 'rayen', 'email': 'rayen456@gmail.com', 'city': 'nefza'},
    { id: '4','name': 'samir', 'email': 'samir456@gmail.com', 'city': 'tunis'},
    { id: '5','name': 'shiraz', 'email': 'shiraz456@gmail.com', 'city': 'monastir'},
    { id: '6','name': 'farah', 'email': 'karim456@gmail.com', 'city': 'mahdia'},
  ]

  isOpen:boolean = false

  title = 'search-filter-angular';

  togglenavbar(){
    this.isOpen = !this.isOpen
  }
}
