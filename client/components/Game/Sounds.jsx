import React, { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addAudio, resetAudio } from "../../actions/audio"
import { utilSounds as utilAudios } from "../../utils/sounds"

const Sounds = () => {
  const dispatch = useDispatch()
  let audios = useRef()
  const audioToPlay = useSelector(state => state.audio)
  useEffect(() => {
    let newAudios = {}
    for (let audio of utilAudios) {
      let newAudio = new Audio('/audio/' + audio.name + audio.file)
      newAudio.loop = audio.loop
      newAudios = { ...newAudios, [audio.name]: newAudio }
      dispatch(addAudio(audio.name))
    }
    audios.current = newAudios

  }, [])

  useEffect(() => {
    return () => {
      for (let audio of Object.keys(audios.current)) {
        audios.current[audio].pause()
      }
    }
  }, [])

  useEffect(() => {
    for (let audio of Object.keys(audioToPlay)) {
      if (audioToPlay[audio] === 'play') {
        audios.current[audio].load()
        audios.current[audio].play()
        dispatch(resetAudio(audio))
      }
    }

  }, [audioToPlay])

  return (
    <div className='sounds' />
  )
}

export default Sounds
