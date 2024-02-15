import logo from './logo.svg';
import './App.css';
import Header from "./Mycomponent/header";
import Footer from './Mycomponent/footer';
import Carousel from './Mycomponent/Carousel';
import Link from './Mycomponent/link';
import Video from './Mycomponent/video';
import Showroom  from './Mycomponent/Showroom';
import Image1 from './Mycomponent/image1';
import Threeimage from './Mycomponent/threeimage';
function App() {
  return (
  <>
     <Header/>
     <Carousel/>
     <Link/>
     {/* <Video/> */}
     <Image1/>
     <Threeimage/>
     <Showroom/>
     <Footer/>
  </>
  );
}

export default App;
