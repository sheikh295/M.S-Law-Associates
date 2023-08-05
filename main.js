import './style.css'
import { initializeApp } from "firebase/app"
import { getDatabase, ref, set } from "firebase/database"
import { v4 as uuidv4 } from 'uuid'

const firebaseConfig = {
    apiKey: "AIzaSyCrCVUHKYZDsmV_5oCIQdDxyP2tZZp1Lx8",
    authDomain: "ms-law-associates.firebaseapp.com",
    projectId: "ms-law-associates",
    storageBucket: "ms-law-associates.appspot.com",
    messagingSenderId: "831614462631",
    appId: "1:831614462631:web:ab21c8a29830c8aa434982"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const userId = uuidv4();

document.querySelector('#app').innerHTML = `
  <div>
  <div id="header1" class="h-10 3xs:h-14 w-full 2xs:flex items-center justify-between 3xs:px-2 sm:px-10 md:px-28 text-[#bdbdbd] text-[9px] 3xs:text-[11px] lg:text-[14px] xl:text-[18px] font-[Poppins]">
  <div class="inline-flex"><i class="fa-solid fa-phone mr-3 m-auto"></i>+92-42-3729000<div class="ml-8"><i class="fa-solid fa-envelope mr-3 m-auto"></i>mslawassociates@live.com</div></div>
  <div class="inline-flex"><i class="fa-solid fa-clock mr-2 m-auto"></i>Mon - Fri 09:00-17:00<div class="ml-8"><a href="#"><i class="fa-brands fa-facebook-f"></i></a><a href="#"><i class="fa-brands fa-instagram ml-3"></i></a><a href="#"><i class="fa-brands fa-twitter ml-3"></i></a></div></div>
</div>
<div id="mainbg1" class="h-[770px] absolute overflow-hidden z-0 w-[100%] transition-all duration-300">
  <img src="images/bg-4.jpg" class="w-full h-full opacity-100">
</div>
<div id="mainbg2" class="bg-[#1C1D30] h-[770px] absolute overflow-hidden z-0 w-[100%] invisible opacity-60 transition-all duration-300">
  <img src="images/bg-5.jpg" class="w-full h-full opacity-50">
</div>
<div id="header2" class="hidden md:block h-24 w-full font-[Poppins] text-white text-[12px] lg:text-[18px] relative z-10">
  <div class="h-24 flex items-center justify-between px-5 xl:px-36">
      <div><img src="images/logo-.png" width="200px"></div>
      <div class="inline-flex gap-10">
          <div class="font-bold"><i class="fa-brands fa-first-order-alt mr-3"></i>One of The<div class="ml-7 font-normal">Top Law Firm</div></div><div class="font-bold"><i class="fa-regular fa-star mr-3"></i>Won over<div class="font-normal ml-8">100+ Cases</div></div><div class="font-bold"><i class="fa-solid fa-globe mr-3"></i>Trusted by <div class="font-normal ml-8">500+ CLients</div></div><div><button onclick="window.location.href='#contactinfo&map'" class="pr-14 pl-11 py-3 rounded-sm text-center bg-white text-blue-900 hover:bg-transparent hover:border-[1px] hover:border-white hover:text-white transition duration-300"><i class="fa-regular fa-comment mr-4"></i>Consult</button></div>
      </div>
  </div>
</div>
<div id="navbar" class=" w-full h-[70px] sticky z-20 top-0">
  <div id="navbarinner" class="w-[100%] md:w-[83%] font-bold bg-[rgba(48,51,88,0.8)] text-[rgba(255,255,255,0.7)] text-lg h-[70px] m-auto flex items-center justify-between px-10">
      <img src="images/logo-.png" width="200px" class="block md:hidden">
      <ul id="menu" class="md:inline-flex gap-10 bg-[rgba(48,51,88,0.8)] md:bg-transparent max-md:fixed max-md:h-[770px] max-md:mt-[834px] max-md:w-[50%] max-md:right-0 md:translate-x-0 translate-x-full max-md:transition-all max-md:duration-500">
          <li class="hover:text-[#ffffff] transition duration-500 max-md:ml-5"><a href="#home">Home</a></li>
          <li class="hover:text-[#ffffff] transition duration-500 max-md:mt-5 max-md:ml-5"><a href="about.html">About</a></li>
          <li class="hover:text-[#ffffff] transition duration-500 max-md:mt-5 max-md:ml-5"><a href="#practiceareas">Practice Areas</a></li>
          <!--<li class="hover:text-[#ffffff] transition duration-500 max-md:mt-5 max-md:ml-5"><a href="#associates">Associates</a></li>-->
          <li class="hover:text-[#ffffff] transition duration-500 max-md:mt-5 max-md:ml-5"><a href="#contact">Contact Us</a></li>
      </ul>
      <div id="searchicon" class="hover:text-[#ffffff] transition duration-500 hidden md:block"><a href="#"><i class="fa-solid fa-magnifying-glass"></i></a></div>
      <div id="menubtn" class="hover:text-[#ffffff] transition duration-500 block md:hidden"><i class="fa-solid fa-bars"></i></div>
  </div>
</div>
<div id="home" class="relative z-10">
  <div id="m1arrowleft" class="absolute left-5 text-white text-4xl top-28 max-xs:hidden cursor-pointer"><i class="fa-solid fa-chevron-left"></i></div>
  <div id="m1arrowright" class="absolute right-5 text-white text-4xl top-28 max-xs:hidden cursor-pointer"><i class="fa-solid fa-chevron-right"></i></div>
  <div id="m1contents" class="w-[270px] 3xs:w-[290px] 2xs:w-[390px] xs:w-[480px] sm:w-[600px] md:w-[700px] lg:w-[960px] xl:w-[1200px] h-[462px] m-auto mt-20 pt-24">
      <div id="m1content1" class="max-xs:text-center transition-all duration-300">
          <div data-aos="fade-down" class="text-[30px] 2xs:text-[35px] xs:text-[40px] md:text-[60px] lg:text-[80px] font-bold font-serif text-white">M.S. Law Associates</div>
          <div data-aos="fade-down" class="w-20 h-1 bg-white rounded-xl max-xs:m-auto"></div>
          <div data-aos="fade-down" class="mt-10 text-sm 2xs:text-lg text-white font-[Poppins]">We are a leading law firm with more than 20 years of experience</div>
          <div class="text-sm mt-10 text-blue-950 font-bold"><button onclick="window.location.href='#contact'" class="py-4 pl-8 pr-5 bg-white rounded-md hover:bg-transparent hover:border-[1px] hover:border-white hover:text-white transition duration-300">CONTACT NOW<i class="fa-solid fa-arrow-right fa-fade ml-2"></i></button></div>
      </div>
      <div id="m1content2" class="max-xs:text-center hidden transition-all duration-300">
          <div data-aos="fade-down" class="text-[30px] 2xs:text-[35px] xs:text-[40px] md:text-[60px] lg:text-[80px] font-bold font-serif text-white">Professional Law Firm</div>
          <div data-aos="fade-down" class="w-20 h-1 bg-white rounded-xl max-xs:m-auto"></div>
          <div data-aos="fade-down" class="mt-10 text-sm 2xs:text-lg text-white font-[Poppins]">We are a leading law firm with more than 20 years of experience</div>
          <div class="text-sm mt-10 text-blue-950 font-bold"><button onclick="window.location.href='#contact'" class="py-4 pl-8 pr-5 bg-white rounded-md hover:bg-transparent hover:border-[1px] hover:border-white hover:text-white transition duration-300">CONTACT NOW<i class="fa-solid fa-arrow-right fa-fade ml-2"></i></button></div>
      </div>
  </div>
</div>
<div id="about" class="h-[450px] xs:h-[539px] md:h-[385px] md:flex items-center w-[250px] 3xs:w-[290px] 2xs:w-[380px] xs:w-[500px] sm:w-[600px] md:w-[700px] lg:w-[960px] xl:w-[1200px] bg-[#3C3E6B] m-auto relative z-10 rounded-md">
  <div class="md:w-[50%] md:h-full" data-aos="fade-up">
      <div class="font-serif text-2xl font-bold text-white pt-10 max-2xs:text-center 2xs:pl-14">About M.S. Law Associates</div>
      <div class="w-[95%] sm:w-[80%] max-2xs:text-center max-2xs:m-auto 2xs:pl-14 text-[16px] md:text-[14px] lg:text-[16px] font-[Poppins] text-[rgba(255,255,255,0.5)]"><p class="mt-7">We can provide corporate governance, helping clients manage the responsibilities of running a corporation in financial field. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p></div>
      <div></div>
      <div class="text-[#AB968A] max-2xs:text-center 2xs:pl-14 mt-20 xs:mt-14 lg:mt-28 font-bold">Muhammad Barjees Tahir</div>
  </div>
  <div class="max-md:overflow-hidden md:w-[50%] h-[44%] md:h-[100%] relative z-10 max-xs:hidden"><img src="images/bg-1.jpg" class="md:w-full md:h-full opacity-50"></div>
</div>
<div id="practiceareas" class="w-[250px] 3xs:w-[290px] 2xs:w-[380px] xs:w-[500px] sm:w-[600px] md:w-[700px] lg:w-[960px] xl:w-[1200px] m-auto pb-28">
  <div class="text-center pt-20">
      <div class="text-[#bbbbbb] text-[16px] font-bold font-[Poppins]">WHAT WE ARE EXPERT AT</div>
      <div class="text-black text-4xl mt-3 font-serif">Legal Practice Areas</div>
      <div class="bg-[#AA8D70] h-[2px] w-14 mt-8 m-auto"></div>
  </div>
  <div id="practicegrid" class="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-3 gap-10 mt-20">
      <div class="bg-white h-[400px] shadow-2xl rounded-lg text-center p-5 md:p-12 hover:-mt-5 transition-all duration-300">
          <div class=""><img src="images/practice-area-1.png" class="m-auto" data-aos="fade-down"></div>
          <p class="font-serif text-2xl mt-8" data-aos="fade-down">Taxation Law</p>
          <p class="text-[#868686] font-[Poppins] text-[16px] mt-8" data-aos="fade-down">We can provide corporate governance, helping clients manage the responsibilities of running a corporation in financial field.</p>
          <p class="text-[#AB968A] font-[Poppins] text-sm font-bold mt-8" data-aos="fade-down"><a href="">LEARN MORE<i class="fa-solid fa-arrow-right ml-2"></i></a></p>
      </div>
      <div class="bg-[#3C3E6B] h-[400px] shadow-2xl rounded-lg text-center p-5 md:p-12 hover:-mt-5 transition-all duration-300">
          <div class=""><img src="images/practice-area-2.png" class="m-auto" data-aos="fade-down"></div>
          <p class="font-serif text-2xl mt-8 text-white" data-aos="fade-down">Corporate Law</p>
          <p class="text-[#B5B8DE] font-[Poppins] text-[16px] mt-8" data-aos="fade-down">We can provide corporate governance, helping clients manage the responsibilities of running a corporation in financial field.</p>
          <p class="text-white font-[Poppins] text-sm font-bold mt-8" data-aos="fade-down"><a href="">LEARN MORE<i class="fa-solid fa-arrow-right ml-2"></i></a></p>
      </div>
      <div class="bg-white h-[400px] shadow-2xl rounded-lg text-center p-5 md:p-12 hover:-mt-5 transition-all duration-300">
          <div class=""><img src="images/practice-area-3.png" class="m-auto" data-aos="fade-down"></div>
          <p class="font-serif text-2xl mt-8" data-aos="fade-down">Family Law</p>
          <p class="text-[#868686] font-[Poppins] text-[16px] mt-8" data-aos="fade-down">We can provide corporate governance, helping clients manage the responsibilities of running a corporation in financial field.</p>
          <p class="text-[#AB968A] font-[Poppins] text-sm font-bold mt-8" data-aos="fade-down"><a href="">LEARN MORE<i class="fa-solid fa-arrow-right ml-2"></i></a></p>
      </div>
      <div class="bg-[#3C3E6B] h-[400px] shadow-2xl rounded-lg text-center p-5 md:p-12 hover:-mt-5 transition-all duration-300">
          <div class=""><img src="images/practice-area-4.png" class="m-auto" data-aos="fade-down"></div>
          <p class="text-white font-serif text-2xl mt-8" data-aos="fade-down">Civil Law</p>
          <p class="text-[#B5B8DE] font-[Poppins] text-[16px] mt-8" data-aos="fade-down">We can provide corporate governance, helping clients manage the responsibilities of running a corporation in financial field.</p>
          <p class="text-white font-[Poppins] text-sm font-bold mt-8" data-aos="fade-down"><a href="">LEARN MORE<i class="fa-solid fa-arrow-right ml-2"></i></a></p>
      </div>
      <div class="bg-white h-[400px] shadow-2xl rounded-lg text-center p-5 md:p-12 hover:-mt-5 transition-all duration-300">
          <div class=""><img src="images/practice-area-5.png" class="m-auto" data-aos="fade-down"></div>
          <p class="font-serif text-2xl mt-8" data-aos="fade-down">Criminal Law</p>
          <p class="text-[#868686] font-[Poppins] text-[16px] mt-8" data-aos="fade-down">We can provide corporate governance, helping clients manage the responsibilities of running a corporation in financial field.</p>
          <p class="text-[#AB968A] font-[Poppins] text-sm font-bold mt-8" data-aos="fade-down"><a href="">LEARN MORE<i class="fa-solid fa-arrow-right ml-2"></i></a></p>
      </div>
      <div class="bg-[#3C3E6B] h-[400px] shadow-2xl rounded-lg text-center p-5 md:p-12 hover:-mt-5 transition-all duration-300">
          <div class=""><img src="images/practice-area-6.png" class="m-auto" data-aos="fade-down"></div>
          <p class="text-white font-serif text-2xl mt-8" data-aos="fade-down">Customs Law</p>
          <p class="text-[#B5B8DE] font-[Poppins] text-[16px] mt-8" data-aos="fade-down">We can provide corporate governance, helping clients manage the responsibilities of running a corporation in financial field.</p>
          <p class="text-white font-[Poppins] text-sm font-bold mt-8" data-aos="fade-down"><a href="">LEARN MORE<i class="fa-solid fa-arrow-right ml-2"></i></a></p>
      </div>
  </div>
</div>
<!--  <div id="associates" class="w-full m-auto bg-[#f3f3f3]"  data-aos="fade">
  <div class="text-center pt-16">
      <div class="text-black text-4xl font-serif">Associates</div>
      <div class="text-[#7e7e7e] text-sm font-bold font-[Poppins] mt-3"><a href="">VIEW ALL THE PEOPLE<i class="fa-solid fa-arrow-right ml-2"></i></a></div>
      <div class="bg-[#3C3E6B] h-[2px] w-14 mt-8 m-auto"></div>
  </div>
  <div id="partnerspics" class="w-[250px] 3xs:w-[290px] 2xs:w-[320px] sm:w-[600px] md:w-[700px] lg:w-[960px] xl:w-[1200px] h-[240px] 3xs:h-[280px] 2xs:h-[320px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 m-auto">
      <div id="partnerpic1" class="shadow-xl rounded-md h-[240px] 3xs:h-[280px] 2xs:h-[320px] bg-black overflow-hidden"><img src="images/partners-demo-pic.jpg" class="w-full h-full hover:opacity-50 transition-all duration-500 hover:scale-110"></div>
      <div id="partnerpic2" class="shadow-xl rounded-md h-[240px] 3xs:h-[280px] 2xs:h-[320px] bg-black overflow-hidden mt-[100px] sm:mt-[0px]"><img src="images/partners-demo-pic.jpg" class="w-full h-full hover:opacity-50 transition-all duration-500 hover:scale-110"></div>
      <div id="partnerpic3" class="shadow-xl rounded-md h-[240px] 3xs:h-[280px] 2xs:h-[320px] bg-black overflow-hidden mt-20 lg:mt-0"><img src="images/partners-demo-pic.jpg" class="w-full h-full hover:opacity-50 transition-all duration-500 hover:scale-110"></div>
  </div>
  <div class="w-full bg-white h-[270px]">
      <div id="partnersname" class="w-[250px] 3xs:w-[290px] 2xs:w-[320px] sm:w-[600px] md:w-[700px] lg:w-[960px] xl:w-[1200px] h-[80px] 2xs:h-[100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 m-auto">
          <div id="partnername1" class="shadow-xl rounded-b-md bg-white h-[80px] 2xs:h-[100px]">
              <p class="text-lg text-center mt-5">MUHAMMAD BARJEES TAHIR</p>
              <p class="text-sm font-[Poppins] text-[#9D9D9D] text-center">PARTNER</p>
          </div>
          <div id="partnername2" class="shadow-xl rounded-b-md bg-white h-[80px] 2xs:h-[100px] mt-72 sm:mt-0">
              <p class="text-lg text-center mt-5">SHABBIR MUGHAL</p>
              <p class="text-sm font-[Poppins] text-[#9D9D9D] text-center">ASSOCIATE</p>
          </div>
          <div id="partnername3" class="shadow-xl rounded-b-md bg-white h-[80px] 2xs:h-[100px] mt-72 lg:mt-0">
              <p class="text-lg text-center mt-5">RANA REHAN</p>
              <p class="text-sm font-[Poppins] text-[#9D9D9D] text-center">ASSOCIATE</p>
          </div>
      </div>
      <div id="partnersslidebtn" class="flex items-center w-20 m-auto mt-14">
          <button id="partnerbtnleft" class="py-4 px-6 bg-[#EFEFEF] text-[#3A3E7F]"><i class="fa-solid fa-chevron-left"></i></button>
          <button id="partnerbtnright" class="p-4 px-6 bg-[#EFEFEF] text-[#3A3E7F] ml-2"><i class="fa-solid fa-chevron-right"></i></button>
      </div>
  </div>
</div> -->
<div class="min-h-[708px] w-full bg-[#EFEFEF] relative z-[5] mt-[770px] sm:mt-[290px] lg:mt-[0px]">
<div id="testimonial" class="w-[100%] xs:w-[500px] sm:w-[600px] md:w-[700px] lg:w-[960px] xl:w-[1200px] h-[1050px] 3xs:h-[950px] xs:h-[708px] bg-[rgba(60,62,107,1)] m-auto">
  <img src="images/bg-6.jpg" class="w-[100%] xs:w-[500px] sm:w-[600px] md:w-[700px] lg:w-[960px] xl:w-[1200px] h-[1050px] 3xs:h-[950px] xs:h-[708px] absolute opacity-30">
  <div class="relative z-10 h-full w-full pt-[70px]">
      <div class="w-[93%] h-[93%] xs:border xs:border-[#67698D] m-auto text-center">
          <p class="text-[#BDBFFA] mt-10 font-bold font-[Poppins] text-sm 2xs:text-lg xs:text-sm">T E S T I M O N I A L</p>
          <p class="playfairfont text-white text-3xl 2xs:text-4xl xs:text-3xl mt-2">Words From Clients</p>
          <div class="w-14 h-[2px] bg-white m-auto mt-10"></div>
          <div class="text-[100px] xs:text-[50px] sm:text-[100px] text-white m-auto mt-5"><i class="fa-solid fa-quote-left"></i></div>
          <p class="text-[#C8CAF6] italic mt-3 text-[20px] 2xs:text-[22px] xs:text-[16px] lg:text-[20px] w-[90%] m-auto">I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary,</p>
          <p class="playfairfont text-white text-lg mt-8">Sheikh Arif Iqbal</p>
          <p class="text-[#C8CAF6] font-[Poppins] mt-2">CEO</br>HI Profile International</p>
      </div>
  </div>
</div>
</div>
<img src="images/bg-7.jpg" class="h-full bg-center absolute w-[100%]">
<div id="contact" class="w-[90%] 2xs:w-[380px] xs:w-[400px] sm:w-[550px] md:w-[700px] lg:w-[800px] h-[808px] md:h-[731px] bg-white shadow-xl rounded-sm m-auto relative z-10 -translate-y-14 2xs:-translate-y-20">
  <div class="text-center w-full">
      <p class="text-3xl playfairfont text-[rgba(0,0,0,0.7)] pt-20">Free Consultation</p>
      <p class="text-[rgba(0,0,0,0.4)] font-[Poppins] mt-5 text-sm 2xs:text-lg w-[80%] m-auto">Law is complicate matter. It can cause you a big problem if you ignore it. Let us help you!</p>
  </div>
  <form id="contactform" class="w-[95%] lg:w-[85%] m-auto mt-10">
      <input type="name" placeholder="Name*" name="name" class="w-60 2xs:w-80 h-16 bg-[#f3f3f3] rounded-sm border-0 pl-8 max-md:m-auto max-md:block">
      <input type="phone" placeholder="Phone*" name="phone" class="w-60 2xs:w-80 h-16 bg-[#f3f3f3] rounded-sm max-md:translate-y-2 md:ml-3 border-0 pl-8 max-md:m-auto max-md:block">
      <input type="subject" placeholder="Subject*" name="subject" class="w-60 2xs:w-80 h-16 bg-[#f3f3f3] rounded-sm border-0 pl-8 md:mt-10 max-md:translate-y-4 max-md:m-auto max-md:block">
      <input type="email" placeholder="Email*" name="email" class="w-60 2xs:w-80 h-16 bg-[#f3f3f3] rounded-sm ml-3 border-0 pl-8 md:mt-10 max-md:translate-y-6 max-md:m-auto max-md:block">
      <input type="message" placeholder="Message*" name="message" class="w-60 2xs:w-[320px] md:w-[660px] h-40 bg-[#f3f3f3] rounded-sm border-0 pl-8 md:mt-8 max-md:translate-y-8 max-md:m-auto max-md:block">
      <button type="submit" class="text-white h-14 w-[240px] 2xs:w-[320px] md:w-[660px] bg-[#3C3E6B] mt-8 font-[Poppins] font-bold text-lg max-md:translate-y-12 max-md:m-auto max-md:block">SUBMIT</button>
  </form>
</div>
<!-- <div id="casestudy" class="h-[770px] w-full">
  <div class="text-center pt-20 w-60 m-auto">
      <div class="text-[#bbbbbb] text-sm font-bold font-[Poppins]">SEE OUR</div>
      <div class="text-black text-4xl mt-2 font-serif">Case Studies</div>
      <div class="bg-black h-[2px] w-14 mt-8 m-auto"></div>
  </div>
  <div class="w-full h-80 mt-24 bg-black flex">
      <div class="w-[20%] h-full overflow-hidden"><div class="w-full h-full bg-cover bg-center text-center hover:scale-110 hover:opacity-50 transition-all duration-500" style="background-image: url(images/case-study-2.jpg);"><div class="text-white font-bold w-48 h-full m-auto pt-20 text-xl">Giving Millionaire It's Wings</div></div></div>
      <div class="w-[20%] h-full overflow-hidden"><div class="w-full h-full bg-cover bg-center text-center hover:scale-110 hover:opacity-50 transition-all duration-500" style="background-image: url(images/case-study-1.jpg);"></div></div>
      <div class="w-[20%] h-full overflow-hidden"><div class="w-full h-full bg-cover bg-center text-center hover:scale-110 hover:opacity-50 transition-all duration-500" style="background-image: url(images/case-study-3.jpg);"></div></div>
      <div class="w-[20%] h-full overflow-hidden"><div class="w-full h-full bg-cover bg-center text-center hover:scale-110 hover:opacity-50 transition-all duration-500" style="background-image: url(images/case-study-4.jpg);"></div></div>
      <div class="w-[20%] h-full overflow-hidden"><div class="w-full h-full bg-cover bg-center text-center hover:scale-110 hover:opacity-50 transition-all duration-500" style="background-image: url(images/case-study-5.jpg);"></div></div>
  </div>
  <div id="casestudyslidebtn" class="flex items-center w-20 m-auto mt-14">
      <button class="py-4 px-6 bg-[#EFEFEF] text-[#3A3E7F]"><i class="fa-solid fa-chevron-left"></i></button>
      <button class="p-4 px-6 bg-[#EFEFEF] text-[#3A3E7F] ml-2"><i class="fa-solid fa-chevron-right"></i></button>
  </div>
</div> -->
<div id="clientchoose" class="w-full h-[1309px] md:h-[770px] md:flex">
  <img  data-aos="fade-right" src="images/clientchose.png" class="w-[250px] 2xs:w-[350px] xs:w-[400px] sm:w-[500px] md:w-[300px] lg:w-[400px] xl:w-[500px] py-[170px] lg:py-[150px] xl:py-[100px] ml-10 lg:ml-14 xl:ml-44 max-md:m-auto max-md:mt-[-200px]">
  <div  data-aos="fade-left" class="ml-10 lg:ml-14 xl:ml-20 max-md:translate-y-[-100px] md:mt-36 w-[250px] 2xs:w-[380px] xs:w-[450px] sm:w-[500px] md:w-[340px] lg:w-[400px] max-md:m-auto">
      <p class="text-[#bbbbbb] text-[16px] font-bold font-[Poppins]">WHAT WE ARE EXPERT AT</p>
      <p class="text-black text-[30px] lg:text-[36px] mt-3 playfairfont">Why Clients Choose Us</p>
      <p class="bg-[#AA8D70] h-[2px] w-14 mt-8"></p>
      <p class="text-[#3A3E7F] text-[18px] lg:text-[20px] font-[Poppins] mt-16">We can provide corporate governance, helping clients manage the responsibilities of running a corporation in financial field.</p>
      <p class="text-[#bbbbbb] text-[16px] lg:text-[18px] font-[Poppins] mt-10">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows.</p>
      <p class="text-[#3A3E7F] font-[Poppins] text-sm font-bold mt-8"><a href="">LEARN MORE<i class="fa-solid fa-arrow-right ml-2"></i></a></p>
  </div>
</div>
<div id="contactinfo&map" class="w-full min-h-[650px] lg:flex">
  <div id="contactinfo" class="w-[100%] xs:w-[500px] sm:w-[600px] md:w-[700px] lg:w-[50%] h-[100%] bg-[#EFEFEF] xs:pl-14 xl:pl-24 2xl:pl-44 m-auto lg:m-0">
      <p class="playfairfont text-[rgba(0,0,0,0.7)] text-3xl pt-36 max-3xs:w-[250px] max-2xs:w-[270px] max-xs:w-[390px] mx-auto">Contact Info</p>
      <p class="w-14 h-[2px] bg-[#3a3e7f] mt-5 max-2xs:ml-16 max-xs:ml-5"></p>
      <p class="text-lg 2xs:text-xl font-[Poppins] text-[#3a3e7f] mt-16 max-3xs:w-[250px] max-2xs:w-[270px] max-xs:w-[390px] max-xs:mx-auto">Call Now : +92-42-37229000</p>
      <p class="text-[#7a7a7a] font-[Poppins] text-[16px] 2xs:text-[18px] max-3xs:w-[250px] mt-16 max-2xs:w-[270px] max-xs:w-[390px] max-xs:mx-auto"><i class="fa-regular fa-envelope mr-5 text-[#3a3e7f]"></i>mslawassociates@live.com</p>
      <p class="text-[#7a7a7a] font-[Poppins] text-lg mt-5 max-2xs:w-[270px] max-3xs:w-[250px] max-xs:w-[390px] max-xs:mx-auto"><i class="fa-solid fa-clock mr-5 text-[#3a3e7f]"></i>Mon - Fri 09:00-17:00</p>
      <p class="text-[#7a7a7a] font-[Poppins] text-lg mt-5 max-2xs:w-[270px] max-3xs:w-[250px] max-xs:w-[390px] max-xs:mx-auto"><i class="fa-solid fa-location-arrow mr-5 text-[#3a3e7f]"></i>1st Floor, Aftab Tower, A.G. Office Chowk, Lahore.</p>
      <p class="text-[#9b9b9b] font-[Poppins] text-lg mt-10 max-2xs:w-[270px] max-3xs:w-[250px] max-xs:w-[390px] max-xs:mx-auto">Far far away, behind the word mountains, far from thte countries Vokalia and Consonantia, there live the blind texts.</p>
      <input type="text" placeholder="Your Email Address" class="h-16 w-[270px] max-3xs:w-[250px] 2xs:w-[390px] xs:w-[300px] xl:w-[400px] bg-white shadow-lg border-0 mt-10 pl-10 max-xs:mx-auto max-xs:block">
      <button class="h-16 w-[250px] 3xs:w-[270px] 2xs:w-[390px] xs:w-[90px] xl:w-[170px] bg-[#3a3e7f] font-bold text-white -ml-1 shadow-lg max-xs:mx-auto max-xs:block">SUBMIT</button>
  </div>
  <div id="mapbg" class="w-[100%] xs:w-[500px] sm:w-[600px] md:w-[700px] lg:w-[50%] h-[100%] bg-cover bg-center absolute lg:left-[50%] left-0 right-0 m-auto lg:m-0" style="background-image: url(images/bg-6.jpg);"></div>
  <div id="map" class="w-[100%] xs:w-[500px] sm:w-[600px] md:w-[700px] lg:w-[50%] min-h-full bg-[rgba(60,62,107,0.8)] relative z-10 m-auto lg:m-0">
      <p class="text-[#eeeeee] ml-20 pt-32 text-4xl playfairfont">Visit Us</p>
      <div class="w-16 h-[2px] bg-[#eeeeee] mt-5 ml-20"></div>
      <div class="mt-10 ml-14 w-[260px] 2xs:w-[350px] xs:w-[400px] sm:w-[500px] lg:w-[350px] xl:w-[500px] h-[400px] xl:h-[450px] max-xs:mx-auto"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d849.8914337528655!2d74.31059536960177!3d31.563530541089484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191caa0e20fd1d%3A0x905a26e4f2ecb206!2sSyed%20Mauj%20Darya%20Rd%2C%20Mozang%20Chungi%2C%20Lahore%2C%20Punjab%2054000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1689946352927!5m2!1sen!2s" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
  </div>
</div>
<div id="footer" class="w-full min-h-[385px] bg-[#1d1d1d] flex 2xs:px-14 lg:px-32 relative z-10 max-md:grid-cols-1 max-lg:grid max-lg:grid-cols-2">
  <div class="h-[300px] w-[270px] 3xs:w-[290px] 2xs:w-[320px] m-auto">
      <img src="images/logo-.png" class="w-[250px]">
      <p class="font-[Poppins] text-lg text-[#a7a7a7]">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into.</p>
      <div class="text-[#3a3e7f] text-lg mt-5"><a href="#"><i class="fa-brands fa-facebook-f"></i></a><a href="#"><i class="fa-brands fa-instagram ml-5"></i></a><a href="#"><i class="fa-brands fa-twitter ml-5"></i></a></div>
  </div>
  <div class="h-[300px] w-[270px] 3xs:w-[290px] 2xs:w-[320px] m-auto">
      <p class="text-[#f1f0f0] playfairfont text-xl 2xs:ml-5 mt-6">Contact Info</p>
      <p class="font-[Poppins] text-lg text-[#a7a7a7] mt-10 2xs:ml-5">1st Floor, Aftab Tower</p>
      <p class="font-[Poppins] text-lg text-[#a7a7a7] 2xs:ml-5">A.G Office Chowk</p>
      <p class="font-[Poppins] text-lg text-[#a7a7a7] 2xs:ml-5">Syed Mouj Darya Road, Lahore</p>
      <p class="font-[Poppins] text-lg text-[#b5bbe0] mt-5 2xs:ml-5">+92-42-37229000</p>
      <p  class="font-[Poppins] text-lg text-[#b5bbe0] 2xs:ml-5">mslawassociates@live.com</p>
  </div>
  <div class="h-[300px] w-[270px] 3xs:w-[290px] 2xs:w-[320px] xl:w-[500px] m-auto flex">
      <div class="w-[50%] h-full">
          <p class="text-[#f1f0f0] playfairfont text-xl 2xs:ml-5 mt-6">Practice Areas</p>
          <p class="font-[Poppins] text-lg text-[#b5bbe0] mt-10 2xs:ml-5">Civil Law</p>
          <p class="font-[Poppins] text-lg text-[#b5bbe0] mt-3 2xs:ml-5">Coporate Law</p>
          <p class="font-[Poppins] text-lg text-[#b5bbe0] mt-3 2xs:ml-5">Family Law</p>
          <p class="font-[Poppins] text-lg text-[#b5bbe0] mt-3 2xs:ml-5">Customs Law</p>
      </div>
      <div class="w-[50%] h-full mt-20">
          <p class="font-[Poppins] text-lg text-[#b5bbe0] mt-3 2xs:ml-5">Criminal Law</p>
          <p class="font-[Poppins] text-lg text-[#b5bbe0] mt-3 2xs:ml-5">Taxation Law</p>
      </div>
  </div>
</div>
<div id="footer2" class="w-full min-h-[77px] bg-[#111111] xs:flex items-center justify-between 2xs:px-6 md:px-14 lg:px-32">
  <p class="font-[Poppins] text-xs 2xs:text-sm sm:text-lg text-[#adadad] max-3xs:w-[270px] max-2xs:w-[290px] max-2xs:m-auto">Copyright 2023 M.S. Law Associates, All Rights Reserved</p>
  <p class="font-[Poppins] text-xs 2xs:text-sm sm:text-lg text-[#858585] max-3xs:w-[270px] max-2xs:w-[290px] max-2xs:m-auto"><a href="" class="mr-3 2xs:mr-8">Home</a><a href="" class="mr-3 2xs:mr-8">About</a><a href="" class="">Privacy & Policy</a></p>
</div>
<div class="hidden max-md:mt-[720px] translate-x-full"></div>
  </div>
`

window.addEventListener('scroll', function() {
  var scrollvalue = scrollY
  if (scrollY >= 50) {
      document.getElementById('menu').classList.remove('max-md:mt-[834px]')
      document.getElementById('menu').classList.add('max-md:mt-[720px]')
  }
  else if (scrollY < 50) {
      document.getElementById('menu').classList.add('max-md:mt-[834px]')
      document.getElementById('menu').classList.remove('max-md:mt-[720px]')
  };

  if (scrollY > 150) {
      document.getElementById('navbar').classList.add("bg-[rgba(48,51,88,0.8)]");
      document.getElementById('navbarinner').classList.remove("bg-[rgba(48,51,88,0.8)]");
  }
  else if (scrollY < 150) {
      document.getElementById('navbar').classList.remove("bg-[rgba(48,51,88,0.8)]");
      document.getElementById('navbarinner').classList.add("bg-[rgba(48,51,88,0.8)]");
  }
});

var navclass = "translate-x-full"
document.getElementById('menubtn').addEventListener("click", function() {
  if (navclass == "translate-x-full"){    
      document.getElementById('menu').classList.remove("translate-x-full");
      document.getElementById('menu').classList.add("translate-x-0");
      navclass = "translate-x-0";
  }
  else{
      document.getElementById('menu').classList.remove("translate-x-0");
      document.getElementById('menu').classList.add("translate-x-full");
      navclass = "translate-x-full";
  }
});

var pic = "picture 1"
document.getElementById('m1arrowleft').addEventListener("click", function (){
  if (pic == "picture 1") {
      console.log('pic 1')
      document.getElementById('mainbg1').classList.add('invisible')
      document.getElementById('mainbg1').classList.add('opacity-60')
      document.getElementById('mainbg2').classList.remove('invisible')
      document.getElementById('mainbg2').classList.remove('opacity-60')
      document.getElementById('m1content1').classList.add('hidden')
      document.getElementById('m1content2').classList.remove('hidden')
      pic = "picture 2";
  }

  else {
      console.log('pic 2')
      document.getElementById('mainbg1').classList.remove('invisible')
      document.getElementById('mainbg1').classList.remove('opacity-60')
      document.getElementById('mainbg2').classList.add('invisible')
      document.getElementById('mainbg2').classList.add('opacity-60')
      document.getElementById('m1content1').classList.remove('hidden')
      document.getElementById('m1content2').classList.add('hidden')
      pic = "picture 1";
  }
})
document.getElementById('m1arrowright').addEventListener("click", function (){
      if (pic == "picture 1") {
          console.log('pic 1')
          document.getElementById('mainbg1').classList.add('invisible')
          document.getElementById('mainbg1').classList.add('opacity-60')
          document.getElementById('mainbg2').classList.remove('invisible')
          document.getElementById('mainbg2').classList.remove('opacity-60')
          document.getElementById('m1content1').classList.add('hidden')
          document.getElementById('m1content2').classList.remove('hidden')
          pic = "picture 2";
      }
  
      else {
          console.log('pic 2')
          document.getElementById('mainbg1').classList.remove('invisible')
          document.getElementById('mainbg1').classList.remove('opacity-60')
          document.getElementById('mainbg2').classList.add('invisible')
          document.getElementById('mainbg2').classList.add('opacity-60')
          document.getElementById('m1content1').classList.remove('hidden')
          document.getElementById('m1content2').classList.add('hidden')
          pic = "picture 1";
      }
})

setInterval(mainslideshow, 6000)

function mainslideshow() {
  if (pic == "picture 1") {
      console.log('pic 1')
      document.getElementById('mainbg1').classList.add('invisible')
      document.getElementById('mainbg1').classList.add('opacity-60')
      document.getElementById('mainbg2').classList.remove('invisible')
      document.getElementById('mainbg2').classList.remove('opacity-60')
      document.getElementById('m1content1').classList.add('hidden')
      document.getElementById('m1content2').classList.remove('hidden')
      pic = "picture 2";
  }

  else {
      console.log('pic 2')
      document.getElementById('mainbg1').classList.remove('invisible')
      document.getElementById('mainbg1').classList.remove('opacity-60')
      document.getElementById('mainbg2').classList.add('invisible')
      document.getElementById('mainbg2').classList.add('opacity-60')
      document.getElementById('m1content1').classList.remove('hidden')
      document.getElementById('m1content2').classList.add('hidden')
      pic = "picture 1";
  }
}

document.getElementById('contactform').addEventListener('submit', function (event) {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const phone = event.target.phone.value;
  const subject = event.target.subject.value;
  const message = event.target.message.value;
  set(ref(database, 'interested/' + userId), {
    name: name,
    email: email,
    phone: phone,
    subject: subject,
    message: message,
  });
});