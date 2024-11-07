let str = prompt("Введите строку");
let operation = prompt(`Выберите операцию:
    1 - Посчитать количество символов в строке.
    2 - извлечь указанную часть строки.
    3 - поменять местами первый и последний символы
    4 - заменить указанное слово
    5 - перевести строку в нижний регистр`);
switch (operation) {
  case "1":
    let countSymbolsOperation = str.length;
    alert(countSymbolsOperation);
    break;
  case "2":
    
    break;
  case "3":
    let a = str.length;
    let replaceSymbolsOperation = str.slice(0, 1);
    let replaceSymbolsOperationPartTwo = str.slice(1, a - 1);
    let replaceSymbolsOperationPartThree = str.slice(a - 1, a)
    alert(replaceSymbolsOperationPartThree + replaceSymbolsOperationPartTwo + replaceSymbolsOperation);
    break;
  case "4":
    let replaceOperationStr1 = prompt("Какое слово вы хотите заменить?");
    let replaceOperationStr = prompt("На что вы хотите заменить?");
    let replaceOperation = str.replaceAll(
      replaceOperationStr1,
      replaceOperationStr
    );
    alert(replaceOperation);
    break;
  case "5":
    let lowerCaseOperation = str.toLowerCase();
    alert(lowerCaseOperation);
    break;
}
