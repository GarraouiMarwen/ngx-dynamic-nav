# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is ngx-Dynamic-nav ? ###
 It is a dynamic/recursive nav, it helps you in displaying a navigation in a vertical way
 for example if you need to create a nav with the following schema.

 Home 

  => customers

      => active
          => since 1990
            ... 
          => since 1988
          ...
      => blocked
  => contracts

      => open
      => closed

All you need is  to put elements in an array of json objects.
You can keep the default css, or you can put your custom css.

#Setup
1- In your root application folder run:
 ```npm i ngx-dynamic-nav```

2- Once ngx-dynamic-nav is installed, you need to import the main module NgxDynamicNavModule :

```import {NgxDynamicNavModule} from 'ngx-dynamic-nav';```

````
@NgModule({
...
imports: [NgxDynamicNavModule, ...],
...
})
export class YourAppModule {
}
````
3- Then use it in the specific page:

Assuming you want to create a nav then all you need is to follow these steps:
We are using fontawesome to display icon on each item.
In your xxx.component.ts create your own nav array like this:

```
import {Component} from '@angular/core';
import {MenuItemConfig} from '@ngx-dynamic-nav/models/MenuItemConfig';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'navTest';
config = 'dark';
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
}
]
}
```

in xxx.component.html:
try something like this:
````
<div class="container-fluid h-100 body-content">
  <div class="content">
    <div class="row">
      <div class="col-lg-3">
        <!-- set menuItemConfig here  as input in app-ngx-nav!-->
        <ngx-dynamic-nav [menuItems]="ngNavConfig" [config]="config"></ngx-dynamic-nav>
      </div>
      <div class="col-lg-9"></div>
    </div>
  </div>
</div>
````
that's all!

Hope it can Help you :) 

* Configuration
* Dependencies
* Database configuration
* How to run tests
* Deployment instructions

#Donation
Did this project help you to reduce time? I won't say no to a cup of coffee 🍵 :)


<a href="https://www.paypal.com/donate?hosted_button_id=PEWHLPGFQ4NYU">
  <img src="https://raw.githubusercontent.com/stefan-niedermann/paypal-donate-button/master/paypal-donate-button.png" alt="Donate with PayPal" />
</a>

#Keywords

angular nav,menu, Dynamic-nav, vertical-nav, directive, recursive-nav
