import { Entree } from './entree.model';
import { Food } from './food.model';
import { SortedListOfImmutables } from './sorted-list-of-immutables.model';

describe('Equals de Misma Entree', function () {
  it('El equals de Pizza y Pizza deben ser verdadero', () => {
    const sortedList = new SortedListOfImmutables();
    const entree1 = new Entree("Pizza", sortedList);
    const entree2 = new Entree("Pizza", sortedList);
    expect(entree1.equals(entree2)).toBe(true);
  });  
});

describe('Equals de Diferente Entree', function () {
  it('El equals de Pizza y Hamburguesa debe ser falso', () => {
    const sortedList = new SortedListOfImmutables();
    const entree1 = new Entree("Pizza", sortedList);
    const entree2 = new Entree("Hamburguesa", sortedList);
    expect(entree1.equals(entree2)).toBe(false);
  });  
});

describe('toString de SoartedListOfImmutables Vacía de una Entree', function () {
  it('SoartedListOfImmutables vacía o nula toString debe ser <  >', () => {
    const entree = new Entree("Pizza", new SortedListOfImmutables());
    expect(entree.toString()).toBe("<  >");
  });  
});

describe('toString de SoartedListOfImmutables No Vacía de una Entree', function () {
  it('SoartedListOfImmutables (donde SoartedListOfImmutables contiene Tomate, Queso ambos siendo de la clase Food) toString debe ser < Queso, Tomate >', () => {
    const foodList = new SortedListOfImmutables();
    foodList.add(new Food("Tomate", 37, 50, "tomato.png"));
    foodList.add(new Food("Queso", 52, 67, "cheese.png"));
    const entree = new Entree("Pizza", foodList);
    expect(entree.toString()).toBe("< Queso, Tomate >");
  });  
});

describe('Obtener RetailValue de SoartedListOfImmutables no Vacía de una Entree', function () {
  it('getRetailValue del SoartedListOfImmutables con [Tomate, Queso, Pan] donde el RetailCost de los productos es [50, 67, 30] respectivamente debe ser 147', () => {
    const foodList = new SortedListOfImmutables();
    foodList.add(new Food("Tomate", 37, 50, "tomato.png"));
    foodList.add(new Food("Queso", 52, 67, "cheese.png"));
    foodList.add(new Food("Pan", 25, 30, "bread.png"));

    const entree = new Entree("TestEntree", foodList);
    expect(entree.getRetailValue()).toBe(147);
  });
  
});  