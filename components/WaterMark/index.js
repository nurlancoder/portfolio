import React, { useEffect } from 'react'

const consoleMyName = () => {
    console.log(`
  Designed and Developed By Nurlan Mammadli
  Portfolio Website - Frontend Developer
  © 2025 Nurlan Mammadli. All Rights Reserved.
  `)
  }

const WaterMark = () => {
    useEffect(consoleMyName, [])
    return <></>
}

export default React.memo(WaterMark)
