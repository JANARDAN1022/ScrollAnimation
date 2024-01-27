import "./App.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}



function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  const ImageSrc = 
  id===1?`https://i.pinimg.com/originals/d5/00/47/d50047b6bdfc27e96f6b9ffb40a25188.png`
  :
  id===2?`https://c4.wallpaperflare.com/wallpaper/409/952/920/dragon-ball-z-son-goku-portrait-display-wallpaper-preview.jpg`
  :
  id===3?`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJlyQnRasFlGNP2AxIQl_sHCEoq6q9XNkxhw&usqp=CAU`
  :
  id===4?`https://e0.pxfuel.com/wallpapers/436/567/desktop-wallpaper-dragon-ball-goku-goku-body-thumbnail.jpg`
  :
  `https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/03/Goku-Ultra-Instinct-Dragon-Ball-Super.jpg`


return (
    <section key={id}>
      <div ref={ref}>
        <img className="object-cover" src={ImageSrc} alt="GOkU Forms" />
      </div>
      <motion.h2 className={`
      ${id===1?'text-black  [text-shadow:_0_0px_10px_#0001,_0_0px_40px_#0001,_0_0px_80px_#0001,_0_0px_160px_#0001]':id===2?'text-[#ffeb3b]  [text-shadow:_0_0px_10px_#ff8c3b,_0_0px_40px_#ff8c3b,_0_0px_80px_#ff8c3b,_0_0px_160px_#ff8c3b]':
        id===3?'text-sky-300  [text-shadow:_0_0px_10px_rgb(125,211,252),_0_0px_40px_rgb(125,211,252),_0_0px_80px_rgb(125,211,252),_0_0px_160px_rgb(125,211,252)]':id===4?'text-indigo-500  [text-shadow:_0_0px_10px_rgb(99,102,241),_0_0px_40px_rgb(99,102,241),_0_0px_80px_rgb(99,102,241),_0_0px_160px_rgb(99,102,241)]':
        'text-white  [text-shadow:_0_0px_10px_rgb(255,255,255),_0_0px_40px_rgb(255,255,255),_0_0px_80px_rgb(255,255,255),_0_0px_160px_rgb(255,255,255)] animate-pulse'
      }`} style={{ y }}>{`${id===1?'Base Form':id===2?'Super Saiyan':id===3?'Super Saiyan blue':id===4?'Ultra Instinct':'Mastered Ultra Instinct'}`}</motion.h2>
    </section>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


  return (
    <div className="bg-orange-400">
      {[1, 2, 3, 4, 5].map((image) => (
        <Image id={image} />
      ))}
      <motion.div className="progress flex " style={{ scaleX }} />
    </div>
  );
}
