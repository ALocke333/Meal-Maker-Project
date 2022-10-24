var menu = {
  courses: {
    appetizers: [{name :'calamari', price: 18}],
    mains:  [{name: 'steak', price: 30}],
    desserts: [{name: 'cake', price: 12}]
  },

  addDishToCourse : function (courseName, dishName, dishPrice){
   var dish = {
      name: dishName,
      price: dishPrice
  };
  
  if (courseName === 'appetizer') {
    menu.courses.appetizers.push(dish);
  } else if (courseName === 'main') {
    menu.courses.mains.push(dish);
  } else if (courseName === 'dessert') {
    menu.courses.desserts.push(dish);
  } else {
    console.log('Sorry not an option');
  }
},
getRandomDishFromCourse : function (courseName) {
  var dishes = menu.courses[courseName];

const dishIndex = Math.floor(Math.random() * dishes.length);

return dishes[dishIndex];
},
generateRandomMeal : function () {
  const appetizer = menu.getRandomDishFromCourse('appetizers');
  const main = menu.getRandomDishFromCourse('mains');
  const dessert = menu.getRandomDishFromCourse('desserts');
  
  const meal = [appetizer, main, dessert];

  const mealPrice = meal.reduce( function (acc, course) {
    return acc += course.price;
  }, 0);

  console.log(`you will be eating ${appetizer.name}, ${main.name} and ${dessert.name}, it will cost $${mealPrice}` );


}
}; 
menu.addDishToCourse('appetizer', 'sashimi',12);
menu.addDishToCourse('appetizer', 'crab dip',15);
menu.addDishToCourse('appetizer', 'poke',10);

menu.addDishToCourse('main', 'crab', 20);
menu.addDishToCourse('main', 'lobster', 30);
menu.addDishToCourse('main', 'beef wellington',45);

menu.addDishToCourse('dessert', 'mochi', 10);
menu.addDishToCourse('dessert', 'upside down cake', 10);
menu.addDishToCourse('dessert', 'gelato', 10);



menu.generateRandomMeal();

