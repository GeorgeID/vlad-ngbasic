import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class cardComponent {
  title = 'Мой заголовок карточки';
  text =
    'Этот текст - пример интерполяции переменной text класса cardComponent';
  // number = 42;
  // array = [1, 1, 2, 3, 5, 8, 12];
  obj = {
    name: 'Владилен',
    info: {
      age: 25,
      job: 'frontend',
    },
  };
  textObj = 'Так выглядит интерполяция obj|канал json';

  getInfo(): string {
    return 'Это моя инфа - декоратор @Component () класс cardComponent( метод getInfo())';
  }
}
