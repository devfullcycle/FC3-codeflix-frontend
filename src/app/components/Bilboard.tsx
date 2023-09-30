import { InformationCircleIcon } from '@heroicons/react/24/outline';

const Billboard: React.FC = () => {
  return (
    <div className='relative h-[56.25vw]'>
      <video
        poster='/banner.png '
        className='h-[56.25vw] w-full object-cover brightness-[60%] transition duration-500'
        autoPlay
        muted
        loop
        src='https://media-video.chip.de/f6876ff40f5a74303c2b874c26eeb219bb08a0e6/6b2e1748805b006443265b0a05385868f4814b01/MEDIA/v0/HD/media.mp4'
      ></video>
      <div className='absolute top-[30%] ml-4 md:top-[40%] md:ml-16'>
        <p className='text-1xl h-full w-[50%] font-bold text-white drop-shadow-xl md:text-5xl lg:text-6xl'>
          MAID
        </p>
        <p className='mt-3 w-[90%] text-[8px] text-white drop-shadow-xl md:mt-8 md:w-[80%] md:text-lg lg:w-[50%]'>
          After fleeing an abusive relationship, a young mother finds a job
          cleaning houses as she fights to provide for her child and build them
          a better future.
        </p>
        <div className='mt-3 flex flex-row items-center gap-3 md:mt-4'>
          {/* <PlayButton movieId={data?.id} /> */}
          <button
            className='
            flex
            w-auto
              flex-row
              items-center
              rounded-md bg-white
              bg-opacity-30 px-2
              py-1
              text-xs font-semibold
              text-white
              transition
              hover:bg-opacity-20
              md:px-4
              md:py-2
              lg:text-lg
            '
          >
            <InformationCircleIcon className='mr-1 w-4 md:w-7' />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};
export default Billboard;
