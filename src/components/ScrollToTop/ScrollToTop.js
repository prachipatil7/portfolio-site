import React, { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import './ScrollToTop.css'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false)

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return isVisible ? (
    <div className='scroll-top'>
      <button 
        type='button'
        onClick={scrollToTop} 
        aria-label="Scroll to top"
        className='scroll-top__button'
      >
        <ArrowUpwardIcon fontSize='large' />
      </button>
    </div>
  ) : null
}

export default ScrollToTop
