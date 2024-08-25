const UserProfile = (props) => {
  return (
      <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ color: 'blue', fontSize: '1.5em', marginBottom: '10px' }}>{props.name}</h2>
          <p style={{ fontSize: '1.2em', marginBottom: '5px' }}>
              Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
          </p>
          <p style={{ fontSize: '1.1em' }}>{props.bio}</p>
      </div>
  );
};

export default UserProfile;