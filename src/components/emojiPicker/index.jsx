// import React, { useEffect, useState } from 'react'
// import './style.css'
// import EmojiPicker from 'emoji-picker-react';

// function EmojiPickers({text, setText, textRef, bgref, background, setBackground}) {
//     const [cursorPosition, setCursorPosition] = useState()

//     function handleOnEnter () {
//       setText(keyCode === 13, text )
//       const ref = textRef.current;
//       ref.focus()

//       const start = text.substring(0, ref.selectionStart);
//       const end = text.substring(1, ref.selectionStart)
//       const newText = start + emoji + end
//       setText(newText)
//       setCursorPosition(start.length + emoji.length)
//     }


//     useEffect(()=>{
//         textRef.current.selectionEnd = cursorPosition
//       }, [cursorPosition])

//   return (
//     <div className='mb-8 mt-3 w-full h-28 object-cover' ref={bgref}>
//       <div>
//         <textarea 
//           // ref={textRef}
//           // value={text} 
//           // onChange={setText}  
//           // onEnter={handleOnEnter}
//           placeholder="What's on your mind.."
//           className='w-full bg-transparent text-white outline-none'
//         />
//       </div>
//       <EmojiPicker/>
//          {/* <InputEmoji
//           // ref={textRef}
//           // value={text}
//           // onChange={setText}
//           // onEnter={handleOnEnter}
//           cleanOnEnter
//           shouldReturn
          
//         /> */}
//     </div>
//   )
// }

// export default EmojiPickers
import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import Feeling from '../../../public/svg/Feeling'
import EmojiPicker from 'emoji-picker-react'
import Outsideclick from '../../function/outsideclick'

function EmojiPickers({text, setText, textRef, bgref, background, setBackground}) {
    const [cursorPosition, setCursorPosition] = useState()
    const [emojiPicker, setEmojiPicker] = useState(false)
    const emojiRef = useRef(null)


    const handleOnEnter = ({emoji}, e)=> {
      const ref = textRef.current
      ref.focus()
  
      const start = text.substring(0, ref.selectionStart);
      const end = text.substring(ref.selectionStart)
      const newText = start + emoji + end
      setText(newText)
      setCursorPosition(start.length + emoji.length)
    }
    
    useEffect(()=>{
      textRef.current.selectionEnd = cursorPosition
    }, [cursorPosition])
  
    Outsideclick(emojiRef, ()=>{
      setEmojiPicker(false)
    })

  return (
    <>
      <div className=' mt-2 mb-2' ref={bgref}>
        <textarea 
          ref={textRef}
          value={text}
          onChange={(e)=>setText(e.target.value)}
          placeholder="What's on your mind.."
          className='w-full h-full bg-transparent outline-none text-white font-opensans pt-3 pb-3'
          maxLength={1000}
          style={{
            paddingTop: `${background ? Math.abs(textRef.current.value.length * 0.08 - 25) : "0"}%`
          }}
        />
      </div>
      <div className='relative'>
        <div className='w-7 h-7 cursor-pointer bg-white text-white border border-line_color rounded-full flex items-center justify-center absolute top-0 right-0' onClick={()=>setEmojiPicker((prev)=>!prev)}>
          <Feeling />
        </div>
        {
          emojiPicker && <div className='absolute -top-[450px] -right-32' ref={emojiRef}>
          <EmojiPicker onEmojiClick={handleOnEnter} theme='dark' emojiStyle="facebook"/>
          </div>
        }
      </div>
    </>
  )
}

export default EmojiPickers