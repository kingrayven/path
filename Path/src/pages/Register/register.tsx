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
import './register.css'

const register: React.FC = () => { 

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');

    const handleRegister = () => {
        console.log("User Registered:", email, password,name,course);
        alert('Rgistration successful!');
    }

    return (

        <IonPage className='ion-padding register-container'>

            <IonCard className='register-card'>

                <IonCardHeader>
                    <div className='header'>
                        <img src='assets/icon/logo.png' alt='ispsclogo' className='logo'/>
                        <IonCardTitle className='ion-text-center header'>Register</IonCardTitle>
                    </div>
                </IonCardHeader>

                <IonCardContent>

                    <IonItem>
                        <IonLabel position='floating' className='name'>Name</IonLabel>
                        <IonInput type='text' value={name} onIonChange={(e) => setName(e.detail.value!)}/>
                    </IonItem>

                    <IonItem>
                        <IonLabel position='floating' className='course'>Course</IonLabel>
                        <IonInput type='text' value={course} onIonChange={(e) => setCourse(e.detail.value!)}/>
                    </IonItem>

                    <IonItem>
                        <IonLabel position='floating' className='email'>Email</IonLabel>
                        <IonInput type='email' value={email} onIonChange={(e) => setEmail(e.detail.value!)}/>
                    </IonItem>

                    <IonItem>
                        <IonLabel position='floating' className='password'>Password</IonLabel>
                        <IonInput type='password' value={password} onIonChange={(e) => setPassword(e.detail.value!)}/>
                    </IonItem>

                    <IonButton expand='full' onClick={handleRegister} className='ion-margin-top button'>
                        Register
                    </IonButton>

                </IonCardContent>

            </IonCard>

        </IonPage>
    );
};

export default register
