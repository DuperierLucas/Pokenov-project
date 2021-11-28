# Utilisation de l'API pokeapi

## Typage
* Liste de pokémons : NamedApiResourceList
* Pokémon dans une liste de pokémons : NameApiResource
* Pokémon : Pokemon

## Composants clés
### Game Provider
* Équivalent de la BDD.
* En utilisant le hook `useGame` on a accès à toutes les données propres à l'app (pokémon capturés, pokémon composants l'équipe, ...).

### usePokemonApi
Helpers pour récupérer des données depuis l'api pokeapi
* `getPokemons()` permet de récupérer les premiers pokémons du pokédex
* `getFromUrl()` permet de récupérer une ressource de pokeapi grâce à son url