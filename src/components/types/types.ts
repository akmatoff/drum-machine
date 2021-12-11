export interface IDrumMachine {
  drumPads: IDrumPad[];
  updateDrumPadsState: Function;
}

export interface IDrumPad {
  src: string;
  id: string;
  title: string;
  clicked: boolean;
}

export interface IDrumPadComponent {
  src: string;
  id: string;
  title: string;
  clicked: boolean;
  updateDrumPadsState: Function;
}