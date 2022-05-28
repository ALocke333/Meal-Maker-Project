const menu = {
  
    courses : {
   
    appetizers : [],
   
    mains : [],
   
    desserts : [],
    },

    get appetizers() {
      return this.courses.appetizers;
    },
    get mains() {
      return this.courses.mains;
    },
    get desserts() {
      return this.courses.desserts;
    },

     get courses() {
      return{
        appetizers : this.appetizers,
        mains : this.mains,
        desserts : this.desserts,
      };
    },


  addDishToCourse(courseName, dishName, dishPrice) {
     const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this.courses [courseName].push(dish);
  },
    getRandomDishFromCourse(courseName) {
      const dishes = this.courses[courseName];
     const randomIndex = Math.floor(Math.random() * dishes.length);
     return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizers = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
  },
};

    menu.addDishToCourse('appetizers', 'Crab Cakes', 16.00);
menu.addDishToCourse('appetizers', 'House Salad', 16.00);
menu.addDishToCourse('appetizers', 'Artichoke Dip', 12.00);

menu.addDishToCourse('mains', 'Burger', 20.00);
menu.addDishToCourse('mains', 'Lobster Roll', 24.00);
menu.addDishToCourse('mains', 'Seafood Pasta', 26.00);

menu.addDishToCourse('desserts', 'Sorbet', 10.00);
menu.addDishToCourse('desserts', 'Lava Cake', 10.00);
menu.addDishToCourse('desserts', 'Creme Brulee', 10.00);

const meal = menu.generateRandomMeal();
console.log(meal);

//not working properly
