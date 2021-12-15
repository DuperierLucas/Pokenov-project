import * as Notifications from 'expo-notifications';
import { PokemonToCapture } from '../types';

export async function scheduleAndCancelPushNotification(
    pokemonToCapture: PokemonToCapture,
): Promise<void> {
    await Notifications.scheduleNotificationAsync({
        identifier: 'wildPokemon' + pokemonToCapture.pokemon.id,
        content: {
            title: 'Un pokémon sauvage est apparu !',
            body:
                'Clique ici pour aller capturer ' +
                pokemonToCapture.pokemon.name +
                ' !',
            sound: 'catchme1.wav',
        },
        trigger: { date: new Date(pokemonToCapture.apparitionDate) },
    });
}