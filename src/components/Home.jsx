import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className=" w-full  flex mx-auto ml-12 mt-6">
      <motion.div
        className=" w-3/5 p-6 flex flex-col gap-8"
        initial={{ opacity: 0, translateX: -100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-7xl text-[#4e4feb] leading-[5rem] tracking-wider font-lobster drop-shadow-xl ">
          Resource Rover
        </h1>
        <h2 className="text-4xl text-[#068fff] leading-[4rem] tracking-wider font-merriweather  drop-shadow-xl">
         Empower Yourself  <span className=" text-[]"> with </span> <br />
          Web Development
          <br />
          <span className=" text-[]"> Resources </span>
        </h2>
        <p className="text-lg w-4/5 text-[#000000]">
        Embark on a Journey of Discovery with our Extensive Collection of Web Development Resources, meticulously
        crafted to equip you with the knowledge and tools necessary to thrive.
          <br />
         In the world of web development!
        </p>
      </motion.div>

      <div className="flex items-center w-1/2">
        <img
          className="w-full"
          src="https://img.freepik.com/free-vector/female-designer-working-late-room-flat-illustration-cartoon-student-using-laptop-computer-night-sitting-desk_74855-14019.jpg?size=626&ext=jpg&ga=GA1.2.1734399730.1687284005&semt=ais"
          alt="logo"
        />
      </div>

      
     
      
    </div>
  );
}
