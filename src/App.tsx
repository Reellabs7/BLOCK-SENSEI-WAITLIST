function App() {
  return (
    <div>
      <nav className='flex justify-center items-center py-10 border-b border-black/30'>
        <div>BlockSensei Waitlist</div>
      </nav>

      <div className="bg-[url('/src/assets/background.png')] bg-cover bg-center w-full h-full">
        <img src='' alt='' />
        <div className='flex flex-col justify-center items-center gap-12 mx-auto py-10 container'>
          <div>
            <div className='flex justify-center pb-2 font-semibold text-2xl md:text-5xl'>
              <span className='flex items-center bg-gradient-to-r from-[#BBE3FF] to-[#0096FF] px-5 py-2 rounded-full font-light text-white -rotate-2 transform'>
                Get Early Access
              </span>{" "}
              To
            </div>
            <div className='flex justify-center font-semibold text-xl md:text-5xl'>
              Learn Web3 The Fun Way.
            </div>
            <p className='text-[#707070] text-center'>
              We are building <span className='text-black'>Blocksensei</span>{" "}
              with you in mind. <br /> A place where learning Web3 feels fun,
              rewarding and beginner friendly.
              <br />
              <br />
              Be part of the first learners shaping this journey.
            </p>
          </div>
          <div className='flex flex-col justify-center w-full max-w-3xl'>
            <form action='http://app.proforms.top/f/pr762a57c' method='POST'>
              <div className='flex items-center bg-[#F4F4F4] mx-auto p-2 rounded-full w-full max-w-3xl'>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Your email address'
                  className='flex-1 bg-transparent px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-l-full outline-none text-sm sm:text-base md:text-lg'
                />
                <button
                  type='submit'
                  className='bg-gradient-to-r from-[#BBE3FF] to-[#0096FF] hover:opacity-90 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-semibold text-white text-sm sm:text-base md:text-lg transition'
                >
                  Submit
                </button>
              </div>
            </form>
            <div className='flex justify-center gap-2 p-6'>
              <img src='/src/assets/users.png' alt='users' />
              <p className='text-[#707070]'>10+ early learners already in.</p>
            </div>
            <div className='flex justify-center'>
              <img src='/src/assets/Young and happy-bro 1.png' alt='' />
            </div>
          </div>
        </div>
      </div>
      <footer className='bg-black text-white'>
        <div className='z-10 relative flex flex-col justify-center items-center gap-5 mx-auto px-6 py-16 max-w-7xl text-center container'>
          <h2 className='mb-4 font-semibold text-3xl md:text-5xl'>
            Got questions? <br /> We've got answers.
          </h2>
          <p className='mb-6 text-lg md:text-xl'>
            Curious about Block Sensei? Follow us on X to stay updated,
            <br /> get answers to your questions, and see sneak peeks of what's
            coming.
          </p>
          <div className='flex sm:flex-row flex-col justify-center gap-4'>
            <a
              href='https://x.com/Blocksenseii'
              target='_blank'
              className='bg-gradient-to-r from-[#BBE3FF] to-[#0096FF] hover:opacity-90 px-8 py-4 rounded-full font-semibold text-white transition'
            >
              Follow us on X
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
