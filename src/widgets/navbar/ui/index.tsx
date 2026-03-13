import { UserAvatar, getCurrentUserServer } from "@/entities/user";
import { BurgerMenu } from './burgerMenu'

export async function NavBar() {
  const user = await getCurrentUserServer();

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
      <div className="navbar-start">
        <BurgerMenu />
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">MIC JOURNAL</a>
      </div>
      <div className="navbar-end">
        <UserAvatar image={user?.image} />
      </div>
    </div>
  );
}
