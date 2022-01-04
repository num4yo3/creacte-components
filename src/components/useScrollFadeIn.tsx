import {useState, useEffect, useMemo} from "react";

type Style = {
  opacity: number
  transform: string
}

export const useScrollFadeIn = (
  ref: React.RefObject<HTMLDivElement | null> ,
  translate: {x:number, y:number},
  adjust?: number
) => {
  const [state, setState] = useState<Style>({opacity:0, transform:`translateX(${translate.x}px) translateY(${translate.y}px)`})

  const nodeStyle = useMemo(
    ()=>({
      width: "100%",
      opacity: state.opacity,
      transform: state.transform,
      transitionDuration: "1.3s"
    }),
  [state.opacity, state.transform]
  )

  useEffect(()=>{
    if(!ref) return

    const checkScroll =()=>{
      const scroll = window.scrollY
      const windowHeight = window.innerHeight
      const offsetTop = ref.current.offsetTop

      if(offsetTop < scroll + windowHeight + (adjust? adjust : 0)){
        setState(prev => ({
          ...state,
          opacity: 1,
          transform: `translateX(0) translateY(0)`
        }))
      }else{
        setState(prev =>({
          ...state,
          opacity: 0,
          transform: `translateX(${translate.x}px) translateY(${translate.y}px)`
        }))
      }
    }
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll",checkScroll);
  },[])
  return nodeStyle;
}
