'use client'
import { useState } from 'react'
import Stepper, { Step } from '@/components/stepper/Stepper'

export default function MyStepper() {
  const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [desc, setDesc] = useState('')

  return (
    <Stepper
      initialStep={1}
      onStepChange={(step) => console.log(step)}
      onFinalStepCompleted={() => console.log("All steps completed!")}
      backButtonText="Previous"
      nextButtonText="Next"
    >
      <Step>
        <h2 className="text-gray-900" >Anything we could help?</h2>
        <p className="text-gray-800" >fell free to ask</p>
      </Step>
      <Step>
        <h2 className="text-gray-900">Tell us who you are</h2>
        <img
          style={{
            height: '100px',
            width: '100%',
            objectFit: 'cover',
            objectPosition: 'center -70px',
            borderRadius: '15px',
            marginTop: '1em'
          }}
          src="https://www.purrfectcatgifts.co.uk/cdn/shop/collections/Funny_Cat_Cards_640x640.png?v=1663150894"
        />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name?"
          className="border px-2 py-1 mt-2 rounded text-gray-500"
        />
        <p className="text-gray-800 align-center">&gt;_&lt;</p>
      </Step>
      <Step>
        <h2 className="text-gray-900">So.. What is it about?</h2>
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Your name?"
          className="border px-2 py-1 mt-2 rounded text-gray-500"
        />
      </Step>
      <Step>
        <h2 className="text-gray-900">How we contact you</h2>
        <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email?"
        type="email"
        className="border px-3 py-2 mt-4 rounded w-full text-gray-500"
        />
        <p className="text-gray-800">Wait for our response, {name || 'homie'}!</p>
      </Step>
    </Stepper>
  )
}
