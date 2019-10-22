import { CountReducerType } from '../enums/types';

export const countIntialState: ICountState = {count: 0};

export function countReducer(state: ICountState, action: ICountAction): ICountState {
    const { INCREMENT, DECREMENT} = CountReducerType;

    switch (action.type) {
      case INCREMENT:
        return {count: state.count + 1};
      case DECREMENT:
        return {count: state.count - 1};
      default:
        throw new Error();
    }
  }

export interface ICountState {
    count: number
}

export interface ICountAction {
    type: CountReducerType
}