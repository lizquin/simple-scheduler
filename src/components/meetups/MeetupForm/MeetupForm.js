import Card from '../../ui/Card';
import styles from './MeetupForm.module.css';
import { useRef } from 'react';

function MeetupForm(props) {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descRef = useRef();

  function onSubmitNewMeetup(event) {
    event.preventDefault();
    const newMeetup = {
      titleValue: titleRef.current.value,
      imageValue: imageRef.current.value,
      addressValue: addressRef.current.value,
      descValue: descRef.current.value
    };

    props.onSubmitMeetup(newMeetup);
  }

  return (
    <Card>
      <form className={styles.form} onSubmit={onSubmitNewMeetup}>
        <div className={styles.control}>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title" ref={titleRef}></input>
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Image</label>
          <input type="url" required id="image" ref={imageRef}></input>
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressRef}></input>
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea rows="5" required id="description" ref={descRef}></textarea>
        </div>
        <div className={styles.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default MeetupForm;
