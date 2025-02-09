import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { MdEmail, MdPhone } from "react-icons/md";

const ContactSection = () => {
    const form = useRef(); // Define form reference

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_31dvqtj', 'template_ypjwq43', form.current, {
                publicKey: 'RMzg_ZHOF17MKfFDA',
            })
            .then(
                () => {
                    Swal.fire({
                        title: "Email Sent Successfully.",
                        width: 600,
                        padding: "3em",
                        color: "#716add",
                        background: "#fff url(/images/trees.png)",
                        backdrop: `
                          rgba(0,0,123,0.4)
                          url("/images/nyan-cat.gif")
                          left top
                          no-repeat
                        `
                    });
                },
                (error) => {
                    Swal.fire({
                        title: "Failed to send email!",
                        text: error.text,
                        icon: "error",
                    });
                }
            );
    };

    return (
        <div className='my-32' id='contuct'>
            <div className="text-center">
                <h2 className="text-4xl font-extrabold text-white mb-10">Contact</h2>
            </div>
            <div id='contact' className=' flex justify-center items-center p-4'>
                <div className="grid sm:grid-cols-2 items-start gap-16 mx-auto max-w-7xl text-white">
                    <div>
                        <div className="mt-12">
                            <h2 className=" text-base font-bold">Email</h2>
                            <ul className="mt-4 space-y-5">
                                <li className="flex items-center">
                                    <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <MdEmail size={20} color="#000000" />
                                    </div>
                                    <a href="mailto:dev.adnanmahmud@gmail.com" className="text-white text-sm ml-4">
                                        <small className="block">Mail</small>
                                        <strong>me.adnanmahmud99@gmail.com</strong>
                                    </a>
                                </li>

                                <li className="flex items-center mt-2">
                                    <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <MdPhone size={20} color="#000000" />
                                    </div>
                                    <a href="tel:+8801234567890" className="text-white text-sm ml-4">
                                        <small className="block">Phone</small>
                                        <strong>+8801327228777</strong>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <form ref={form} onSubmit={sendEmail} className="ml-auto space-y-4">
                        <input
                            type='text'
                            name="user_name"
                            placeholder='Name'
                            required
                            className="w-full rounded-md py-3 px-4 bg-[#252734] text-gray-800 text-sm outline-white border focus:bg-transparent"
                        />
                        <input
                            type='email'
                            name="user_email"
                            placeholder='Email'
                            required
                            className="w-full rounded-md py-3 px-4 bg-[#252734] text-gray-800 text-sm outline-white border focus:bg-transparent"
                        />
                        <textarea
                            name="message"
                            placeholder='Message'
                            rows="6"
                            required
                            className="w-full rounded-md px-4 bg-[#252734] text-gray-800 text-sm pt-3 outline-white border focus:bg-transparent"
                        ></textarea>
                        <button
                            type="submit"
                            className="text-white border tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default ContactSection;
