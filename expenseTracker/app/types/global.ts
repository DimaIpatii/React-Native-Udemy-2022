export enum Direction {
    AllExpences = "AllExpences",
    RecentExpences = "RecentExpences",
    ManageExpence = "ManageExpence",
    NewExpence = "NewExpence",
    UpdateExpence = "UpdateExpence",
    SignIn = "SignIn",
    SignUp = "SignUp",
    Welcome = "Welcome"
}

export enum Authenticate {
  signUp = "signUp",
  signInWithPassword = "signInWithPassword"
}

export interface IExpenseItem{
    id: string,
    title: string,
    date: string,
    price: number
};


