import MeetupList from '../components/meetups/MeetupList/MeetupList';
import { useState, useEffect } from 'react';

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    fetch(
      'https://first-react-app-e14af-default-rtdb.firebaseio.com/meetups.json'
    )
      .then(response => {
        return response.json();
      })
      .then(resp => {
        const meetups = [];
        for (let i in resp) {
          meetups.push({
            id: i,
            title: resp[i].titleValue,
            image: resp[i].imageValue
          });
        }
        setIsLoading(false);
        setMeetings(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading ...</p>
      </section>
    );
  } else {
    return (
      <div>
        <h1>All Meetups</h1>
        <MeetupList meetings={meetings}></MeetupList>
      </div>
    );
  }
}

export default AllMeetups;
