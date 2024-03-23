import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
function Marquee({ imagesurls, direction }) {
    return (
        <div className="flex w-full bg-zinc-900 overflow-hidden">
            <motion.div
                initial={{ x: direction === 'left' ? '0' : '-100%' }}
                animate={{ x: direction === 'left' ? '-100%' : '0' }}
                transition={{ ease: 'linear', duration: 15, repeat: Infinity }}
                className="flex flex-shrink-0 gap-40 py-10 pr-40"
            >
                {imagesurls.map((url, index) => (
                    <img key={index} src={url} className="" />
                ))}
            </motion.div>
            <motion.div
                initial={{ x: direction === 'left' ? '0' : '-100%' }}
                animate={{ x: direction === 'left' ? '-100%' : '0' }}
                transition={{ ease: 'linear', duration: 15, repeat: Infinity }}
                className="flex flex-shrink-0 gap-40 py-10 pr-40"
            >
                {imagesurls.map((url, index) => (
                    <img key={index} src={url} className="" />
                ))}
            </motion.div>
        </div>
    );
}

Marquee.propTypes = {
    imagesurls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Marquee;
