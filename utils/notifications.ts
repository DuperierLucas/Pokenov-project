import * as Notifications from 'expo-notifications';

export async function schedulePushNotification(delayInMinutes): void {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: 'Un pokémon sauvage est apparu !',
            body: 'Clique ici pour aller le capturer !',
            data: { someData: 'goes here' },
        },
        trigger: { seconds: delayInMinutes * 60 },
    });
}
