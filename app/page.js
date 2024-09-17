import Image from "next/image";
import logo from './assets/ethio.png'
export default function Home() {
  return (
    <div>
      hi
      <Image src={logo} alt="logo"/>
    </div>
  );
}
