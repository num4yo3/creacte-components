import {useRef} from "react";
import {useScrollFadeIn} from "./useScrollFadeIn";

export const ScrollFadeIn =(props:{
  offset: {x:number, y:number},
  adjust: number,
  children: Object
})=>{
  const {offset, adjust} = props;
  const children = props.children;

  const ref = useRef(null);

  const style = useScrollFadeIn(
    ref,
    {x: offset.x, y: offset.y},
    adjust
  );

  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  );
}
