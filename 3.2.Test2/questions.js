let CreationTableauLangages = () => {
    return ["Html", "CSS", "Java", "PHP"];
}

let CreationTableauNombres = () => {
    return [0, 1, 2, 3, 4, 5];
}

let RemplacementElement = (langages) => {
    langages.splice(2, 1, "Javascript");
    return langages;
}

let AjoutElementLangages = (langages) => {
    langages.splice(6, 1, "Ruby", "Python");
    return langages;
}

let AjoutElementNombres = (nombres) => {
    nombres.splice(0, 0, -2, -1);
    return nombres;
}

let SuppressionPremierElement = (langages) => {
    langages.splice(0, 1);
    return langages;
}

let SuppressionDernierElement = (langages) => {
    langages.splice(4, 1);
    return langages;
}

let ConversionChaineTableau = (reseaux_sociaux_chaine) => {
    return reseaux_sociaux_chaine.split(",");
}

let ConversionTableauChaine = (langages) => {
    return langages.toString();
}

let TriTableau = (reseaux_sociaux) => {
    return reseaux_sociaux.sort();
}

let InversionTableau = (langages) => {
    return langages.reverse();
}
