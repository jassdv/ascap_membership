# ascap_membership

> rewriting membership step with Vue

# description:
I used Vue.js framework and VueX store to refactore the membership page 
reference to the original website: https://ome.ascap.com/

Components:
App - the main page that holds the entire sigle application
Section - a container of a section in the membership application displays a              title and a number that represents the step the user is at
          Section component has a slot to ender any conent that is relevant to the step of the membership application
SectionMembership - a section that is only relevant for the membership step of                     the entire membership application. it renders 3 cards for                      the 3 types of memberships, a drop down list for the                           publisher company type if neccessary and two buttons:                          'cancel' and 'continue'
DropDown - a component that displays a drop down list that it gets as props
Card - a component that represents a membership plan that user can choose in          the first step of the membership application


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
