# Test_Alternance

## Utilisation :

Se placer dans /pokemon
Lancer la commande "npm start"
Se placer dans /pokemon/server
Lancer la commande "npm run serve"

## Excplications

MainPage gère les actions de la page, il lance d'abord la page de choix donner pas le .psd avec Choix.js.
Choix.js permet d'afficher la page comme montré par le .psd et permet de lancer le décompte et de cliquer sur une des deux vidéos.
MainPage affiche donc ensuite Dragons.js ou Evoli.js en fonction de Choix.js (clique ou choix aléatoire).
Il y a toujours possibilité de revenir à la page Choix avec un bouton "Retour".

J'ai utiliser une API qui, à chaque clique sur une des vidéos, envoie un POST dans la BDD.
On récupère la BDD pour afficher Dragons.js ou Evoli.js et on compte le nombre de cliques correspondant pour les afficher à côté de la vidéo.
MainPage gère les GET et POST correspondant avec ses méthodes.

## Conclusion

On affiche bien le .psd avec un décompte, on peut cliquer sur les vidéos pour les lancer, sinon à la fin du décompte on en lance une aléatoirement.
Chaque clique est enregistrer, on peut donc afficher le nombre de cliques sur les vidéos.
