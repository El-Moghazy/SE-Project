import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'fa fa-home',
    link: '/dashboard',
    home: true
  },
  {
    title: 'Items',
    icon: 'fa fa-shopping-basket',
    link: '/dashboard/items'
  },
  {
    title: 'Store',
    icon: 'fa fa-shopping-cart',
    link: '/dashboard/store'
  },
  {
    title: 'Login',
    icon: 'fa fa-sign-in-alt',
    link: '/dashboard/login'
  },
  {
    title: 'Sign Up',
    icon: 'fa fa-user-plus',
    link: '/dashboard/signup'
  },
  {
    title: 'Team',
    icon: 'fa fa-users',
    link: '/dashboard/team'
  },
  {
    title: 'About',
    icon: 'fa fa-info',
    link: '/dashboard/about'
  }
];
