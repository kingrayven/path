import React, { useState } from 'react'
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonInput,
    IonItem,
    IonLabel,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
} from '@ionic/react'
import './login.css'

const login: React.FC = () => { 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlelogin = () => {
        console.log("User Log In:", email, password);
        alert('Login Successful!');
    };

    return (

        <IonPage className='ion-padding login-container'>

            <IonCard className='login-card'>

                <IonCardHeader>
                    <div className='header'>
                   <img src="assets/icon/logo.png" alt='ispsclogo' className='logo'/>
                    <IonCardTitle className='ion-text-center header'>ISPSC Panther</IonCardTitle>                        
                    </div>
                </IonCardHeader>                    

                <IonCardContent>

                    <IonItem>
                        <IonLabel position='floating' className='email'>Email</IonLabel>
                        <IonInput type='email' value={email} onIonChange={(e) => setEmail(e.detail.value!)} />
                    </IonItem><br/>                      

                    <IonItem>
                        <IonLabel position='floating' className='password'>Password</IonLabel>
                        <IonInput type='password' value={email} onIonChange={(e) => setPassword(e.detail.value!)} />
                    </IonItem>                                                 

                    <IonButton expand='full' onClick={handlelogin} className='ion-margin-top button'>
                        Login
                    </IonButton>                        

                </IonCardContent>

            </IonCard>

        </IonPage>
    );
 };

export default login
