/**
 * Fonction principale, au chargement de la page web
 */
const main = () => {
}

var t2 = [];

/**
 * Fonction renvoyant le tableau des éléments du DOM à utiliser
 */
const getBlocs = () => {
    return [
        document.getElementById("color-bloc1"),
        document.getElementById("color-bloc2"),
        document.getElementById("color-bloc3"),
        document.getElementById("color-bloc4")
    ];
}

/**
 * @param {*} max 
 * Fonction renvoyant un nombre aléatoire (rand) entre 0 et max
 */
const getRandomIndex = (max) => {
    rand = Math.floor(Math.random() * max);
    return rand;
}

/**
 * @param {*} index 
 * Fonction renvoyant rand, action : faire disparaître les autres blocs
 */
const afficheBloc = (index) => {
    const blocs = getBlocs();
    const rand = getRandomIndex(blocs.length);
    let i = 0;
    for (let bloc of blocs) {
        bloc.classList.remove("hidden");
        if (i != rand) {
            bloc.classList.add("hidden");
        }
        else {
            bloc.classList.add("hidden");
            setTimeout(() => bloc.classList.remove("hidden"), 150);
        }
        i++;
    }
    if (index == blocs.length - 1) {
        setTimeout(() => {
            for (bloc of blocs) {
                bloc.classList.remove("hidden")
            }
        }, 800);
    }
    return rand;
}

/**
 * Fonction lançant l'affichage aléatoire et renvoyant un t2[] contenant une combinaison aléatoire
 */
const start = () => {
    for (let i = 0; i < 4; i++) {
        setTimeout(() => {
            t2.push(afficheBloc(i));
        }, 1000 * i);
    }
    getClicks();
    return t2;
}

/**
 * Fonction renvoyant un nouveau tableau (t3[]) contenant les clics de l'utilisateur
 */
const getClicks = () => {
    console.log("entree dans getclics")
    const blocs = getBlocs()
    const t3 = [];
    for (let i = 1; i < 5; i++) {
        document.getElementById("color-bloc" + i).addEventListener('click', (bloc) => {
            console.log(bloc)
            if (blocs.length == t3.length) {
                compare(t3);
            }
        }, false)
    }

    return t3;
}

/**
 * Fonction renvoyant un message selon si les tableaux sont égaux ou non
 */
const compare = (t3) => {
    let mess = docuement.getElementById("message");
    if (t2 == t3) {
        mess.classList.add("winner");
        mess.textContent = "You won !";
    }
    else {
        mess.classList.add("loser");
        mess.textContent = "Sorry you lost... Try again !";
    }
}







// const getClicks = () => {
//     const blocs = getBlocs();
//     const t3 = [];
//     for (bloc of blocs) {
//         bloc.addEventListener('click', () => {
//             indexBloc = blocs.indexOf(bloc);
//             t3.push(indexBloc);
//         }, false)
//     }
//     console.log("t3 :", t3);
//     if (blocs.length == t3.length) {
//         compare();
//     }
//     return t3;
// }