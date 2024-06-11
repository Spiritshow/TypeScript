// Задание 8: Реализация обобщённой функции для сопоставления и преобразования элементов массива
// Цель: Создать функцию mapAndFilter, которая будет принимать массив объектов, функцию для их преобразования и функцию для фильтрации результатов. Функция должна использовать два параметра Generic: один для типа элементов входного массива, а другой для типа элементов выходного массива.

// Описание задачи: Функция mapAndFilter должна выполнить следующие функции:
// Применить функцию преобразования ко всем элементам входного массива.
// Фильтровать преобразованные элементы с помощью предоставленной функции фильтрации.
// Возвращать новый массив с результатами, которые прошли фильтрацию.
interface Person {
    name: string;
    age: number;
}
  
interface Adult {
    fullName: string;
    age: number;
}
  
// Напишите функцию mapAndFilter здесь. Используйте два параметра Generic: T для типа входных данных и U для типа выходных данных.
function mapAndFilter<T,U>(items: T[], transform: (item: T) => U, filter: (item: U) => boolean): U[];
function mapAndFilter<T,U>(items: T[], transform: (item: T) => U, filter: (item: U) => boolean, sort: (a:U,b:U) => number): U[];
function mapAndFilter<T,U>(items: T[], transform: (item: T) => U, filter: (item: U) => boolean, sort?: (a:U,b:U) => number): U[] {
    if(sort == undefined)
        return items.map(transform).filter(filter);
    else
        return items.map(transform).sort(sort).filter(filter);
}
  
// Пример данных
const people: Person[] = [
    { name: "Alice", age: 24 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 32 }
];
  
people.sort()

// Пример использования функции mapAndFilter
const adults: Adult[] = mapAndFilter(
    people,
    (person) => ({ fullName: person.name, age: person.age }),
    (adult) => adult.age >= 18,
    (a,b)=> a.age - b.age
);
  
// Выведите результаты для проверки
console.log(adults);
  
  
//Вопросы после реализации:
// Могут ли типы T и U быть полностью разными или должны иметь общие характеристики? Объясните ваш ответ.
//По сути да, могут быть различными. Так как мы всё равно прописываем преобразование T в U, в параметре transform. 
  