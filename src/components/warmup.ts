
// Определите интерфейс для пользователя
interface User {
    id: number;
    name: string;
    email: string;// Добавьте свойство email типа string
  }
  
  // Определите интерфейс для активности пользователя
  interface Activity {
    userId: number;
    activity: string;
    timestamp: Date// Добавьте свойство timestamp типа Date
  }
  
  // Реализуйте функцию fetchData используя Generic. Функция должна возвращать Promise.
  async function fetchData<T>(url: string): Promise <T> {
    return fetch(url).then((res) => res.json());
  }
  
  // Используйте Utility Types для создания Partial и Readonly версий User и Activity
  type PartialUser = Partial<User>;
  type ReadonlyActivity = Readonly<Activity>;
  
  //Типизируйте функцию. userId - число
  function getUserActivities(userId: number) {
    return fetchData(`/api/activities/${userId}`);
  }
  // Используйте ReturnType для создания типа возвращаемого значения функции getUserActivities
  type ActivitiesReturnType = ReturnType<typeof getUserActivities>
  
  // Используйте extends в условных типах для создания типа Permissions
  type AdminPermissions = { canBanUser: boolean };
  type BasicPermissions = { canEditProfile: boolean };

  //пришлось изменить название c "Permissions" на "_Permissions" из-за конфликта названий типов с "lib.dom.d.ts"
  type _Permissions<T> = T extends "Admin" ? AdminPermissions : BasicPermissions;
  
  
  ///ЧАСТЬ 2.
  
  // Определите Type Alias для Union типа String или Number
  type Alias = string | number;
  type StringOrNumber = Alias; // Заполните тип
  
  // Реализуйте функцию logMessage, которая принимает StringOrNumber и не возвращает значение (void)
  function logMessage(message: StringOrNumber): void {
    console.log(message);
    
  }
  
  // Реализуйте функцию throwError, которая никогда не возвращает управление (never)
  function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
  }
  
  // Реализуйте Type Guard для проверки, является ли значение строкой
  function isString(value: StringOrNumber): value is string {
    return typeof value === "string";
  }
  
  // Реализуйте функцию assertIsNumber, которая использует asserts для утверждения типа number
  function assertIsNumber(value: any): asserts value is number {
    if (typeof value !== "number") throw new Error("value is not number");
  }
  
  // Завершите функцию processValue, используя isString и assertIsNumber
  function processValue(value: StringOrNumber) {
    let typeValue = isString(value) ? "String" : "Number";
    logMessage(`${typeValue} value: ${value}`);
  }

export {User};