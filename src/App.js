import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronRight, Star, CheckCircle, 
  Linkedin, Facebook, Twitter, Mail, Phone, ExternalLink 
} from 'lucide-react';

const courses = [
  {
    title: "ASP.NET Core 7.0",
    price: "₹6000",
    originalPrice: "₹9000",
    description: "Master modern web development with ASP.NET Core. Learn middleware, MVC, and advanced topics.",
    tags: ["Web API", "MVC", "Entity Framework"],
    color: "bg-blue-600"
  },
  {
    title: ".NET Combo Package",
    price: "₹13000",
    originalPrice: "₹15000",
    description: "The ultimate full-stack package: C# 10.0, ASP.NET Core 7.0, SQL Server 2022, and GitHub.",
    tags: ["Best Value", "Full Stack", "Job Ready"],
    color: "bg-purple-600"
  },
  {
    title: "SQL Server 2022",
    price: "₹4000",
    originalPrice: "₹7000",
    description: "Deep dive into database management. Learn T-SQL, performance tuning, and database administration.",
    tags: ["Database", "T-SQL", "Optimization"],
    color: "bg-orange-500"
  },
  {
    title: "C# 10.0 Masterclass",
    price: "₹5000",
    originalPrice: "₹9000",
    description: "Build a strong foundation in C#. Covers language fundamentals, OOPS, and new C# 10 features.",
    tags: ["Programming", "OOPS", "Backend"],
    color: "bg-emerald-600"
  }
];

const features = [
  { title: "Experiential Learning", desc: "Learn by doing with our hands-on approach." },
  { title: "Realtime Projects", desc: "Work on live projects to build your portfolio." },
  { title: "Expert Guidance", desc: "13+ years experience in top MNCs." },
  { title: "Accredited Courses", desc: "Industry recognized curriculum." }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">D</div>
          <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>DotNet<span className="text-blue-500">Gurukul</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {['Home', 'ASP.NET Core', 'C#', 'SQL Server', 'Projects'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className={`font-medium hover:text-blue-500 transition ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>
              {item}
            </a>
          ))}
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-600/30">
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-500" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} color={isScrolled ? 'black' : 'white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg border-t">
          <div className="flex flex-col p-6 space-y-4">
            {['Home', 'ASP.NET Core', 'C#', 'SQL Server', 'Projects', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-gray-700 font-medium hover:text-blue-600">
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-50"></div>
    
    <div className="container mx-auto px-6 relative z-10 text-center">
      <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6 border border-blue-500/20">
        Launch Your IT Career Today
      </span>
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
        Master .NET Technologies <br /> with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Industry Experts</span>
      </h1>
      <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
        Comprehensive training in ASP.NET Core, C#, and SQL Server. Get real-time project experience and 1-on-1 mentorship.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2">
          Explore Courses <ChevronRight size={20} />
        </button>
        <button className="px-8 py-4 bg-slate-800 text-white rounded-xl font-bold text-lg hover:bg-slate-700 transition border border-slate-700 flex items-center justify-center gap-2">
          View Syllabus <ExternalLink size={18} />
        </button>
      </div>
    </div>
  </div>
);

const Stats = () => (
  <div className="bg-slate-50 py-12 -mt-10 relative z-20">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((feat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <CheckCircle size={24} />
            </div>
            <h3 className="font-bold text-gray-800 mb-1">{feat.title}</h3>
            <p className="text-gray-500 text-sm">{feat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CoursesSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Learning Tracks</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Choose the path that fits your career goals. All courses include life-time access and certification.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses.map((course, idx) => (
          <div key={idx} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className={`h-2 ${course.color}`}></div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-4">
                {course.tags.map(tag => (
                  <span key={tag} className="text-xs font-semibold px-2 py-1 bg-gray-50 text-gray-600 rounded-md border border-gray-200">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">{course.title}</h3>
              <p className="text-gray-500 text-sm mb-6 flex-1">{course.description}</p>
              
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                <span className="text-sm text-gray-400 line-through">{course.originalPrice}</span>
              </div>
              
              <button className="w-full py-3 rounded-lg border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TutorSection = () => (
  <section className="py-20 bg-slate-50">
    <div className="container mx-auto px-6">
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/3 relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 p-1">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Praveen&backgroundColor=b6e3f4" 
              alt="Praveen Kumar M" 
              className="w-full h-full object-cover rounded-xl bg-white"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center gap-1 text-yellow-500 font-bold">
              <Star fill="currentColor" size={16}/> 4.9/5
            </div>
            <div className="text-xs text-gray-500 font-medium">Student Rating</div>
          </div>
        </div>
        
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Meet Your Mentor</h2>
          <h3 className="text-xl text-blue-600 font-semibold mb-6">Praveen Kumar M</h3>
          
          <div className="space-y-4 text-gray-600 mb-8">
            <p>
              Hello! I'm a passionate .NET architect dedicated to helping aspiring developers excel. 
              With <strong>13 years of hands-on experience</strong> in top MNCs like Accenture, Capgemini, 
              and Tech Mahindra, I bring real-world industry knowledge to the classroom.
            </p>
            <p>
              My aim is to provide comprehensive understanding of the .NET ecosystem, bridging the gap 
              between academic theory and professional application.
            </p>
          </div>

          <div className="flex gap-4">
             <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium text-sm">
                <CheckCircle size={16}/> Microsoft Certified
             </div>
             <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-lg font-medium text-sm">
                <CheckCircle size={16}/> 13+ Years Exp
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-16">
    <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <h3 className="text-2xl font-bold text-white mb-4">DotNet Gurukul</h3>
        <p className="text-gray-400 mb-6 max-w-sm">
          Empowering developers with cutting-edge .NET skills. Join our community and build the future of tech.
        </p>
        <div className="flex gap-4">
          {[Facebook, Twitter, Linkedin, Mail].map((Icon, i) => (
            <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
        <ul className="space-y-3">
          {['Home', 'About Us', 'Courses', 'Success Stories', 'Contact'].map(item => (
            <li key={item}><a href="#" className="hover:text-blue-400 transition">{item}</a></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-bold text-white mb-6">Contact</h4>
        <ul className="space-y-4">
          <li className="flex items-center gap-3">
            <Phone size={18} className="text-blue-500" />
            <span>+91 9000366774</span>
          </li>
          <li className="flex items-center gap-3">
            <Mail size={18} className="text-blue-500" />
            <span>contactdotnetgurukul@gmail.com</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
      &copy; 2026 Vivekam Information Technologies. All Rights Reserved.
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      <Hero />
      <Stats />
      <CoursesSection />
      <TutorSection />
      <Footer />
    </div>
  );
}

export default App;