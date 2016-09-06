/* 
PREMIER SCRIPT : ANNIVERSAIRE
*/

function afficheDate(){
    var laDate = new Date();
    var jourToday = laDate.getDate();
    var mois = new Array();
    mois[0] = "Janvier";
    mois[1] = "Février";
    mois[2] = "Mars";
    mois[3] = "Avril";
    mois[4] = "Mai";
    mois[5] = "Juin";
    mois[6] = "Juillet";
    mois[7] = "Août";
    mois[8] = "Septembre";
    mois[9] = "Octobre";
    mois[10] = "Novembre";
    mois[11] = "Décembre";
    var moisToday = mois[laDate.getMonth()]; 
    document.write("Ajourd'hui, nous sommes le : "+ jourToday+" "+ moisToday);
}