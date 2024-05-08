import Providers from "./components/Providers";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <Providers>
        <Navbar />
        <Header />
      </Providers>
    </main>
  );
}
