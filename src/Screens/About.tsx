function About() {
    return (
        <div 
            className="h-[100vh] w-[100vw] pl-[21.09vw] pr-[18.49vw]
            pt-[9.259vh] pb-[9.259vh] flex grid grid-cols-[28.65vw_28.38vw] gap-x-[4.167vw]"
        >
            <div>
                <h1 
                    className="font-bricolage font-normal text-[18.52vh] tracking-[-4%]"
                >
                    About
                </h1>

                <p 
                    className="font-bricolage font-extrabold text-[3.7vh] pb-[20px]"
                >
                    "A project about everything at once."
                </p>

                <p className="font-hanken font-light text-[2.22vh] pb-[20px]">
                    Zeitgeist is a personal project. It exists because
                    two obsessions — analog synthesizers and 
                    editorial design — kept circling each other 
                    without ever meeting, and at some point it seemed worth
                    building the place where they could.
                </p>

                <img src="images/about1.png" />                
            </div>


            <div className="pt-[1.852vh]">
                <p className="font-hanken font-light text-[2.22vh] pb-[1.852vh]">
                    The content is about music history. The real
                    subject is layout. How whitespace holds meaning. 
                    How a typeface can carry a decade's worth of 
                    feeling. How an image and a headline, placed 
                    correctly relative to each other, can do the work
                    of three paragraphs. These are the questions 
                    Zeitgeist was built to ask.

                    <br/><br/>

                    The reference point throughout was <a href="https://pasticceriaverona.it/" 
                    target="blank" className="text-red font-bold cursor-none">Pasticceria 
                    Adami</a> — a website about pastries that somehow 
                    reads like philosophy. The aspiration was something 
                    similar: a site about synthesizers that reads like a 
                    coffee table book left open on a good page.

                    <br/><br/>

                    This is also, honestly, a portfolio piece. An attempt 
                    to demonstrate that frontend development can be
                    a design discipline rather than a production one
                    — that the gap between what you can imagine and 
                    what you can build is worth closing, and that 
                    closing it is the work.
                </p>

                <p 
                    className="font-bricolage font-extrabold text-[3.7vh]"
                >
                    "The machines got smaller. The ambition didn't."
                </p>
            </div>
        </div>
    )
}

export default About;