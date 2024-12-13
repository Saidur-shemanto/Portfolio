import Navbar from "./Navbar";
import Profile from "./Profile";
import Socials from "./Socials";

export default function Header() {
  return (
    <div className="fixed w-1/2 flex flex-col justify-between gap-24">
      <Profile />
      <Navbar />
      <Socials />
    </div>
  );
}
