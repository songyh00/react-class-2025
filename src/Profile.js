import './Profile.css';

export default function Profile() {
  return (
    <div>
      <h2>Hedy Lamarr</h2>
      <img
        className="avatar"
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        style={{ width: 120, height: 120 }}
      />
    </div>
  );
}
