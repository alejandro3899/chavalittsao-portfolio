import { Navigation } from "./cms";

export type Dropdown = {
  label: string;
  items: NonNullable<Navigation["mainNavigation"]>[0]["dropdown"];
};
