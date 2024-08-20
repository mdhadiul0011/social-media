import React, { useRef } from 'react'
import { Media } from '../../../public/svg/Media'
import { CrossIcon } from '../../../public/svg/Cross'

function AddImgVideo({img, setImg, setOpenFolder}) {
    const choosefile = useRef(null)

    const  handleImgUpload = (e)=>{
      let file = Array.from(e.target.files);
      file.forEach((img)=>{
        if(img.type !== "image/jpeg" && img.type !== "image/jpg"  && img.type !== "image/png" && img.type !== "image/webp" && img.type !== "image/gif"){
          console.log('img not found');
        }
        const renderfile = new FileReader();
        renderfile.readAsDataURL(img);
        renderfile.onload = (reanderImg)=>{
          setImg((imgaes)=>[...imgaes, reanderImg.target.result])
        }
      })
    }
    
  return (
    <div>
      <div className='  mt-16 rounded-md border-2 h-[400px] border-line_color p-2'>
      {
        img && img.length ? 
          <div className='relative w-full h-full'>
            <div className='p-2 absolute top-0 left-0' onClick={()=>choosefile.current.click()}>
              <div className='p-3 text-white rounded-md text-center flex items-center justify-between gap-2 cursor-pointer bg-primary_bg'>
                <Media/>
                <p className='font-opensans font-medium text-sm'>Add picture/videos</p>
              </div>
            </div>
                  <div className='absolute top-2 right-2 bg-white w-6 h-6 rounded-full flex justify-center items-center cursor-pointer' onClick={()=>setImg([])}>
                      <CrossIcon/>
                  </div>
                  <div className={`${img.length === 1 ? "w-full h-full  overflow-y-auto" : img.length === 2 ? "w-full h-full overflow-y-auto grid grid-cols-2 gap-1" : img.length === 3 ? "w-full h-full overflow-y-auto grid grid-cols-2 gap-1" : img.length === 4 ? "w-full h-full overflow-y-auto grid grid-cols-2 gap-1" : img.length >= 5 ? "w-full h-full overflow-y-auto grid grid-cols-2 gap-1": "overflow-hidden"}`}>
              
                {img.slice(0, 4).map((item, i)=><img src={item} key={i} className={`w-full h-full object-cover ${img.length === 3 ? "[&:nth-of-type(1)]:row-start-1 [&:nth-of-type(1)]:row-end-3" : img.length  === 4 && "[&:nth-of-type(1)]:row-start-2 [&:nth-of-type(1)]:row-end-3"} `}/>)}
                <div className='absolute bottom-16 right-24'>
                  {
                    img.length >= 5 && <div className='w-16 h-16 bg-primary_bg rounded-full flex justify-center items-center'>
                    <span className='font-opensans font-medium text-base text-white'>+{img.length -4}</span>  
                  </div>
                  }
                </div>
            </div>
          </div>
          : 
            <div className=' w-full h-full cursor-pointer bg-hover_color'>
                <div className='relative'>
                    <div className='absolute top-2 right-2 bg-white w-6 h-6 rounded-full flex justify-center items-center' onClick={()=>setOpenFolder(false)}>
                        <CrossIcon/>
                    </div>
                </div>
                <div className='text-center h-full flex justify-center items-center' onClick={()=>choosefile.current.click()}>
                    <div>
                    <div className='flex justify-center text-white mb-3'>
                        <Media/>
                    </div>
                    <h3 className='font-opensans font-medium text-white text-xl'>Add photos/vedios</h3>
                    <p className='font-opensans font-normal text-primary_bg text-sm'>Or Darag and Drop</p>
                    </div>
                </div>
            </div>
        }
        <input type='file' multiple accept='image/jpeg, image/png, image/jpg, image/webp, image/gif' ref={choosefile} onChange={handleImgUpload} className='hidden'/>
      </div>
    </div>
  )
}

export default AddImgVideo
