module.exports = `
import { Action } from "redux";

export const SELECT_PAGE = "@@your-app/PAGE/SELECT";

interface ISelectPageAction extends Action {
  payload: number;
}

export function selectPage(pageNumber: number): ISelectPageAction {
  return { type: SELECT_PAGE, payload: pageNumber };
}
`;
