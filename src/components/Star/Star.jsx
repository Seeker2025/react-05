import { ReactComponent as MyIcon } from './Star.svg'
import square from './square.svg'

// There are two ways to import SVG images.

export const Star = () => {
  return (
    <div>
    <MyIcon/> 
    <img src={square}/>
    </div>
  );
};