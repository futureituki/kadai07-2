import './App.css'
import background from './assets/background.mp4'
import githubIcon from './assets/github.svg'
import homepageIcon from './assets/homepage.svg'
import instaIcon from './assets/instagram.svg'
import twitterIcon from './assets/twitter.svg'
import ListItem from "./components/ListItem"
import MyImage from './components/MyImage'
import { ListItems } from "./constant/list"
function App() {
  const iconArr = [
    homepageIcon,
    instaIcon,
    githubIcon,
    twitterIcon
  ]
  return (
    <div className="main">
      <div className='h-screen w-screen relative'>
      <div class="absolute inset-0 overflow-hidden">
        <video class="absolute inset-0 object-cover w-full h-full" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
            <source src={background} type="video/mp4" />
        </video>
    </div>
        <div className='absolute left-1/2 top-32 z-10 -translate-x-1/2 flex flex-col justify-center gap-4'>
          <div className='flex flex-col gap-4 items-center mb-10'>
            <MyImage />
            <div className='bg-black backdrop-blur-lg border-white border-2 py-2 px-8 rounded-full'>
              <h1 className='text-white font-bold text-center text-xs'>Itsuki</h1>
            </div>
          </div>
        <ul className="flex flex-col gap-5">
          {ListItems.map((item, index) => (
            <ListItem key={index} link={item.link}>
              <span className="flex items-center gap-6 justify-center w-60">     
                <span>
                  <img className="w-6 h-6 object-cover" src={iconArr[index]} width={30} height={30}/>
                </span> 
                <span className="text-lg"> 
                  {item.name}
                </span>
              </span>
            </ListItem>
          ))}
        </ul>
      </div>
      </div>
    </div>
  )
}

export default App
