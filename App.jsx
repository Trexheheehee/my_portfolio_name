import { useState } from 'react'
import hi from './assets/professional_photo.jpg'
import certificateImg from './assets/certificate.jpg' // Add this import

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="min-h-screen relative bg-gradient-to-r from-blue-900 to-blue-700">
        {/* Professional Photo */}
        <div className="absolute top-8 left-8 md:top-12 md:left-12">
          <img 
            src={hi} 
            alt="Profile"
            className="w-32 md:w-48 h-32 md:h-48 object-cover rounded-lg border-4 border-white shadow-2xl"
          />
        </div>

        <div className="container mx-auto px-6 h-screen flex flex-col justify-center items-end">
          <div className="max-w-2xl text-right">
            <h1 className="text-5xl font-bold text-white mb-4">Kumar</h1>
            <p className="text-2xl text-blue-100">Full Stack Developer</p>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About Me</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            I'm a passionate developer with experience in building web applications.
            I love creating elegant solutions to complex problems and learning new technologies.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">My Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Frontend</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">React</li>
                <li className="text-gray-600">JavaScript</li>
                <li className="text-gray-600">HTML/CSS</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 hover:transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Backend</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">Java</li>
                <li className="text-gray-600">Python</li>
                <li className="text-gray-600">SQL</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 hover:transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Tools</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">Git</li>
                <li className="text-gray-600">Docker</li>
                <li className="text-gray-600">VS Code</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Certificates</h2>
          
          {/* Full Certificate Display */}
          <div className="mb-16">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
              <img 
                src={certificateImg} 
                alt="Web Development Certificate" 
                className="w-full h-[400px] object-contain bg-gray-50"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Web Development Certification</h3>
                <div className="flex flex-wrap gap-4 items-center mb-4">
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">Udemy</span>
                  <span className="text-gray-600">Completed: December 2023</span>
                  <span className="text-gray-600">Certificate ID: UC-123456</span>
                </div>
                <p className="text-gray-700 mb-4">
                  This certification validates expertise in full-stack web development, including frontend technologies,
                  backend development, and database management.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">React.js</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm">MongoDB</span>
                  </div>
                  <a 
                    href="#" 
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Verify Certificate
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Certificate List */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow duration-300">
              <img 
                src={certificateImg} 
                alt="Certificate Thumbnail" 
                className="w-full h-32 object-cover rounded mb-4"
              />
              <h4 className="font-semibold text-gray-800">Web Development</h4>
              <p className="text-sm text-gray-600">Udemy</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow duration-300">
              <img 
                src={certificateImg} 
                alt="Certificate Thumbnail" 
                className="w-full h-32 object-cover rounded mb-4"
              />
              <h4 className="font-semibold text-gray-800">JavaScript Advanced</h4>
              <p className="text-sm text-gray-600">FreeCodeCamp</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow duration-300">
              <img 
                src={certificateImg} 
                alt="Certificate Thumbnail" 
                className="w-full h-32 object-cover rounded mb-4"
              />
              <h4 className="font-semibold text-gray-800">React.js Mastery</h4>
              <p className="text-sm text-gray-600">Coursera</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Me</h2>
          <div className="flex justify-center space-x-6">
            <a href="mailto:john@example.com" 
               className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Email
            </a>
            <a href="https://github.com" 
               className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-300">
              GitHub
            </a>
            <a href="https://linkedin.com" 
               className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App