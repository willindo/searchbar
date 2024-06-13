import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import './Embla3.css'
const EmblaCarousel3 = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({stopOnInteraction: false})
  ])
  const [isPlaying, setIsPlaying] = useState(false)



  return (
    <div className="embla em1">
      <div className=" vp1" ref={emblaRef}>
        <div className=" cntnr1">
          {slides.map((item,index) => (
            <div className=" sld1" key={index}>
              <div className=" sldnm1">
                <span>{item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default EmblaCarousel3
