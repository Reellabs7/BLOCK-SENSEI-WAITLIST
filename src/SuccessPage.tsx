// SuccessPage.jsx
function SuccessPage() {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <nav className='flex justify-center items-center py-10 border-b border-black/30'>
        <div className='font-medium text-lg'>BlockSensei Waitlist</div>
      </nav>

      <div className='flex flex-col justify-center items-center px-4 py-20'>
        <h1 className='mb-6 font-bold text-3xl md:text-4xl text-center'>
          Badge Unlocked: Early Explorer.
        </h1>

        <p className='mb-2 max-w-md text-gray-600 text-center'>
          Congratulations John! You're among the first learners
        </p>
        <p className='mb-8 max-w-md text-gray-600 text-center'>
          shaping Block Sensei. Your journey begins here.
        </p>

        <p className='mb-8 text-gray-700 text-center'>
          Share your badge with friends to invite them.
        </p>

        <div className='flex sm:flex-row flex-col gap-4'>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: "BlockSensei - Learn Web3 The Fun Way",
                  text: "I just joined BlockSensei waitlist! Join me in learning Web3 the fun way.",
                  url: window.location.origin,
                });
              } else {
                alert("Share link copied to clipboard!");
              }
            }}
            className='bg-gradient-to-r from-sky-300 to-blue-500 hover:opacity-90 hover:shadow-lg px-8 py-4 rounded-full font-medium text-white transition-all'
          >
            Share
          </button>

          <a
            href='https://x.com/Blocksenseii'
            target='_blank'
            rel='noopener noreferrer'
            className='flex justify-center items-center gap-2 hover:bg-gray-50 px-8 py-4 border-2 border-gray-300 rounded-full font-medium text-gray-700 transition-all'
          >
            Follow us on
            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
