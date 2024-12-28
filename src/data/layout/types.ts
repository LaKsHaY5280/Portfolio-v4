export interface NavItem {
  label: string;
  href: string;
}

export interface FooterContent {
  tagline: string;
  sections: string[];
  copyright: string;
  links: {
    label: string;
    href: string;
  }[];
  buttons: {
    label: string;
    href: string;
  }[];
}

export interface ButtonContent {
  label: string;
  href: string;
}

export interface LayoutContent {
  navigation: NavItem[];
  footer: FooterContent;
  button: ButtonContent;
}
