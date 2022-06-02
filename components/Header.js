import React from 'react';
import Image from 'next/image';
import { 
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";


function Header() {
    return (
        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className="flex justify-around max-w-6xl mx-5 lg:mx-auto">
                
                {/* Left - Logo */}
                <div className="relative hidden lg:inline-grid w-24 cursor-pointer hover:scale-125 transition-all  duration-150 ease-in-out">
                    <Image 
                        src="https://links.papareact.com/ocw"
                        layout="fill"
                        objectFit='contain'
                        alt='big image'
                    />
                </div>
                <div className="relative lg:hidden flex-shrink-0 w-10 cursor-pointer hover:scale-125 transition-all  duration-150 ease-in-out">
                    <Image 
                        src="https://links.papareact.com/jjm"
                        layout="fill"
                        objectFit='contain'
                        alt='small image'
                    />
                </div>

                {/* Middle - Search Bar */}
                <div className="max-w-xs">
                    <div className="relative mt-1 p-3 rounded-md cursor-pointer hover:scale-125 transition-all  duration-150 ease-in-out">
                        <div className="absolute inset-y-0 pl-3 flex items-center ">
                            <SearchIcon className="h-5 w-5 text-gray-500 "/>
                        </div>
                        <input className="bg-gray-50 block w-full pl-10 sm-text-sm border-gray-300 rounded-md focus:ring-black focus:border-black " type="text" placeholder="Search" />
                    </div>
                </div>
                

                {/* Right - Menu buttons*/}
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon className="navBtn"/>
                    <div className="relative navBtn">
                        <PaperAirplaneIcon className="navBtn rotate-45"/>
                        <div className="absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white" >
                            3
                        </div>
                    </div>
                    
                    <PlusCircleIcon className="navBtn"/>
                    <UserGroupIcon className="navBtn"/>
                    <HeartIcon className="navBtn"/>

                    

                    <img 
                        src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/121256714_1102627486867662_3053136786439458049_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PgMxtBaD-ygAX8Ok8DD&_nc_ht=scontent-sea1-1.xx&oh=00_AT9gSK2RW_ToYyfzTv4IfT1Zeo1QAbBw3w9A3KQwYd2g8w&oe=62BBEC02" 
                        alt="Profile Picture" 
                        className="h-10 rounded-full cursor-pointer hover:scale-125 transition-all  duration-150 ease-in-out"
                    />
                    <MenuIcon className="h-6 sm:hidden cursor-pointer hover:scale-125 transition-all  duration-150 ease-in-out"/>
                    
                </div>

            </div>
            
        </div>
    );
}

export default Header;
