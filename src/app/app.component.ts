import { Component } from '@angular/core';

// Директивы работы *ngIf, *ngFor с коллекцией элементов
// 2. создаем интерфейс описывающий каждый из этих злементов
export interface Card {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'vlad-ngbasic';

  // Директивы управления отображаемости элементов =
  // Скрыть или показать карточки
  // 1. Добавляем метод toggleCards
  // 2. Создаем метод и переменную
  toggle = true;

  // Директивы работы *ngIf, *ngFor с коллекцией элементов
  // 1. создаем массив cards[] состоящий из объектов
  // 2. создаем интерфейс описывающий каждый из этих злементов
  // 3. Каждый объект должен содержать в себе обязательные поля
  cards: Card[] = [
    { title: 'Карточка 1', text: 'Это карточка номер 1' },
    { title: 'Это Карточка 2', text: 'Это карточка номер 2' },
    { title: 'Последняя Карточка 3', text: 'Это карточка номер 3' },
  ];

  toggleCards() {
    this.toggle = !this.toggle;
  }
}
