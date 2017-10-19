// @flow

import {getNumberFromString} from "string-math-lib";
export function multiplyStrings(a: string, b: string): number {
  return getNumberFromString(a) * getNumberFromString(b);
}
