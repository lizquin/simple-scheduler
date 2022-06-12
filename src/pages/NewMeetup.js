import MeetupForm from '../components/meetups/MeetupForm/MeetupForm';
import { useHistory } from 'react-router-dom';

function NewMeetup() {
  const routeHistory = useHistory();

  function saveNewMeetup(meetup) {
    fetch(
      'https://first-react-app-e14af-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetup),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      routeHistory.replace('/');
    });
  }

  return (
    <div>
      <MeetupForm onSubmitMeetup={saveNewMeetup}></MeetupForm>
    </div>
  );
}

export default NewMeetup;
