import React from 'react'
import ReactLoading from "react-loading"
const Loading = () => {
  return (
    <div id="Loading" >
        <ReactLoading id="loadingReact" type={"balls"} color={"white"} height={'100px'} width={'60px'} />
    </div>
  )
}

export default Loading