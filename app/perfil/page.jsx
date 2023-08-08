import { SideNav, Title } from "@/components";
import navItems from "@/components/SideNav/navItems.json";

const Perfil = () => {

  return (
    <div className="flex">
      <SideNav navItems={navItems} />
      <div className="w-full">
        <div className="pt-[3.75rem] w-full h-full px-6">
          <div className='py-6 flex gap-1'>
            <h1 className='text-2xl tracking-title font-bold text-blue600'>Perfil</h1>
            <span className='text-2xl tracking-title font-bold text-orange500'>/</span>
            <h1 className='text-2xl tracking-title text-gray500 font-light'>A-Bomb</h1>
          </div>

          <div class="bg-white">
    <nav class="flex flex-col sm:flex-row">
        <button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500">
            Tab 1
        </button><button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
            Tab 2
        </button><button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
            Tab 3
        </button><button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
            Tab 4
        </button>
    </nav>
</div>
          
        </div>
      </div>
    </div>
  );
};

export default Perfil;
