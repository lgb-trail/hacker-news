import React, { PureComponent } from 'react';
import { register, unregister } from 'next-offline/runtime'

class NextOffline extends PureComponent {

    componentDidMount() {
        register();
        // if ('serviceWorker' in navigator) {
        //     window.addEventListener('load', function () {
        //         navigator.serviceWorker
        //             .register('/service-worker.js', { scope: '/' }).then(registration => {
        //                 console.log('Service worker registered', registration);
        //             }).catch((registrationError) => {
        //                 console.log('Service Worker registration failed: ', registrationError)
        //             });
        //     });
        // }
    }

    componentWillUnmount() {
        unregister();
    }

    render() {
        return null;
    }
}

export default NextOffline;