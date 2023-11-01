export default function loading() {
  return (
    <div className='h-screen w-full bg-[#141414] text-white'>
      <div className='h-16 bg-[#333333]'>
        <div className='flex h-full items-center justify-between px-4'>
          <div className='flex items-center space-x-4'>
            <div className='h-8 w-16 bg-[#141414]'></div>
          </div>
          <div className='flex items-center space-x-4'>
            <div className='h-8 w-16 bg-[#4E4E4E]'></div>
            <div className='h-8 w-16 bg-[#4E4E4E]'></div>
            <div className='h-8 w-16 bg-[#4E4E4E]'></div>
            <div className='h-8 w-16 bg-[#4E4E4E]'></div>
          </div>
        </div>
      </div>

      <div className='h-[600px] bg-[#2E2E2E]'></div>

      <div className='m-4'>
        <div className='col-span-4'>
          <div className='mb-2 h-6 w-1/4 bg-[#4E4E4E]'></div>
        </div>
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8'>
          <div className='h-80 rounded-md bg-[#4E4E4E]'></div>
          <div className='h-80 rounded-md bg-[#4E4E4E]'></div>
          <div className='h-80 rounded-md bg-[#4E4E4E]'></div>
          <div className='h-80 rounded-md bg-[#4E4E4E]'></div>
          <div className='h-80 rounded-md bg-[#4E4E4E]'></div>
          <div className='h-80 rounded-md bg-[#4E4E4E]'></div>
          <div className='h-80 rounded-md bg-[#4E4E4E]'></div>
          <div className='h-80 rounded-md bg-[#4E4E4E]'></div>
        </div>
      </div>
    </div>
  );
}
