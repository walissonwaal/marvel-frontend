import Image from 'next/image';

Image
const index = ({ children, onClick, type, color, textColor, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`${color} ${textColor} font-inter flex justify-center items-center small-button ${icon ? 'gap-3' : ''}`}
      type={type}
    >
      {children}
      {icon ? (
        <span>
          <Image src={icon} width={13} height={13} />
        </span>
      ) : null
      }
    </button >
  );
}

export default index;