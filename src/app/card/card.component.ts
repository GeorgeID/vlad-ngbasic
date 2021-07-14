// TODO  binding method bugfix - замена logo Angular
// import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
// TODO  binding method bugfix = замена logo Angular, button
// export class cardComponent implements OnInit {
export class cardComponent implements OnInit {
  // Директивы работы *ngIf, *ngFor с коллекцией элементов
  // 5. добавляем декоратор на лок.переменную
  // Директивы работы *ngIf, *ngFor с коллекцией элементов
  // 5. добавляем декоратор на лок.переменную
  @Input()
  card!: Card;
  // исправлено ->
  // @Input() card: Card | undefined;

  // Ввод индексов для каждого элемента 2
  // @Input() index: number;;
  // исправлено ->
  @Input()
  index!: number;

  title: string = 'Мой заголовок карточки';
  text: string =
    'Этот текст - пример интерполяции переменной text класса cardComponent';

  // пайпы-трансформеры внутри шаблона 1 -?
  cardDate: Date = new Date();

  // Директива [ngClass] с добавлением классов
  // Расхождение в определении property с Владом
  // Свойство "textColor" не имеет инициализатора, и ему не гарантировано присваивание в конструкторе.ts(2564)
  // (property) cardComponent.textColor: string
  // textColor: string;
  //  ->
  // textColor: string | undefined;- не работает
  textColor!: string;

  // textColor = "black";
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
  ngOnInit() {}
  // Event binding
  changeTitle() {
    this.card.title = 'Заголовок был изменен';
  }
  // // 1 two-way binding
  // inputHandler(event: any) {
  //   const value = event.target.value;
  //   this.title = value;
  // }
  // 2 two-way binding
  inputHandler(value: string) {
    this.title = value;
  }
  // 3 two-way binding с помощью включения модуля FormsModule
  changeHandler() {
    console.log(this.title);
  }
}
