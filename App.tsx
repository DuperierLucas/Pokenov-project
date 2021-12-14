import * as Notifications from 'expo-notifications';
import * as TaskManager from 'expo-task-manager';
import { StatusBar } from 'expo-status-bar';
import { GameProvider } from './hooks/GameProvider';
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CatchModal from './components/modals/CatchModal';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import { useNavigation } from '@react-navigation/native';
import { Modal } from 'react-native';

const BACKGROUND_NOTIFICATION_TASK = 'BACKGROUND-NOTIFICATION-TASK'

//Recevoir des notifications quand l'app est
Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });

export default function App(): JSX.Element {
    const isLoadingComplete = useCachedResources();
    const [expoPushToken, setExpoPushToken] = useState('');
    const [catchVisible, setCatchVisible] = useState(false);

    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    }, []);

    
    useEffect(() => {
        sendPushNotification();
    }, []);

    useEffect(() => {
        const notificationInteractionSubscription = Notifications.addNotificationResponseReceivedListener(
            response => {
                this.props.navigation.navigate("Team");
                setCatchVisible(true);
            }
        );
      
          return () => {
            notificationInteractionSubscription.remove();
            {catchVisible && (
                <Modal animationType="fade" visible={catchVisible}>
                    <CatchModal close={() => setCatchVisible(false)} />
                </Modal>
            )}
          };
    }, []);

    async function registerForPushNotificationsAsync() {
        try {
            const { status: existingStatus } = await Notifications.getPermissionsAsync()
            let finalStatus = existingStatus
            if (existingStatus !== 'granted') {
              const { status } = await Notifications.requestPermissionsAsync()
              finalStatus = status
            }
            if (finalStatus !== 'granted') {
              throw new Error('Permission not granted!')
            }
            const token = (await Notifications.getExpoPushTokenAsync()).data
            return token
        } catch (error) {
            console.error(error)
        }
    }

    async function sendPushNotification() {
        const message = {
            to: expoPushToken,
            sound: 'default',
            title: 'Un pokémon sauvage est apparu !',
            body: 'Clique ici pour aller le capturer !',
            data: { someData: 'goes here' }
        };
        
        await fetch('https://exp.host/--/api/v2/push/send', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Accept-encoding': 'gzip, deflate',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        });
    }

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <SafeAreaProvider>
                <GameProvider>
                    <>
                        <Navigation />
                        <StatusBar />
                    </>
                </GameProvider>
            </SafeAreaProvider>
        );
    }
}
