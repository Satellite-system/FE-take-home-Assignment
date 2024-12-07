import React from 'react'

interface LineProps {
   bgColor: string;
 }

const Line: React.FC<LineProps>  = ({bgColor}) => {
  return (
    <div style={{backgroundColor: bgColor, width: '1408px', height: '1px',}}></div>
  )
}

export default Line