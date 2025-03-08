const Profile = () => {
  return (
    <div>
      <div className="text-xl mb-2 text-[#FBFFE4]">
        Update your guest profile
      </div>
      <p>
        Providing the following information will make your check-in process
        faster and smoother. See you soon!!
      </p>
      <form className="bg-[#2C3531] mt-4 flex flex-col gap-4 p-6 mb-6 rounded-md text-[#D1E8E2]">
        <div className="flex flex-col gap-2">
          <label>Full name</label>
          <input className="bg-[#D1E8E2] w-[500px] px-2 py-1 outline-none  rounded-sm" />
        </div>

        <div className="flex flex-col gap-2">
          <label>Email address</label>
          <input className="bg-[#D1E8E2]  w-[500px] px-2 py-1 outline-none  rounded-sm" />
        </div>

        <div className="flex flex-col gap-2">
          <label>Where are you from?</label>
          <input className="bg-[#D1E8E2]  w-[500px] px-2 py-1 outline-none rounded-sm" />
        </div>

        <div className="flex flex-col gap-2">
          <label>National ID number</label>
          <input className="bg-[#D1E8E2]  w-[500px] px-2 py-1 outline-none rounded-sm" />
        </div>

        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
