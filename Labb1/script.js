{
  var hund = 1;
  let katt = 2;
  const gris = 3;

  console.log(hund, katt, gris);
}

/*
1. Var har functionscope medan let och const har blockscope vilket betyder att de inte fungerar utanför blocket där de definieras.
2. Om console.log placeras utanför blocket kommer man att få ett felmeddelande eftersom let och const inte är tillgängliga utanför blocket.
*/

console.log("5" == 5);
console.log("6" === 6);

console.log(NaN === NaN);
console.log(null == undefined);
console.log(null === undefined);

let x = undefined;

let test = x ? "truthy" : "falsy";
console.log(test);

/*
1.
"5" == 5 blir true eftersom "==" kollar värdet och inte typen.
"6" === 6 blir false eftersom "===" kollar både värde och typ och "6" är en sträng medan 6 är ett tal.

NaN === NaN blir false eftersom NaN inte är lika med något, inklusive sig själv.
null == undefined blir true eftersom de anses vara lika i värde. 
null === undefined blir false eftersom de är av olika typer och "===" kollar både värde och typ.

2. När ett uttryck står för sig själv i exempelvis en tenernary operator så konverteras det till ett booleskt värde för att avgöra om det är "truthy" eller "falsy".

3.
   NaN representerar "Not a Number", undefined betyder att en variabel inte har tilldelats något värde och null betyder att det inte finns något värde alls.
   De alla används för att representera falsy-värden i JavaScript.
*/

let name = "Gustav";

function greet(name = "Mikaela") {
  return "Hej " + name;
}
console.log(greet());

/* 
1. Funktionsdeklaration kan användas innan den defineras i koden medan funktionsuttryck och arrowfunctions måste defineras innan de används. Funktionsuttryck
och arrowfunctions sparas i variabler medan funktionsdeklarationer inte gör det. Jag valde att använda funktionsdeklaration eftersom jag anser att det är enklast 
att läsa och förstå i detta sammanhang.

2. Funktionsdeklariation kan anropas både innan och efter den är definierad i koden, medan funktionsuttryck och arrowfunctions endast kan anropas efter att de har definierats.

3. "let name = "Gustav";" är en global variabel som är tillgänglig både inuti och utanför funktionen. Parametern "name" i funktionen "greet" är en lokal variabel som endast är 
tillgänglig inom funktionen. Om jag ändrar variabeln "name" inuti funktionen så påverkar det inte den globala variabeln "name". Om jag ändrar den globala variabeln "name" så 
påverkar det inte parametern "name" i funktionen.

4. Parameter är som en platshållare för värden i en funktion medan argument är de faktiska värdena som skickas till funktionen när den anropas. 
Variabler är som behållare som lagrar data.
 */
