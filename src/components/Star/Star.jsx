import { ReactComponent as MyIcon } from './Star.svg'
import square from './square.svg'

// There are three ways to import SVG images.

export const Star = () => {
  return (
    <div>

      <MyIcon/> 
      
      <img src={square} alt=""/>

      <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="38" cy="38" r="35.5" fill="#DA9C01" stroke="#FF0004" stroke-width="5"/>
      </svg>

    </div>
  );
};