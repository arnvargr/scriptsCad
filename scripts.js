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

function checkAnniv(){
// var datesCollegues = new Array();
// datesCollegues[0] = "Février";
// datesCollegues[1] = "Septembre";

// Récupération du jour et du mois courant
// GetMonth étant numéroté de 0 à 11, ajout de +1 à GetMonth pour avoir le véritable numéro de mois
var laDate = new Date();
var jourToday = laDate.getDate();
var moisToday = (laDate.getMonth()+1);    

 document.write("Ajourd'hui, nous sommes le : "+ jourToday+" "+ moisToday);
   


}