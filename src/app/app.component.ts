import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularLearning';
  users = ['anil', 'sharma', 'kumar', 'don', 'ball', 'bat'];
  userDetail = [
    { name: "Anil", email: "tk@gmail.com", number: '88' },
    { name: "sharma", email: "tk@gmail.com", number: '88' },
    { name: "kumar", email: "tk@gmail.com", number: '88' },
    { name: "don", email: "tk@gmail.com", number: '88' },
    { name: "ball", email: "tk@gmail.com", number: '88' }

  ]
  showMessage = true;

  nesteduserDetail = [
    { name: "Anil", number: 9415041479 ,socialAccount:['fb','gmail','email']},
    { name: "sharma", number: 9451424177 ,socialAccount:['fb','gmail','email']},
    { name: "kumar", number: 7054375331 ,socialAccount:['fb','gmail','email']},
    { name: "don", number: 89604251209 ,socialAccount:['fb','gmail','email']},
    { name: "ball", number: 7376519789 ,socialAccount:['fb','gmail','email']}

  ]
  getData()
  {
    console.warn("function call");
    console.log("function call");
    alert("This is alert")
    
  }

}
