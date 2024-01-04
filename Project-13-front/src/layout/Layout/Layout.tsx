import Header from "../header/Header";
import Footer from "../footer/Footer";

export function Layout({ children }: any) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
