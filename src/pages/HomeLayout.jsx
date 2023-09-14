import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

function HomeLayout() {
  const navigation = useNavigation()

  const isPageLoading = navigation.state === "loading"

  return (
    <>
      <Navbar />
      <section className="pageContent">
        {isPageLoading ? (
          <div className="loadingContainer">
            <div className="loading"></div>
          </div>
        ) : (
          <Outlet />
        )}
      </section>
      <Footer />
    </>
  )
}
export default HomeLayout
