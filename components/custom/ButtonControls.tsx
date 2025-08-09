import React from 'react'
import { Button } from "@/components/ui/button";
import { Square} from 'lucide-react';


const ButtonControls = () => {
  return (
    <section className='flex gap-4'>
      <Button variant="default" size={'lg'} className='font-bold'>START</Button>
      <Button variant="secondary" size={'lg'}>PAUSE</Button>
      <Button variant="destructive" size={'icon'}>
        <Square size={'icon'} />
      </Button>
    </section>
  )
}

export default ButtonControls