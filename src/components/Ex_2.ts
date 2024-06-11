// Задание 2: Расширенное использование Generics
// Цель: Создать универсальную функцию обработки данных, которая может работать с различными типами данных.

import { User } from "./warmup";

// Определите Generic интерфейс Response с одним параметром типа T. Второй параметр status: number
interface _Response<T> {
    value: T;
    status: number;
}

// Реализуйте и типизируйте функцию, которая возвращает объект Response для переданных данных
function createResponse<T>(data: T, status: number): _Response<T> {
  return { value: data, status: status}
}

// Используйте функцию createResponse для создания ответа с массивом чисел
let Arr = [1,3,5,12]
const numericResponse = createResponse(Arr,400); 

// Используйте функцию createResponse для создания ответа с объектом пользователя (User)
const Valdemar:User = {
    id: 1,
    name: "Valdemar",
    email: "VD@mail.ru"
}
const userResponse = createResponse(Valdemar, 200) // Заполните вызов функции
//---------------------------------------------------------------------------------