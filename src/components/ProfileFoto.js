import foto from "../image.jpg";

const ProfileFoto = () => (
  <div
    className="h-48 w-48 rounded-full bg-white overflow-hidden"
    style={{ border: "7px solid rgb(150, 124, 15)" }}
  >
    <img src={foto} alt="avatar" className="h-full w-full object-cover" />
  </div>
);

export default ProfileFoto;
