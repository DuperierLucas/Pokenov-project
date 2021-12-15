import * as Notifications from 'expo-notifications';

export async function scheduleAndCancelPushNotification(pokemonToCapture): Promise<void> {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: 'Un pokémon sauvage est apparu !',
            body: 'Clique ici pour aller capturer ' + pokemonToCapture.pokemon.name + ' !',
            sound: 'catchme1.wav',
        },
        trigger: { date: new Date(pokemonToCapture.apparitionDate) },
    });
    console.log(new Date(pokemonToCapture.apparitionDate) );
}

/*export async function scheduleAndCancelPushNotification(pokemonToCapture): Promise<void> {
    let identifier;
    await Notifications.setNotificationChannelAsync('new-notification', {
        name: 'Notifications pokémon à capturer',
        importance: Notifications.AndroidImportance.UNSPECIFIED,
        sound: 'catchme1.wav', // Provide ONLY the base filename
      }).then(() => {
        identifier = Notifications.scheduleNotificationAsync({
            content: {
                title: 'Un pokémon sauvage est apparu !',
                body: 'Clique ici pour aller capturer ' + pokemonToCapture.pokemon.name + ' !',
                sound: 'catchme1.wav', // Provide ONLY the base filename
            },
            trigger: { seconds: 2 , channelId: 'new-notification' },
        });
      }).finally(() => {
        Notifications.cancelScheduledNotificationAsync(identifier);
    })
}*/
