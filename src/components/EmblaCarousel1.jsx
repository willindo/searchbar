import React, { useCallback, useEffect, useRef } from 'react'
import gsap from 'gsap'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCAB'
import { DotButton, useDotButton } from './EmblaCDB'
import './Embla1.css'
const TWEEN_FACTOR_BASE = 0.2

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const tweenFactor = useRef(0)
  const tweenNodes = useRef([])
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
  useDotButton(emblaApi)
  
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)
  
  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__parallax__layer')
    })
  }, [])
  
  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])
  
  const tweenParallax = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()
    const slidesInView = emblaApi.slidesInView()
    const isScrollEvent = eventName === 'scroll'
    
    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress
      const slidesInSnap = engine.slideRegistry[snapIndex]
      
      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return
        
        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target()
            
            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target)
              
              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress)
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress)
              }
            }
          })
        }
        
        // const tweenNodes = useRef([])
        const translate = diffToTarget * (-1 * tweenFactor.current) * 100
        const tweenNode = tweenNodes.current[slideIndex]
      //  if (tweenNode)
      //   style.transform = `translateX(${translate}%)`
        
      })
    })
  }, [])
  
  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenParallax(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenParallax)
      .on('scroll', tweenParallax)
      .on('slideFocus', tweenParallax)

  }, [emblaApi, tweenParallax])

  return (
    <div className="embla1">
      <div className="embla__viewport1" ref={emblaRef}>
        <div className="embla__container1">
          {slides.map((index) => (
            <div className="embla__slide1" key={index}>
              <div className="embla__parallax1">
                <div className="embla__parallax__layer1">
                  <img
                    className="embla__slide__img embla__parallax__img"
                    src={`https://picsum.photos/600/350?v=${index}`}
                    alt="Your alt text"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
