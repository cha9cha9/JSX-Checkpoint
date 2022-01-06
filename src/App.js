import React from 'react'
import './style.css'
import myImage from './1.jfif'
function App() {
  let name="mario"
  return (
    <div>
      <div style={{border:'solid 1px black',maxWidth:'100vw'}}>
<h1 className="title red">Your name here:{name}</h1>
<br />


<img src={myImage}/>

<br/ >

<img src="./2.jfif"/>
</div>
<video width="320" height="240" controls>

 <source src="myVideo.mp4" type="video/mp4" />

</video>


    </div>
  )
}

export default App
