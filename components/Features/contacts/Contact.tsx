import { Picture } from "@/components/Common/Picture";

export function Contacts() {
    return (


        <section className="min-h-screen flex items-center justify-center px-6 gap-25 pt-24">
            <Picture />
            <div className="max-w-lg w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
                <h2 className="text-3xl font-bold mb-6 text-center text-foreground">Get In Touch</h2>
                <form className="space-y-6">
                    <div>   
                        <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Name</label>
                        <input
                            type="text"
                            id="name"   
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:focus:ring-indigo-400 dark:focus:border-indigo-400"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>   
                        <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
                        <input
                            type="email"
                            id="email"   
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:focus:ring-indigo-400 dark:focus:border-indigo-400"
                            placeholder="
Your Email"
                        />
                    </div>
                    <div>   
                        <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
                        <textarea                            id="message"   
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:focus:ring-indigo-400 dark:focus:border-indigo-400"
                            placeholder="Your Message"
                            rows={5}
                        />
                    </div>  
                    <div className="text-center">
                        <button
                            type="submit"
                            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                        >   
                            Send Message
                        </button>
                    </div>      
                </form>
            </div>
        </section>
    );
}