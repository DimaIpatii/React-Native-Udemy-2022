export enum Direction {
    AllExpences = "AllExpences",
    RecentExpences = "RecentExpences",
    ManageExpence = "ManageExpence",
    NewExpence = "NewExpence",
    UpdateExpence = "UpdateExpence"
  }

  export interface IExpenseItem{
    id: number,
    title: string,
    date: string,
    price: number
};