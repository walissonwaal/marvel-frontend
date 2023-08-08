import Image from 'next/image';

Image
const index = ({ children, onClick, type, color, textColor, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`${color} ${textColor} flex justify-center items-center py-4 rounded-xl large-button ${icon ? 'gap-3' : ''}`}
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