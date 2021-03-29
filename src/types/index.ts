export enum MenuDrawerVariants {
  "Authoring" = "Authoring",
  "Article" = "Article",
  "Code" = "Code",
}

export type EditableContentBlock = {
  id: string;
  tag: string;
  html: string;
  ref?: any;
};
