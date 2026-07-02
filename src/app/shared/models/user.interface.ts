export interface UserInterface {
  id: number,
  firstName: string,
  lastName: string,
  birthDate: Date,
  gender: 'male' | 'female',
  favorites: number[],
  preferences: string[],
  dislikes: string[]
  allergies?: [string]
}
