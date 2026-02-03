
export interface PeaceMessage {
  id: string;
  author: string;
  content: string;
  date: string;
}

export enum AppSection {
  HOME = 'home',
  WISDOM = 'wisdom',
  MEDIATOR = 'mediator'
}
