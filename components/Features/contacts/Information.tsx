import { Mail, Phone, MapPin, User } from "lucide-react";

export function Information() { 
    return (
        <div className="max-w-lg w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6 text-center text-foreground">Contact Information</h2>
            
            <div className="grid grid-cols-2 gap-4">
                {/* Name */}
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-full shrink-0">
                        <User className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">Name</p>
                        <p className="text-sm font-medium text-foreground truncate">Your Full Name</p>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-full shrink-0">
                        <Phone className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">Phone Number</p>
                        <a href="tel:+639123456789" className="text-sm font-medium text-foreground hover:text-indigo-500 transition-colors truncate block">
                            +63 912 345 6789
                        </a>
                    </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-full shrink-0">
                        <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">Email Address</p>
                        <a href="mailto:hello@example.com" className="text-sm font-medium text-foreground hover:text-indigo-500 transition-colors truncate block">
                            hello@example.com
                        </a>
                    </div>
                </div>

                {/* Home Address */}
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-full shrink-0">
                        <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">Home Address</p>
                        <p className="text-sm font-medium text-foreground truncate">Cebu City, Philippines</p>
                    </div>
                </div>

                {/* Facebook */}
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-full shrink-0">
                        <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                        </svg>
                    </div>
                    <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">Facebook Profile</p>
                        <a href="https://facebook.com/yourusername" target="_blank" className="text-sm font-medium text-foreground hover:text-indigo-500 transition-colors truncate block">
                            facebook.com/yourusername
                        </a>
                    </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-full shrink-0">
                        <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </div>
                    <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">LinkedIn Profile</p>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" className="text-sm font-medium text-foreground hover:text-indigo-500 transition-colors truncate block">
                            linkedin.com/in/yourusername
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}