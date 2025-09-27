import UserImg from '../resources/images/user.jpg';

function UserProfile() {
  return (
    <div className="bg-gray-100 sm:p-4 md:p-8 md:max-w-sm sm:max-w-xs mx-auto my-20 rounded-lg shadow-lg">
      <img className="rounded-full w-36 h-36 mx-auto" src={UserImg} alt="User" />
      <h1 className="md:text-xl sm:text-lg text-blue-800 my-4">John Doe</h1>
      <p className="text-gray-600 md:text-base sm:text-sm">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
