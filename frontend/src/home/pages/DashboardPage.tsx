import { useAuthContext } from "../../context"
import { HomeLayout } from "../layouts/HomeLayout";

export const DashboardPage = () => {

  const { startLogout } = useAuthContext();

  return (
    <>
      <HomeLayout>
        <h1>DashboardPage</h1>
        <button onClick={startLogout}>Logout</button>
      </HomeLayout>
    </>
  )
}
