function Sidebar() {
    return(
        <div className="flex bg-white">
            <div className="toHome flexbox h-[100vh] w-[3.125rem] text-white bg-black \
            font-dancing font-bold text-[1.75rem] pl-[1rem] pt-[1.25rem] hover:w-[4.5rem] \
            hover:pl-[1.7rem] duration-350">
                Z
            </div>

            <div className="menu group flex h-full max-h-fit ml-[40px] mt-[1.25rem] \
            font-hanken font-extralight text-[20px] pt-[0.25rem] hover:font-normal duration-500">
                <div className="mt-[0.65rem]">
                    <svg className="menuIcon" width="30" height="10" viewBox="0 0 30 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line className="transition-all duration-500 group-hover:stroke-[2px]" y1="0.25" x2="15" y2="0.25" stroke="#161616" strokeWidth="0.5"/>
                        <line className="transition-all duration-500 group-hover:stroke-[2px]" y1="6.25" x2="15" y2="6.25" stroke="#161616" strokeWidth="0.5"/>
                    </svg>
                </div>
                Menu
            </div>
        </div>
    );
}

export default Sidebar;