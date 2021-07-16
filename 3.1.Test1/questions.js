
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text = texte.substr(" ", a) + " " + texte.substr(a + 1, texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    return texte1 + texte2;
}
let afficherCar5 = (texte) => {

    return texte.substring(4, 5);
}
let afficher9Car = (texte) => {
    return texte.substring(0, 9);
}
let majusculeString = (texte) => {
    return texte.toUpperCase();
}
let minusculeString = (texte) => {
    return texte.toLowerCase();
}
let SupprEspaceString = (texte) => {
    return texte.trim();
}
let IsString = (texte) => {
    if (typeof texte) {
        return true;
    }
}

let AfficherExtensionString = (texte) => {
    return texte.split(".").pop();
}
let NombreEspaceString = (texte) => {
    return texte.split(' ').length - 1;
}
let InverseString = (texte) => {
    return texte.split("").reverse().join("");
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance = (x, y) => {
    return Math.pow(x, y);
}
let valeurAbsolue = (nombre) => {
    return Math.abs(nombre);
}
let valeurAbsolueArray = (array) => {

    return array.map(x => Math.abs(x));;
}
let sufaceCercle = (rayon) => {
    return Math.round(Math.PI * (rayon * rayon));
}
let hypothenuse = (ab, ac) => {
    return Math.hypot(ab, ac)
}
let calculIMC = (poids, taille) => {
    return Math.round((poids/(taille * taille))*100)/100 ;
}
