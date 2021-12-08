import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addAudio, resetAudio } from "../../actions/audio"
import { utilSounds as utilAudios } from "../../utils/sounds"

const Sounds = () => {
  const dispatch = useDispatch()
  const [audios, setAudios] = useState({})
  const audioToPlay = useSelector(state => state.audio)
  useEffect(() => {
    for (let audio of utilAudios) {
      setAudios({ ...audios, [audio.name]: new Audio('/audio/' + audio.name + audio.file) })
      dispatch(addAudio(audio.name))
    }
  }, [])

  useEffect(() => {
    for (let audio of Object.keys(audioToPlay)) {
      if (audioToPlay[audio]) {
        audios[audio].load()
        audios[audio].play()
        dispatch(resetAudio(audio))
      }
    }
  }, [audioToPlay])

  return (
    <div className='sounds' />
  )
}

export default Sounds
