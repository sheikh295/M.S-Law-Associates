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
var msgsend = 0;
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
  msgsend = 1;
    if (msgsend == 1) {
    document.getElementById('msgsent').classList.remove('hidden');
    event.target.name.value = "";
    event.target.email.value = "";
    event.target.phone.value = "";
    event.target.subject.value = "";
    event.target.message.value = "";
  }
});