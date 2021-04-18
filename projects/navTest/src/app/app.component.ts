import {Component} from '@angular/core';
import {MenuItemConfig} from '../../../ngx-nav/src/lib/models/MenuItemConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'navTest';
  config = 'light';
  borderBottom = '1px solid #9a0245';
  ngNavConfig: MenuItemConfig[] = [
    {
      leftIcon: 'home',
      itemText: 'Home',
      openedItem: false,
      itemClass: 'nav-item mx-0 mx-lg-1',
      itemId: 'Home',
      itemPath: '/home',
      hidden: false,
      backgroundColor: '',
      borderBottom: this.borderBottom
    },
    {
      leftIcon: 'tasks',
      itemText: 'Operation',
      openedItem: false,
      itemClass: 'nav-item mx-0 mx-lg-1',
      itemId: 'Operation',
      itemPath: '/operations',
      hidden: false,
      backgroundColor: '',
      borderBottom: this.borderBottom,
      children: [
        {
          leftIcon: 'coffee',
          itemText: 'J 98741',
          itemClass: 'nav-item mx-0 mx-lg-1 second-level',
          itemPath: '/',
          itemId: 'J_1*98',
          backgroundColor: '#1a293a',
          borderBottom: this.borderBottom,
          borderTop: this.borderBottom,
          children: [
            {
              leftIcon: 'coffee',
              itemText: 'J zd1',
              itemClass: 'nav-item mx-0 mx-lg-1 second-level',
              itemPath: '/',
              itemId: 'J_187',
              backgroundColor: '#1a293a',
              paddingLeft: '50px',
              borderBottom: this.borderBottom,
              borderTop: this.borderBottom,
            },
            {
              leftIcon: 'coffee',
              itemText: 'J 87z2',
              itemClass: 'nav-item mx-0 mx-lg-1 second-level',
              itemPath: '/',
              backgroundColor: '#1a293a',
              itemId: 'J_azez2',
              paddingLeft: '50px',
              borderBottom: this.borderBottom
            }
          ]
        },
        {
          leftIcon: 'coffee',
          itemText: 'J 2632',
          itemClass: 'nav-item mx-0 mx-lg-1 second-level',
          itemPath: '/',
          backgroundColor: '#1a293a',
          itemId: 'J_23256',
          borderBottom: this.borderBottom,
          children: [
            {
              leftIcon: 'coffee',
              itemText: 'J zer1',
              itemClass: 'nav-item mx-0 mx-lg-1 second-level',
              itemPath: '/',
              itemId: 'J_1azera',
              backgroundColor: '#1a293a',
              borderBottom: this.borderBottom,
              borderTop: this.borderBottom,
            },
            {
              leftIcon: 'coffee',
              itemText: 'J é"h2',
              itemClass: 'nav-item mx-0 mx-lg-1 second-level',
              itemPath: '/',
              backgroundColor: '#1a293a',
              itemId: 'J_2dfg',
              borderBottom: this.borderBottom
            }
          ]
        }
      ]
    },
    {
      leftIcon: 'tasks',
      itemText: 'Challenges',
      openedItem: false,
      itemClass: 'nav-item mx-0 mx-lg-1',
      itemId: 'Challenges',
      itemPath: '/operations',
      hidden: false,
      backgroundColor: '',
      borderBottom: this.borderBottom
    },
    {
      leftIcon: 'sign-in-alt',
      itemText: 'Login',
      openedItem: false,
      itemClass: 'nav-item mx-0 mx-lg-1',
      itemId: 'Login',
      itemPath: '/login',
      hidden: false,
      backgroundColor: '',
      borderBottom: this.borderBottom,
      children: [
        {
          leftIcon: 'coffee',
          itemText: 'login_1',
          itemClass: 'nav-item mx-0 mx-lg-1 second-level',
          itemPath: '/',
          itemId: 'L_0',
          backgroundColor: '#0f1d32',
          borderBottom: this.borderBottom,
          borderTop: this.borderBottom,
        },
        {
          leftIcon: 'coffee',
          itemText: 'login_2',
          itemClass: 'nav-item mx-0 mx-lg-1 second-level',
          itemPath: '/',
          backgroundColor: '#0f1d32',
          itemId: 'L_2',
          borderBottom: this.borderBottom
        },
        {
          leftIcon: 'envelope',
          itemText: 'New Item',
          itemClass: 'nav-item mx-0 mx-lg-1 second-level',
          itemPath: '/',
          itemId: 'login_3',
          hidden: false,
          openedItem: false,
          backgroundColor: '#0f1d32',
          borderBottom: this.borderBottom,
          children: [
            {
              leftIcon: 'coffee',
              itemText: 'Item 1',
              itemClass: 'nav-item mx-0 mx-lg-1 second-level',
              itemPath: '/',
              itemId: 'Item_1',
              openedItem: false,
              backgroundColor: '#305689',
              paddingLeft: '25px',
              borderBottom: this.borderBottom,
              borderTop: this.borderBottom,
              children: [
                {
                  leftIcon: 'coffee',
                  itemText: 'Test1',
                  itemClass: 'nav-item mx-0 mx-lg-1 second-level',
                  itemPath: '/',
                  backgroundColor: '#12345a',
                  itemId: 'T_1',
                  paddingLeft: '50px',
                  borderBottom: this.borderBottom,
                },
                {
                  leftIcon: 'coffee',
                  itemText: 'Test 2',
                  itemClass: 'nav-item mx-0 mx-lg-1 second-level',
                  itemPath: '/',
                  backgroundColor: '#12345a',
                  itemId: 'T_2',
                  paddingLeft: '50px',
                  borderBottom: this.borderBottom,
                }
              ]
            },
            {
              leftIcon: 'coffee',
              itemText: 'Item 2',
              itemClass: 'nav-item mx-0 mx-lg-1 second-level',
              itemPath: '/',
              openedItem: false,
              itemId: 'Item_2',
              backgroundColor: '#305689',
              paddingLeft: '25px',
              borderBottom: this.borderBottom
            }
          ]
        },
        {
          leftIcon: 'envelope',
          itemText: 'New Item10*',
          itemClass: 'nav-item mx-0 mx-lg-1 second-level',
          itemPath: '/',
          backgroundColor: '#0f1d32',
          itemId: 'New_Item10*',
          borderBottom: this.borderBottom,
          children: [
            {
              leftIcon: 'coffee',
              itemText: 'New_Item101',
              itemClass: 'nav-item mx-0 mx-lg-1 second-level',
              itemPath: '/',
              backgroundColor: '#12345a',
              itemId: 'New_Item10*1',
              paddingLeft: '50px',
              borderBottom: this.borderBottom,
              borderTop: this.borderBottom,
            },
            {
              leftIcon: 'coffee',
              itemText: 'New_Item102',
              itemClass: 'nav-item mx-0 mx-lg-1 second-level',
              itemPath: '/',
              backgroundColor: '#12345a',
              itemId: 'New_Item10*2',
              paddingLeft: '50px',
              borderBottom: this.borderBottom,
            }
          ]
        },
        {
          leftIcon: 'envelope',
          itemText: 'New Item11*',
          itemClass: 'nav-item mx-0 mx-lg-1 second-level',
          itemPath: '/',
          backgroundColor: '#0f1d32',
          itemId: 'New_Item11*',
          borderBottom: this.borderBottom
        }
      ]
    },
    {
      leftIcon: 'user-plus',
      itemText: 'Register',
      openedItem: false,
      itemClass: 'nav-item mx-0 mx-lg-1',
      itemId: 'Register',
      itemPath: '/register',
      hidden: false,
      backgroundColor: '',
      borderBottom: this.borderBottom
    },
    {
      leftIcon: 'bars',
      itemText: 'My Jokes',
      openedItem: false,
      itemClass: 'nav-item mx-0 mx-lg-1',
      itemId: 'My_Jokes',
      hidden: false,
      backgroundColor: '',
      borderBottom: this.borderBottom,
      children: [
        {
          leftIcon: 'coffee',
          itemText: 'Jokes New Joke',
          itemClass: 'nav-item mx-0 mx-lg-1 second-level',
          itemPath: '/',
          itemId: 'Jokes_New_Joke',
          backgroundColor: '#0f1d32',
          borderBottom: this.borderBottom,
          borderTop: this.borderBottom,
          children: [
            {
              leftIcon: 'coffee',
              itemText: 'Jokes Test1',
              itemClass: 'nav-item mx-0 mx-lg-1 second-level',
              itemPath: '/',
              backgroundColor: '#1a293a',
              itemId: 'Jokes_New_Test1',
              borderBottom: this.borderBottom,
              borderTop: this.borderBottom,
              paddingLeft: '50px',
              children: [
                {
                  leftIcon: 'coffee',
                  itemText: 'J 1',
                  itemClass: 'nav-item mx-0 mx-lg-1 second-level',
                  itemPath: '/',
                  itemId: 'J_1',
                  backgroundColor: '#1a293a',
                  borderBottom: this.borderBottom,
                  paddingLeft: '75px',
                  children: [
                    {
                      leftIcon: 'coffee',
                      itemText: 'J 121',
                      itemClass: 'nav-item mx-0 mx-lg-1 second-level',
                      itemPath: '/',
                      itemId: 'J_112',
                      backgroundColor: '#1a293a',
                      borderBottom: this.borderBottom,
                      borderTop: this.borderBottom,
                      paddingLeft: '100px',
                    },
                    {
                      leftIcon: 'coffee',
                      itemText: 'J 254',
                      itemClass: 'nav-item mx-0 mx-lg-1 second-level',
                      itemPath: '/',
                      backgroundColor: '#1a293a',
                      itemId: 'J_2_25',
                      borderBottom: this.borderBottom,
                      paddingLeft: '100px',
                    }
                  ]
                },
                {
                  leftIcon: 'coffee',
                  itemText: 'J 2',
                  itemClass: 'nav-item mx-0 mx-lg-1 second-level',
                  itemPath: '/',
                  backgroundColor: '#1a293a',
                  itemId: 'J_2',
                  borderBottom: this.borderBottom,
                  paddingLeft: '75px',
                }
              ]
            },
            {
              leftIcon: 'coffee',
              itemText: 'Jokes Test 2',
              itemClass: 'nav-item mx-0 mx-lg-1 second-level',
              itemPath: '/',
              backgroundColor: '#1a293a',
              itemId: 'J_T_1',
              borderBottom: this.borderBottom,
              paddingLeft: '50px',
              children: [
                {
                  leftIcon: 'coffee',
                  itemText: 'J 198',
                  itemClass: 'nav-item mx-0 mx-lg-1 second-level',
                  itemPath: '/',
                  itemId: 'J_1_98',
                  backgroundColor: '#1a293a',
                  borderBottom: this.borderBottom,
                  borderTop: this.borderBottom,
                  paddingLeft: '75px'
                },
                {
                  leftIcon: 'coffee',
                  itemText: 'J 2965',
                  itemClass: 'nav-item mx-0 mx-lg-1 second-level',
                  itemPath: '/',
                  backgroundColor: '#1a293a',
                  itemId: 'J_2652',
                  paddingLeft: '75px',
                  borderBottom: this.borderBottom
                }
              ]
            }
          ]
        },
        {
          leftIcon: 'coffee',
          itemText: 'All Jokes',
          itemClass: 'nav-item mx-0 mx-lg-1 second-level',
          itemPath: '/',
          backgroundColor: '#0f1d32',
          itemId: 'All_1',
          borderBottom: this.borderBottom
        },
        {
          leftIcon: 'coffee',
          itemText: 'My Jokes',
          itemClass: 'nav-item mx-0 mx-lg-1 second-level',
          itemPath: '/',
          backgroundColor: '#0f1d32',
          itemId: 'M_J',
          borderBottom: this.borderBottom
        }
      ]
    }
  ];
}
