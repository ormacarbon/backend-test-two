export interface MenuInterface {
  owner: string;
  menu: Menu[] | Menu;
}

export interface Menu {
  name: string;
  description: string;
  ingredients: string[];
}

export interface RemoveItemMenu {
  owner: string;
  id: string;
}