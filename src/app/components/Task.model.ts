export class Task{
  _description: string = '';
  _id: number = 0;
  _done = false;

  constructor(description: string)
  {
    this._description = description;
  }
}