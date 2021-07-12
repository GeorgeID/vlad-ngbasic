import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'vlad-ngbasic';
  
  // Директивы упраления отображаемости элементов =
  // Скрыть или показать карточки
  // 1. Добавляем метод toggleCards
  // 2. Создаем метод и переменную
  toggle = true;
  toggleCards() {
    this.toggle = !this.toggle;
  }
}
