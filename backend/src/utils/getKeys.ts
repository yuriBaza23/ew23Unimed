import { Patient } from "../entities/Patient";
import { IClient } from "../interfaces/IClient";

export function getUserKeys() {
  let toReturn: Array<keyof IClient> = [];
  type PropsArray = Array<keyof IClient>;
  const propsArray: PropsArray = Object.keys(new Patient({} as IClient)) as PropsArray;

  for (const prop of propsArray) {
    if (prop === 'id') continue;
    toReturn.push(prop);
  }
  return toReturn;
}