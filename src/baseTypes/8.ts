/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/
type Male = {
  male: string,
}

type Female = {
  female: string,
}

type Gender = Male | Female


const myGender = 'male';

export {};
