
interface LinkItem {
  id: number;
  linkItem: string;
  navigateTo?: string;
  
}

// Navigation interface
export interface NavigationType {
  uniqueID: string;
  navigationLinks: LinkItem[];
}

// Services interface
export interface ServicesType {
  uniqueID: string;
  servicesOptions: LinkItem[];
}

export interface GenericListType {
  uniqueID: string;
  items: LinkItem[];
}

export const NavigationData: GenericListType = {
  uniqueID: "1",
  items: [
    { id: 1, linkItem: "Home" , navigateTo: "hero-section" },
    { id: 2, linkItem: "All Cars" , navigateTo: "about_section" },
    { id: 3, linkItem: "Out Services" , navigateTo: "projects_section" },
    { id: 4, linkItem: "Reviews" , navigateTo: "experiance-section" },
    { id: 5, linkItem: "Contact us" , navigateTo: "contact_section" },
    { id: 6, linkItem: "Blogs" , navigateTo: "contact_section" },

  ]
};

export const ServicesData: GenericListType = {
  uniqueID: "2",
  items: [
    { id: 1, linkItem: "Car Sell" },
    { id: 2, linkItem: "Car for Rent" },
    { id: 3, linkItem: "Car Maintaince" },
    { id: 4, linkItem: "Car Insurance" },
    { id: 5, linkItem: "Car Exchange" }, 
    { id: 6, linkItem: "Car Buying" },
  ]
};

export const Socials: GenericListType = {
  uniqueID: "3",
  items: [
    { id: 1, linkItem: "Instagram" },
    { id: 2, linkItem: "Facebook" },
    { id: 3, linkItem: "X.com" },
    { id: 4, linkItem: "Whatsapp" },
    { id: 4, linkItem: "Email" },

  ]
};