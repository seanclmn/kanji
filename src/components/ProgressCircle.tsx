
//@ts-nocheck
interface ProgressCircleProps {
  progress: number
}

const ProgressCircle = ({progress}: ProgressCircleProps) => {

  return(
    <svg height="220" viewPort="0 0 110 110" version="1.1" xmlns="[<http://www.w3.org/2000/svg>](<http://www.w3.org/2000/svg>)">
      <circle id="bar-bg" r="98" cx="110" cy="110" fill="transparent" stroke-dasharray="615.752" stroke-dashoffset="615.752"></circle>
    <circle id="bar" r="98" cx="110" cy="110" fill="transparent" stroke-dasharray="615.752" stroke-dashoffset="615.752"></circle>
    </svg>
  )
}

export default ProgressCircle
