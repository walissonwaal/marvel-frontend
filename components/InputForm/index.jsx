import Image from 'next/image';

const index = ({ placeholder, type, name, id, img }) => {
  return (
    <div className='relative rounded-md border border-gray300 input-with-icon'>
      <input
        className='w-full h-full p-4 font-bold text-lg text-blue600 input-border bg-transparent rounded-xl focus:outline-none'
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
      />
      {img ? (
        <div className='input-icon'>
          <Image src={img} width={16} height={16} />
        </div>
      ) : null}
    </div>
  );
}

export default index;