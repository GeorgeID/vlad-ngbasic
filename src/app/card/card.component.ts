// TODO  binding method bugfix - замена logo Angular
// import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
// TODO  binding method bugfix = замена logo Angular, button
// export class cardComponent implements OnInit {
export class cardComponent {
  title = 'Мой заголовок карточки';
  text =
    'Этот текст - пример интерполяции переменной text класса cardComponent';
  // number = 42;
  // array = [1, 1, 2, 3, 5, 8, 12];
  // obj = {
  //   name: 'Владилен',
  //   info: {
  //     age: 25,
  //     job: 'frontend',
  //   },
  // };
  // textObj = 'Так выглядит интерполяция obj|канал json';
  disabled = false;

  getInfo(): string {
    return 'Это моя инфа - декоратор @Component () класс cardComponent( метод getInfo())';
  }

  imgUrl: String = 'https://angular.io/assets/images/logos/angular/angular.svg';
  // imgUrl: String = '/src/assets/logo-angular.png';
  // imgUrl2: String = 'https://www.dotcom-monitor.com/blog/wp-content/uploads/sites/3/2020/05/Vue-logo-1.png';

  // TODO  binding method bugfix
  // ngOnInit() {
  //   setTimeout(handler: () => {
  //     this.imgUrl = 'https://www.dotcom-monitor.com/blog/wp-content/uploads/sites/3/2020/05/Vue-logo-1.png';
  //   this.disabled = true;
  //   }, timeout: 3000)
  // }

  // Event binding
  changeTitle() {
    this.title = 'Заголовок был изменен';
  }
  // // 1 - two-way binding
  // inputHandler(event: any) {
  //   const value = event.target.value;
  //   this.title = value;
  // }
  // 1 - two-way binding
  inputHandler(value: string) {
    this.title = value;
  }
}
