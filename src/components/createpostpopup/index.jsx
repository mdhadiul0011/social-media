import React, { useEffect, useRef, useState } from 'react'
import { CrossIcon } from '../../../public/svg/Cross'
import { Media } from '../../../public/svg/Media'
import { CircleProfileIcon } from '../../../public/svg/Circleprofile'
import { LiveIcon } from '../../../public/svg/Live'
import EmojiPickers from '../emojiPicker'
import AddImgVideo from '../addImgVedio'
import { postBgData } from './PostBackground'
import Outsideclick from '../../function/outsideclick'
import { useCreateUserPostMutation } from '../../features/api/AuthApi'
import { useSelector } from 'react-redux'

function CreatePostPopup({setVisible}) {
  const {userInfo} = useSelector((state)=>state.registration)
  const [createPost] = useCreateUserPostMutation()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("") 
  const [text, setText] = useState("")
  const [openFolder, setOpenFolder] = useState(false)
  const [img, setImg] = useState([])
  const [background, setBackground] = useState("")
  const [showBg, setShowBg] = useState(false)
  const textRef = useRef(null)
  const bgref = useRef(null)
  const popupRef = useRef(null)

  const handlebackground = (i) => {
    bgref.current.style.backgroundImage = `url(${postBgData[i]})`
    setBackground(postBgData[i])
    bgref.current.classList.add("bgPost")
    textRef.current.focus()
  }

  const removeBg = () => {
    bgref.current.style.backgroundImage = null
    setBackground('')
    bgref.current.classList.remove("bgPost")
    textRef.current.focus()
  }

  Outsideclick(popupRef, ()=> {
    setVisible(false)
  })
  
  const handleCreatePost = async () => {
    try {
      let response;
      if(background){
        response = await createPost({
          type: null,
          images: null,
          text,
          background,
          user: userInfo.id,
          token: userInfo.token,
        }).unwrap()
      }

      if(response.status === "done"){
        setLoading("")
        setText("")
        setBackground("")
        setVisible("")
      }

      console.log(response);
      
    } catch (error) {
        console.log(error);
      
    }
  }
  
  return (
    <div className='w-full h-[100vh] bg-blur z-20 flex items-center justify-center absolute overflow-y-auto'>
      <div className='w-[600px] bg-secondary_bg rounded-md z-30 py-3 px-5 shadow-md max-h-[1000px]'  ref={popupRef}>
        <div className='flex justify-between items-center border-b border-primary_bg pb-2 text-black'>
          <h3 className='font-opensans font-semibold text-lg'>Create Post</h3>
          <div className='w-8 h-8 rounded-full bg-gradient-to-r from-primary_bg to-secondary_bg text-white flex justify-center items-center cursor-pointer' onClick={()=>setVisible(false)}><CrossIcon/></div>
        </div>

        <div className='py-3' >
          <div className='flex items-center gap-3'>
            <div className='w-14 h-14 rounded-full bg-hover_color'></div>
            <div>
              <h3 className='font-opensans font-semibold text-base text-white'>Hadiul Islam</h3>
              <h3 className='font-opensans font-normal text-sm text-single_color'>Public</h3>
            </div>
          </div>
          {/* <div ref={textRef} className='w-full relative'>
            <EmojiPickers text={text} setText={setText} textRef={textRef} background={background} setBackground={setBackground} bgref={bgref}/>
          </div> */}
          <div>
            <EmojiPickers text={text} setText={setText} textRef={textRef} background={background} setBackground={setBackground} bgref={bgref}/>
          </div>
          
          <div className='flex justify-between items-center mb-3 text-white'>
            <div>
              {
                !openFolder && <div className='flex items-center gap-x-2 cursor-pointer'>
                <div className='w-8 h-8 bg-gradient-to-r from-cayan-100 to-secondary_bg rounded-md' onClick={()=>setShowBg((prev)=>!prev)}></div>
                {
                  showBg && <div className='flex items-center gap-x-2'>
                    <div className='w-8 h-8 bg-white rounded-md border border-line_color' onClick={removeBg}></div>
                  {
                    postBgData.map((item, i) => (
                      <img key={i} src={item} alt='post-bg' className='w-8 h-8 cursor-pointer rounded-md object-cover' onClick={()=>handlebackground(i)}/>
                    ))
                  }
                </div>
                }
                
              </div>
              }
            </div>
          </div>

          {
            openFolder && <div>
            <AddImgVideo img={img} setImg={setImg} setOpenFolder={setOpenFolder}/>
          </div>
          }

          <div className='p-2 border border-line_color rounded-md flex justify-between items-center mt-3'>
            <h4 className='font-opensans font-medium text-base text-white'>Add Your Post</h4>
            <div className='flex gap-3 items-center' >
              <div className={`flex items-center justify-center hover:bg-gradient-to-r from-primary_bg to-secondary_bg hover:text-white transition-all ease-linear duration-300 bg-line_color shadow-md rounded-full w-8 h-8 text-black cursor-pointer ${openFolder && "w-8 h-8 bg-gradient-to-r from-primary_bg to-secondary_bg text-white"}`} onClick={()=>setOpenFolder((prev)=>!prev)}>
                <Media  onClick={removeBg}/>
              </div>

              <div className="flex items-center justify-center hover:bg-gradient-to-r from-primary_bg to-secondary_bg hover:text-white transition-all ease-linear duration-300 bg-line_color shadow-md rounded-full w-8 h-8 text-black cursor-pointer">
                <CircleProfileIcon/>
              </div>

              <div className="flex items-center justify-center hover:bg-gradient-to-r from-primary_bg to-secondary_bg hover:text-white transition-all ease-linear duration-300 bg-line_color shadow-md rounded-full w-8 h-8 text-black cursor-pointer">
                <LiveIcon/>
              </div>
            </div>
          </div>

          <div className='w-full mt-5'>
            <button className='w-full p-3 bg-gradient-to-r from-primary_bg to-secondary_bg text-white font-opensans font-semibold rounded-full shadow-md' onClick={handleCreatePost}>Post</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePostPopup
