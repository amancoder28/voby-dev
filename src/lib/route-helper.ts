import { $ } from "voby";

let url = new URL(location.href).pathname;

export const route = $(url);

export const routeTo = (to: string, event: Event) => {
  event.preventDefault();
  history.pushState({}, url, to);

  route(new URL(location.href).pathname);
};
