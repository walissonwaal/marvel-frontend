import Image from "next/image";
import Link from "next/link";
import { Divider } from "..";

const index = ({ navItems }) => {
  return (
    <>
      <div className="w-64 h-screen sidebar-shadow">
        <div className='h-[3.75rem] px-6 pt-4'>
          <Image
            className=""
            src="/img/logo-pontua-blue.svg"
            width={104.78}
            height={26.28}
          />
        </div>
        <Divider />
        <div className="w-full px-4 mt-4 mb-6">
          <div className="flex flex-col font-medium gap-2">
            {navItems &&
              navItems.map((item) => (
                <Link className="w-full flex gap-3 p-2 rounded-xl hover:bg-slate-400 duration-150" href={item.path}>
                  <Image
										className=""
										src={item.icon}
										width={20}
										height={20}
									/>
                  {item.name}
                </Link>
              ))}
          </div>
        </div>
        <Divider />
				<div className='w-full px-4 mt-4 mb-6'>
				<Link 
					className="w-full flex gap-3 p-2 rounded-xl hover:bg-slate-400 duration-150" 
					href=''>
					<Image
						className=""
						src='/img/icon-menu-sair.svg'
						width={20}
						height={20}
					/>
					Sair
				</Link>
				</div>
      </div>
    </>
  );
};

export default index;
