import MeetupListItem from '../MeetupListItem/MeetupListItem';

function MeetupList(props) {
  console.log(props);
  return props.meetings.map(meeting => {
    return (
      <MeetupListItem
        key={meeting.id}
        id={meeting.id}
        title={meeting.title}
        image={meeting.image}
      ></MeetupListItem>
    );
  });
}

export default MeetupList;
