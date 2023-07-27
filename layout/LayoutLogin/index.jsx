import Image from 'next/image';

const index = ({ children }) => {
  return (
    <section className='flex flex-col justify-center h-full bg-blue800 font-epilogue'>
      <div className=' w-full px-28 py-10'>
        <Image src='/img/logo-pontua.svg' width={169} height={50} />
      </div>
      <div className="flex-1 flex justify-around items-start py-10">
        <Image src='/img/background-img.svg' width={614} height={467}></Image>
        <div className="lg:mt-0 lg:flex-shrink-0 w-[380px] h-[433px]">
          <div className='h-full w-full bg-white rounded-3xl mt-5 px-8 py-12'>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;