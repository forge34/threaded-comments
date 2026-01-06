
export interface User {
  name:string
}

export interface Comment {
  value:string
  likes:number
  user:User;
  children:Comment[]
}


