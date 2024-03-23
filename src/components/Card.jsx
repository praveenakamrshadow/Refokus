import { motion } from 'framer-motion';
import { IoIosArrowRoundForward } from 'react-icons/io';

function Card({ width, start, para, hover = 'false' }) {
    return (
        <motion.div
            whileHover={{
                backgroundColor: hover === 'true' && '#7443ff',
                padding: '25px',
            }}
            className={` bg-zinc-800 p-5 rounded-xl hover:${hover} ${width} min-h-[30rem] flex flex-col justify-between`}
        >
            <div className="w-full">
                <div className="w-full flex justify-between items-center">
                    <h3>Up Next: Culture</h3>
                    <IoIosArrowRoundForward />
                </div>
                <h1 className="text-3xl font-medium mt-5">
                    let&apos;s get to it, <br /> together.
                </h1>
            </div>
            <div className="down w-full">
                {start && (
                    <>
                        <h1 className="text-6xl font-semibold tracking-tight leading-none">
                            Start a Project
                        </h1>
                        <button className="rounded-full py-2 mt-5 px-5 border-[1px] border-zinc-50">
                            Contact Us
                        </button>
                    </>
                )}
                {para && (
                    <p className="text-sm text-zinc-400 font-medium">
                        Explore what drives our team.
                    </p>
                )}
            </div>
        </motion.div>
    );
}

export default Card;
