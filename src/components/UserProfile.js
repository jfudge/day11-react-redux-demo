import UserBadge from './UserBadge';
import UserTable from './UserTable';

const UserProfile = (props) => {
  const { userProfile } = props;
  return (
    <div>
      <h2>User Profile</h2>
      <div className="row">
        <div className="col-4">
          <UserBadge userProfile={userProfile} />
        </div>
        <div className="col-8">
          <UserTable userProfile={userProfile} />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
