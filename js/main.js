// Exercices JavaScript : introduction - débutants



// 1.Exercice 1 : Hello World

// console.log("Hello World");
//
// var text1 = "Hello World";
//   console.log(text1);

// 2.Exercice 2 : Calculs divers

// console.log(3*30, 12/0, 4+9+78, 12-7, 5e4);

// 3.Exercice 3 : Communiquer avec l'ordinateur

// var name = prompt("Quel est votre prénom ?", name);
//   alert("Bonjour "+name+" !");

// 4.Exercice 4 : Nom et prénom

// var fName = "Peter";
// var name = "Colle";
// console.log ("Bonjour "+fName+' '+name);

// 5.Exercice 5 : Des caractères au nombre

// var myNumber = 123;
// console.log (typeof myNumber);

// 6.Exercice 6 : Majuscules et miniscules


// var word = "aBcDeF".toUpperCase();
// console.log(word);
// var wordL = "aBcDeF".toLowerCase();
// console.log(wordL);



// Exercices JavaScript : introduction - avancés



// 1.Exercice 1 : True ou False ?

// var ToF = "";
//
// if(ToF.trim() == ""){
//     console.log("TRUE");
// } else {
//     console.log("FALSE");
// }

// 2.Exercice 2 : Calculer mon âge

// var yAct = prompt("Quel est l'année actuel ?", yAct);
// var yOld = prompt("Quel est votre date de naissance ?", yOld);
// alert ("vous avez "+(yAct-yOld)+" ans.");

// 3.Exercice 3 : Problème de chaussures

// var price1 = 70;
// var price2 = 59;
// var price3 = 20;
// var tPrice = (price1+price2+price3);
// var total = tPrice-(price1+price2+price3)*(20/100);
// console.log(total);

// 4.Exercice 4 : une calculatrice JavaScript


    // var nb1 = prompt('Votre premier nombre');
    // var nb2 = prompt('Votre deuxième nombre');
    // var resultat = parseInt(nb1)+parseInt(nb2);
    // alert(resultat);

// 5.Exercice 5 : travailler avec les propriétés

// var fName = prompt("Quel est votre prénom ?",);
// var fNameC = fName.substr(0, 1).toUpperCase()+fName.substr(-1, 1).toUpperCase();
//   alert(fNameC);
// var name = prompt("Quel est votre nom?",);
// var nameC = name.substr(0, 1).toUpperCase()+name.substr(-1, 1).toUpperCase();
//   alert(nameC);
//
// alert(fNameC+nameC);
//
// var old = prompt("Quel est votre âge ?");
// alert(Math.round(old/33));



// Exercices JavaScript intermédiaire



// 1.Exercice 1 : Le nombre le plus grand

// var nb1 = 4;
// var nb2 = 46;
// var nb3 = 5;
// var nb4 = 41;
//
// console.log (Math.max(nb1,nb2,nb3,nb4));

// 2.Exercice 2 : Condition d'âge

// var askName = prompt("Quel est votre âge ?",);
//
// if (Math.sign(askName)==-1) {
//   alert(prompt("Donnez un âge valide"));
// } else if (askName >= 21){
//   alert("Acces autorisé");
// } else if (Math.sqrt(askName)==askName.isInteger()) {
//   alert ("nombre carré");
// }

//3.Exercice 3 : Le nombre caché

// var i = 5;
//  while (askNb != i){
//      var askNb= prompt("Nombre entre 1 et 10",);
//
//      if (askNb == i) {
//          alert("Nombre trouvé");
//     }
//   }

// 4.Exercice 4 : Des nombres en boucle

// for (i=1;i<=100;i++) {
//   console.log (i);
// }
//
// 5.Exercice 5 : Des nombres en boucle bis
//
// for (i=2;i<=100;i+=2) {
//    console.log (i);
//  }

// 6.Exercice 6 : Remplir la piscine

// var longueur = Number(prompt('Entrez la longueur.'));
// var largeur = Number(prompt('Entrez la largeur.'));
// var hauteur = Number(prompt('Entrez la hauteur.'));
// var debit = Number(prompt('Entrez le debit.'));
//
// function debtim (longueur, largeur, hauteur, debit){
//
//   alert("avec "+debit+" de debit, la piscine sera remplit en "+(longueur*largeur*hauteur)/debit+" minutes");
// }
//
// debtim(longueur, largeur, hauteur, debit);


// 7.Exercice 7 : Calculs de cercle






// 8.Exercice 8 : Une pyramide

// str = "";
//
// for (var i=1; i<=5; i++) {
//   str += "*"
//   console.log(str);
// }

// 9.Exercice 9 : FIZZ BUZZ


// for (var i=1; i <= 100; i++)
// {
//     if (i % 15 == 0)
//         console.log("FIZZBUZZ");
//     else if (i % 3 == 0)
//         console.log("FIZZ");
//     else if (i % 5 == 0)
//         console.log("BUZZ");
//     else
//         console.log(i);
// }



// Exercices JavaScript intermédiaire partie 2



// 1.Exercice 1 : Un échiquier


// var str ="";
//
// for (i=0; i<4; i++) {
//   for (j=0; j<4; j++) {
//     if ((i+j)%2===0) {
//       str +="#";
//     }
//     else{
//       str+="_";
//     }
//
//   }
//   str += "\n";
// }
// console.log(str);


// 2.Exercice 2 : Matrix dans la console


// console.log("_");
// for (i=0; i<4; i++) {
//
//   for (j=0; j<4; j++) {
//     if (j==i) {
//       console.log(1);
//     } else {
//       console.log(0);
//     }
//
//   }
//   console.log("_");
// }


// 3.Exercice 3 : Nombre pair ?

// var i = Math.round(prompt("nb:"));
//
// if (i%2 == 0)
//    console.log(i +" pair");
// else
//    console.log(i+ " impair");

// 4.Exercice 4 : Vous avez dit factorielle ?

// var i = 1;
// var nb = i;
// var j = parseInt(prompt("entrez votre nombre: "));
//
//
// function userFac(i, nb, j) {
//   while (isNaN(j)) {
//     alert("pas un nombre");
//     var j = parseInt(prompt("entrez votre nombre: "));
// } alert("ok");
// for (i=1;i<=j;i++) {
// nb *= i;
// }
// alert("La factorielle est: "+nb);
//
// }
//
// userFac(i, nb, j);

// 5.Exercice 5 : Les tirets ça compte !

// var chn = prompt("aloooo");
// var nwchn = chn.replace("-","_");
// function myfunc (chn, nwchn) {
//
// if (typeof chn === 'string') {
//   console.log(nwchn);
// } else {
//   console.log("error");
// }
//
// }
//
// myfunc(chn, nwchn);

// 6.Exercice 6 : Entrainez-vous avec les tableaux

// var list = ['Apple', 'Banana', 'Strawberry', 'milk', 'chocolate'];
// console.log("buy "+list[0]+", "+ list[2]+", "+ list[list.length - 1]);

// 7.Exercice 7 : Le tableau d'un homme

// var info = {
//   nom: "a",
//   prenom: "b",
//   age: "c",
//   naiss: "d",
// };
//
// var tab = [info];
// console.log(tab);


// 10.Exercice 10 : Un jeu en JavaScript

var equal = "égalité";
var win = "you win";
var lose = "ia win";
var user_point=0;
var ia_point=0;


function PFC (i, j) {
if (i === "pierre") {
  console.log("pierre");
} else if (i === "feuille") {
  console.log("feuille");
} else if (i === "ciseaux") {
  console.log("ciseaux");
} else {
  alert("entrez pierre, feuille, ciseaux")
}

  if (j <=30) {
    j="pierre";
  } else if (j <=60 && j >30) {
    j="feuille";
  } else if (j <=90 && j >60) {
    j="ciseaux";
  }
  console.log(j);


  if (i===j) {
    console.log(equal);
  } else if (i=="ciseaux" && j=="pierre"){
    console.log(lose);
    ia_point++;
  } else if (i=="ciseaux" && j=="feuille"){
    console.log(win);
    user_point++;
  } else if (i=="pierre" && j=="ciseaux"){
    console.log(win);
    user_point++;
  } else if (i=="pierre" && j=="feuille"){
    console.log(lose);
    ia_point++;
  } else if (i=="feuille" && j=="ciseaux"){
    console.log(lose);
    ia_point++;
  } else if (i=="feuille" && j=="pierre"){
    console.log(win);
    user_point++;
  }

}
while (user_point < 3 && ia_point < 3) {
var i = prompt("choisis pierre, feuille, ciseaux");
var j = Math.random()*90;
PFC(i, j);
}



///////////////////////////////////////////////


// var mousquetaires = ["Athos", "Porthos", "Aramis"];
//
// console.log ("voici les 3 mousquetaires !");
//
// for (i=0; i<mousquetaires.length; i++) {
//   console.log(mousquetaires[i]);
// }
//
// mousquetaires.push("D'artagnan");
//
// console.log("maintenant ils sont 4");
//
// mousquetaires.forEach(function(mousquetaires){
//   console.log(mousquetaires);
// });


// var valeurs = [11, 3, 7, 2, 9, 10];
// var somme=0;
// for (i=0;i<valeurs.length;i++){
//   somme+=valeurs[i];
// }
// console.log("la somme est égal à :"+somme);

// var valeurs = [11, 3, 7, 2, 4, 10];
// var max=valeurs[0];
// for (i=1;i<valeurs.length;i++){
//   if (valeurs[i] > max){
//     max = valeurs[i];
//   }
// }
// console.log (max);



// var mots = [];
// var mot ="";
// while (mot !== "stop"){
//   mot = prompt("entrez mot ou tapez stop");
//   if (mot!== "stop"){
//     mots.push(mot);
// }}
//
// mots.forEach(function(mot) {
//   console.log(mot);
// });

//---------------------------------------------------------------------//
//
// var films= {
//   init: function (titre, annee) {
//     this.titre= titre;
//     this.annee= annee;
// }
//
// decrire: function (){
//   var description  = this.titre + " ()"
// }







/////////////////////////////////////////////////////////////////////////////
// Le loup de Wall Street (2013, Martin Scorsese)
// Vice-Versa (2015, Pete Docter)
// Babysitting (2013, Philippe Lacheau et Nicolas Benamou)
