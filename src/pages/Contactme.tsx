import type React from "react"
import { useState } from "react";

const Contactme = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    function submitHandler(e: React.FormEvent) {
        e.preventDefault();
        
        const { name, email, subject, message } = formData;
        const myEmail = "thearjinjoshi1@gmail.com";
        

        const mailBody = `Hello, my name is ${name}.\n\n` +
                         `Message:\n${message}\n\n` +
                         `My Contact Email: ${email}`;

        const mailtoLink = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;
        
        window.location.href = mailtoLink;

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });

    }

    return (
        <div className="flex flex-col bg-transparent max-w-7xl mx-auto px-4">
            <div className="flex flex-col mt-6">
                <div className="flex flex-col gap-5">
                    <h1 className="text-orange-500 text-6xl md:text-8xl tracking-wide font-bold">
                        Contact Me
                    </h1>
                    <h2 className="text-4xl md:text-6xl text-lightNavyBlue leading-tight">
                        Questions, thoughts, or just want to say hello?
                    </h2>
                </div>
            </div>

            <div className="mt-10 bg-lightPinkCream w-full rounded-4xl my-10 shadow-sm">
                <form 
                    onSubmit={submitHandler} 
                    className="flex flex-col justify-center items-stretch rounded-3xl p-6 md:p-10 gap-8"
                >
                    <input 
                        name="name"
                        value={formData.name || ""}
                        onChange={handleChange}
                        className="border-2 text-center border-gray-300 rounded-2xl px-10 py-3 shadow-lg focus:outline-none focus:border-orange-500 transition-colors"  
                        type="text" 
                        placeholder="Enter your name" 
                        required
                    />
                    <input 
                        name="email"
                        value={formData.email || ""}
                        onChange={handleChange}
                        className="border-2 text-center border-slate-300 rounded-2xl px-10 py-3 shadow-lg focus:outline-none focus:border-orange-500 transition-colors" 
                        type="email" 
                        placeholder="Enter your email address" 
                        required
                    />
                    <input 
                        name="subject"
                        value={formData.subject || ""}
                        onChange={handleChange}
                        className="border-2 text-center border-slate-300 rounded-2xl px-10 py-3 shadow-lg focus:outline-none focus:border-orange-500 transition-colors" 
                        type="text" 
                        placeholder="Enter your subject" 
                        required
                    />
                    <textarea 
                        name="message"
                        value={formData.message || ""}
                        onChange={handleChange}
                        className="border-2 text-center border-slate-300 rounded-2xl px-10 py-3 shadow-lg focus:outline-none focus:border-orange-500 transition-colors resize-none" 
                        placeholder="Enter your message" 
                        rows={10}
                        required
                    ></textarea>

                    <button 
                        type="submit"
                        className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white text-lg tracking-wide w-full md:w-50 rounded-xl py-3 shadow-md transition-all self-center md:self-start"
                    > 
                        <p className="text-center">Hire Me</p>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contactme;