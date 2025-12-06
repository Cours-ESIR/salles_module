# Guide

## Installation

```bash
npm install @cours-esir/salles_module
```

## Utilisation

Le fonctionnement du module se fait désormais en deux temps :

1.  Récupération des événements (planning) via `sallesEvents`.
2.  Vérification de la disponibilité à un instant T via `salleLibres` (qui effectue une recherche dichotomique sur les événements récupérés).

### Exemple complet

```ts
import { sallesEvents, salleLibres, data } from "@cours-esir/salles_module";

(async function() {
    const now = new Date();


    let dateS = getMonday(new Date())
    let dateE = new Date()
    dateE.setDate(dateS.getDate() + 14) // on répère le calendrier sur 14 jours

    for (let university of data) {
        console.log(university.name)
        for (let building of university.buildings) {
            console.log(building.name)
            for (let room of building.rooms) {
                let events = await sallesEvents(university.rootURL, [room.resourceId], "1", dateS, dateE)

                const status = salleLibres(events, now);

                console.log(room.name)
                console.log(`État : ${status.state} Jusqu'à : ${status.until}`);
            }
        }
    }
})();
```

## API Reference

### `sallesEvents`

Récupère et parse le calendrier ICS depuis l'URL fournie. Retourne une liste d'événements triée par date.

```ts
sallesEvents(
    rootUrl: string, 
    resources: string[], 
    project: string, 
    start: Date, 
    end: Date
): Promise<Event[]>
```

  * **rootUrl**: L'URL racine du service.
  * **resources**: Tableau des identifiants des salles/ressources.
  * **project**: Identifiant du projet ADE.
  * **start**: Date de début de la plage de recherche (`Date` object).
  * **end**: Date de fin de la plage de recherche (`Date` object).

### `salleLibres`

Détermine si une salle est libre ou occupée à un instant précis en se basant sur une liste d'événements.

```ts
salleLibres(events: Event[], date: Date): StatusResult
```

  * **events**: Liste des événements (doit être le résultat de `sallesEvents`).
  * **date**: La date et l'heure à vérifier.

**Retourne un objet :**

```ts
{
    state: "Libre" | "Occupé",
    until: Date, // Date de fin de l'état actuel (prochain cours ou fin du cours actuel)
    error?: string // Présent si le calendrier n'est pas à jour ou hors bornes
}
```

### `data`

Contient les données statiques des salles (importé depuis `./salles`).

```ts
import { data } from "@cours-esir/salles_module";
// Renvoie la liste/objet des salles disponibles
```