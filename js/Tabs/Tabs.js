
class TabLink {
  constructor(element) {
    this.element = element;
    this.tabContent = document.querySelector(`.tabs-item[data-tab="${this.element.dataset.tab}"]`);
console.log(this.tabContent);
    this.tabContent = new TabItem(this.tabContent);
    this.element.addEventListener('click', () => this.select())

    // Assign this.element to the passed in DOM element
    // this.element;
    
    // Get the custom data attribute on the Link
    // this.data;
    
    // Using the custom data attribute get the associated Item element
    // this.itemElement;
    
    // Using the Item element, create a new instance of the TabItem class
    // this.tabItem;
    
    // Add a click event listener on this instance, calling the select method on click

  };

  select() {
    // this.tabContent.select();
    // Get all of the elements with the tabs-link class
    // const links;
   const links = document.querySelectorAll('.tabs-link');
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach();
    links.forEach(link => {link.classList.remove('tabs-link-selected');
      // console.log(link);
      // console.dir(link);
    });
    this.element.classList.add('tabs-link-selected');

    // Add a class named "tabs-link-selected" to this link
    // this.element;
    this.tabContent.select();
    // Call the select method on the item associated with this link

  }
}

class TabItem {
  constructor(element){
    this.element = element
    // console.dir(this.element);
  }
    // Assign this.element to the passed in element
    // this.element;
    select(){
      // this.element.classList.remove('tabs-item-selected');
      const items = document.querySelectorAll('.tabs-item');
      // console.log(items);
    // Select all ".tabs-item" elements from the DOM
    // const items;
items.forEach(item => {item.classList.remove('tabs-item-selected');
  // console.log(item);
  // console.dir(item);

})


    // Remove the class "tabs-item-selected" from each element
    this.element.classList.add('tabs-item-selected');

    // Add a class named "tabs-item-selected" to this element
    //this.element;
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/
const links = document.querySelectorAll('.tabs-link');
links.forEach(link => new TabLink(link));
