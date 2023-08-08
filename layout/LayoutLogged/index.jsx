import Image from 'next/image';

const index = ({ children }) => {
  return (
    <section className='w-full h-full flex justify-center items-center md:justify-start bg-blue800 font-epilogue'>
        <div className='z-40 absolute top-0 p-5 md:px-20 md:pt-10'>
          <Image src='/img/logo-pontua.svg' width={169} height={50} />
        </div>
        {children}
      </section>
  );
}

export default index;