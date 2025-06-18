// Navigation and Layout Types
export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
  isExternal?: boolean;
}

export interface DropdownItem {
  label: string;
  href: string;
}

export interface NavDropdown {
  label: string;
  href: string;
  items: DropdownItem[];
}

export interface NavigationProps {
  currentPath?: string;
}

export interface FooterSection {
  title: string;
  content?: string;
  links?: Array<{
    label: string;
    href: string;
  }>;
}

export interface ContactInfo {
  email: string;
  phone: string;
}

export interface FooterProps {
  sections: FooterSection[];
  contactInfo: ContactInfo;
  companyName: string;
  tagline: string;
  year: number;
}
