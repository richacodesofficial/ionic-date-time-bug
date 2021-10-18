/*eslint-disable*/
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonDatetime, IonModal, IonButton } from '@ionic/react';
import { useState } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const [dateValue, setDateValue] = useState('2000-05-07');
  const [isOpen, setIsOpen]= useState(false);

  const dateChangeHandler = (event: any) => {
    const newDate = event?.detail?.value;
    if (newDate) {
      setDateValue(newDate);
    }
  }
  return (
    <IonPage>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
         
        </IonToolbar>
      </IonHeader>
        <IonContent>
          <IonDatetime
        presentation="date"
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
