// Código atualizado para Ionic Framework
import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonLabel, IonButton, IonAlert } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8100/home/api/login', {
        username,
        password
      });

      if (response.data.success) {
        history.push('/Calendario');
      } else {
        setShowAlert(true);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      setShowAlert(true);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonItem>
          <IonLabel position='floating'>Usuário</IonLabel>
          <IonInput value={username} onIonChange={(e) => setUsername(e.target.value)} />
        </IonItem>
        <IonItem>
          <IonLabel position='floating'>Senha</IonLabel>
          <IonInput type='password' value={password} onIonChange={(e) => setPassword(e.target.value)} />
        </IonItem>
        <IonButton expand='block' onClick={handleLogin}>Entrar</IonButton>
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Erro'}
          message={'Usuário ou senha inválidos!'}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
