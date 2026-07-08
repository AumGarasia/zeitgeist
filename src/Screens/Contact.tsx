import { useState } from "react";
import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

function Contact() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const _handleHoverLink = (el: React.MouseEvent<HTMLAnchorElement>) => {
        const target = el.currentTarget;
        if(!target) return;
        const originalText = target.textContent || "";

        gsap.to(target, {
            duration: 0.35,
            scrambleText: {
                text: originalText,
                chars: chars,
                revealDelay: 0.2,
            }
        });
    };

    const _handleHoverSendButton = () => {
        gsap.to("#submit", {
            duration: 0.35,
            scrambleText: {
                text: "Send",
                chars: chars,
                revealDelay: 0.2,
            }
        });
    };

    const _handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Barebone Form Structure
        console.log("Form Submitted:", formData);
    };

    const _handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div 
            className="w-[100vw] h-[100vh] grid grid-cols-[33.75vw_50.1vw]
            gap-x-[5.2vw] pl-[6.7vw] pt-[10.18vh] pb-[9.26vh] pr-[7.4vw]"
        >
            {/* LEFT COLUMN */}
            <div className="grid grid-rows-[44.45vh_30.56vh] gap-y-[1.85vh]">
                <h2 className="leading-none font-bricolage font-normal text-[12.5rem] tracking-[-4%]">
                    Get in touch.
                </h2>

                <div>
                    <p className="font-hanken leading-none font-extralight text-[1.5rem]">
                        I'm interested in work at the intersection of design and code — interfaces that feel considered, 
                        tools that respect the people who use them, and the small details that make a difference. 
                        <br/><br/>
                        Email is the fastest way to reach me.
                        <br/>
                        GitHub shows the work.
                    </p>
                    <br/>
                    <div className="font-bricolage font-normal text-[2.5rem] tracking-[-4%]">
                        Mail: <a onMouseEnter={_handleHoverLink} href="mailto:aumgarasia@gmail.com" target="_blank" 
                rel="noopener noreferrer" className="cursor-none hover:opacity-70 transition-opacity duration-500">aumgarasia@gmail.com</a>
                    </div>
                    <div className="font-bricolage font-normal text-[2.5rem] tracking-[-4%]">
                        GitHub: <a onMouseEnter={_handleHoverLink} href="https://www.github.com/AumGarasia" target="_blank" 
                rel="noopener noreferrer" className="cursor-none hover:opacity-70 transition-opacity duration-500">AumGarasia</a>
                    </div>
                </div>
            </div>


            {/* RIGHT COLUMN - CONTACT FORM */}
            <form
                onSubmit={_handleSubmit}
                className="relative mt-[5.56vh] flex flex-col justify-between"
            >
                <div>
                    <label className="flex mb-[3.7vh] font-hanken font-light text-[1.5rem] pb-[1.85vh] border-b-[1px] cursor-none">
                        Name / Company
                        <input 
                            name="name"
                            value={formData.name}
                            onChange={_handleChange}
                            className="flex-1 font-extralight bg-transparent focus:outline-none ml-[2.6vw] cursor-none" 
                            type="text" 
                            placeholder="John Doe from ACME Co." 
                            required 
                        />
                    </label>
                    
                    <label className="flex mb-[3.7vh] font-hanken font-light text-[1.5rem] pb-[1.85vh] border-b-[1px] cursor-none">
                        Email
                        <input 
                            name="email"
                            value={formData.email}
                            onChange={_handleChange}
                            className="flex-1 font-extralight bg-transparent focus:outline-none ml-[2.6vw] cursor-none" 
                            type="email" 
                            placeholder="johndoe@email.com" 
                            required 
                        />
                    </label>

                    <label className="flex mb-[3.7vh] font-hanken font-light text-[1.5rem] pb-[1.85vh] border-b-[1px] cursor-none">
                        Subject
                        <input 
                            name="subject"
                            value={formData.subject}
                            onChange={_handleChange}
                            className="flex-1 font-extralight bg-transparent focus:outline-none ml-[2.6vw] cursor-none" 
                            type="text" 
                            placeholder="Can we connect?" 
                            required 
                        />
                    </label>

                    <label className="flex mb-[3.7vh] font-hanken font-light text-[1.5rem] pb-[1.85vh] border-b-[1px] cursor-none">
                        Message
                        <textarea 
                            name="message"
                            value={formData.message}
                            onChange={_handleChange}
                            className="flex-1 font-extralight bg-transparent focus:outline-none ml-[2.6vw] cursor-none resize-none h-[2.5rem] overflow-hidden" 
                            placeholder="Hi! I liked your work!" 
                            required 
                        />
                    </label>
                </div>


                <button 
                    type="submit" id="submit"
                    onMouseEnter={_handleHoverSendButton}
                    className="absolute bottom-0 right-0 border-none bg-transparent outline-none p-0 \
                    leading-none font-bricolage font-normal text-[12.5rem] tracking-[-4%] \
                    cursor-none text-black hover:opacity-70 transition-opacity duration-500"
                >
                    Send
                </button>
            </form>
        </div>
    );
}

export default Contact;