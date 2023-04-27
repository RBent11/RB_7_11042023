import NotFound from "../components/404";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Page404() {
  return (
    <div className= "Page404">
        <Header/>
        <NotFound/>
        <Footer/>
    </div>
  );
}

export default Page404;