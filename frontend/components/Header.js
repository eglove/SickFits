import Link from 'next/link';
import { HeaderStyles, LogoStyles } from '../styles/HeaderStyles';
import Nav from './Nav';
import Cart from './Cart';

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <LogoStyles>
          <Link href="/">Sick Fits</Link>
        </LogoStyles>
        <Nav />
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Cart />
    </HeaderStyles>
  );
}
