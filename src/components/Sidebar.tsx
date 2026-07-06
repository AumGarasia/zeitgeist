import { useState } from 'react'

function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div className="flex bg-white">
            <div
                className="toHome flex h-[100vh] text-white bg-black font-dancing font-bold text-[1.75rem] pt-[1.25rem] duration-350"
                style={{ width: isExpanded ? '4.5rem' : '3.125rem', paddingLeft: isExpanded ? '1.7rem' : '1rem' }}
            >
                Z
            </div>

            <button
                type="button"
                onClick={() => setIsExpanded((prev) => !prev)}
                className={`menu group flex h-full max-h-fit ml-[40px] mt-[1.25rem] font-hanken pt-[0.25rem] duration-500 ${isExpanded ? 'font-normal text-white' : 'font-extralight text-[20px] text-black'}`}
            >
                <div className="mt-[0.65rem]">
                    <svg className="menuIcon" width="30" height="10" viewBox="0 0 30 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line className="transition-all duration-500 group-hover:stroke-[2px]" y1="0.25" x2="15" y2="0.25" stroke={isExpanded ? '#ffffff' : '#161616'} strokeWidth="0.5" />
                        <line className="transition-all duration-500 group-hover:stroke-[2px]" y1="6.25" x2="15" y2="6.25" stroke={isExpanded ? '#ffffff' : '#161616'} strokeWidth="0.5" />
                    </svg>
                </div>
                <span className="ml-2">Menu</span>
            </button>
        </div>
    )
}

export default Sidebar;