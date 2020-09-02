export const LOGIN_DATA = 'LOGINDATA';
export const LOG_OUT = 'LOG_OUT';

export function clickOnLogin(value) {
  return { type: LOGIN_DATA, data: value };
}

export function clickOnLogOut(value) {
  return { type: LOG_OUT, data: value };
}
