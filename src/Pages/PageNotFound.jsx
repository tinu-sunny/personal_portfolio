import { Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <>
     <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark font-display">
      
      {/* MAIN CONTENT */}
      <main className="flex flex-1 items-center justify-center py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-xl w-full mx-auto text-center flex flex-col items-center">

          <span className="text-6xl md:text-8xl font-black text-primary/20 dark:text-primary/30">
            404
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-text-light dark:text-text-dark mt-4">
           😕 Oops! This page doesn’t exist.
          </h1>

          <p className="mt-4 text-base text-text-muted-light dark:text-text-muted-dark">
          It looks like you’re lost. Let’s get you back on track.
          </p>

         
<div className='mt-5'>
   <Link to={'/'}> <Button>Go Home</Button></Link>
</div>

        

        </div>
      </main>
    </div>
    </>
  )
}

export default PageNotFound