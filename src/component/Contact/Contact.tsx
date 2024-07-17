import { FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="Contact" className="h-95 flex justify-center items-center text-white">
      <div className="w-40 flex flex-col gap-6">
        <h2 className="text-2xl text-white font-bold border-b-4 self-center border-purple-400 w-fit">Contact</h2>
        <div className="flex justify-between ">
          <div>
            <h2 className="text-xl font-bold">Social Media</h2>
            <div className="flex">
              <FaInstagram className=""/>
              <p>i</p>
              <p>i</p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold">Details</h2>
          </div>
          <div>
            <h2 className="text-xl font-bold">Leave a message</h2>
          </div>
        </div>
      </div>
    </section>
  )
}
