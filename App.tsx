import * as Notifications from 'expo-notifications';
import { StatusBar } from 'expo-status-bar';
import { GameProvider } from './hooks/GameProvider';
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CatchModal from './components/modals/CatchModal';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import { Modal } from 'react-native';
import { Audio } from 'expo-av';

//Recevoir des notifications quand l'app est ouverte
Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
});

export default function App(): JSX.Element {
    const isLoadingComplete = useCachedResources();
    const [catchVisible, setCatchVisible] = useState(false);

    useEffect(() => {
        const notificationInteractionSubscription = Notifications.addNotificationResponseReceivedListener(
            response => {
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
