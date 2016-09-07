/* 
PREMIER SCRIPT : ANNIVERSAIRE
*/
function afficheDate(){
    var laDate = new Date();
    var jourToday = laDate.getDate();
    var mois = new Array;
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
function checkAnniv() {
// Récupération du jour et du mois courant
// GetMonth étant numéroté de 0 à 11, ajout de +1 à GetMonth pour avoir le véritable numéro de mois
        var laDate = new Date();
        var jourToday = laDate.getDate();
        var moisToday = (laDate.getMonth()+1);    

// création de l'objet collegue
 function collegue(un_prenom, un_jour_naissance, un_mois_naissance){
            this.prenom=un_prenom;
            this.jourNaissance=un_jour_naissance;
            this.moisNaissance=un_mois_naissance;
        }
    
    
// liste des collègues
        var simon=new collegue ("Simon","4","9");
        var cyrille=new collegue ("Cyrille","3","2");
        var martine=new collegue ("Martine","12","9");
    
// création du tableau collegues
    
        var collegues = new Array;
        collegues[0]=simon;
        collegues[1]=cyrille;
        collegues[2]=martine;
      

       
        for (i=0; i<= collegues.length;i++){
   
        if (moisToday==collegues[i].moisNaissance && jourToday==collegues[i].jourNaissance){
        document.write("Joyeux anniversaire "+ collegues[i].prenom+" !  "+"<br/> ");
       
        
        }
        else if (moisToday==collegues[i].moisNaissance && jourToday>collegues[i].jourNaissance){
    
        document.write("Ce mois-ci, c'était l'anniversaire de : "+ collegues[i].prenom+" le  "+collegues[i].jourNaissance+"/"+collegues[i].moisNaissance+"<br/> ");
      
       
        }
        else if (moisToday==collegues[i].moisNaissance && jourToday<collegues[i].jourNaissance){
     
         document.write("Ce mois-ci, c'est l'anniversaire de : "+ collegues[i].prenom+" le  "+collegues[i].jourNaissance+"/"+collegues[i].moisNaissance+"<br/> ");
    
       
        }
// une array pour résoudre mettre les anniv du jour ? Et si array vide mettre "pas d'anniv ce mois ci" ?
}

}