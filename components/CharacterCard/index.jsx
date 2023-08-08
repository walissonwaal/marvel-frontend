import Image from 'next/image';
import Link from 'next/link';

const CharacterCard = ({ character }) => {
  return (
        <Link href={`character/${character.id}`} >
    <div className='bg-gray100 p-4 flex gap-4'>

      <div className='min-w-[83px] max-w-[83px] h-[119px]'>
        <Image
          className='h-full w-full'
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
          width={83}
          height={119}
        />
      </div>

      <div className='font-epilogue md:text-sm'>
        <h2 className=' font-bold tracking-tightest mb-2'>{character.name}</h2>
        <div className='md:text-xs tracking-paragraph font-light text-black'>
          {character.description.length > 60 ? (
              character.description.slice(0, 60) + '...'
              ) : character.description}
        </div>
      </div>
    </div>
              </Link>
  );
};

export default CharacterCard;
