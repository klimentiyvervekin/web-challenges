import "./styles.css";

import Header from "./Header.jsx";
import Navigation from "./Navigation.jsx";

import Link from "./Link.jsx";
import Logo from "./Logo.jsx";
import Avatar from "./Avatar.jsx";

// import avatar from "./img/avatar.jpg";
// import logo from "./img/logo.jpg";
// import Image from "./Image.jsx";

export default function App() {
  return (
    <>
      <Header>
        <Logo />

        <Navigation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>

        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
