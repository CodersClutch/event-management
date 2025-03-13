import React from 'react'
import { BookOpenIcon, HeartIcon, AcademicCapIcon, CakeIcon, UserGroupIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const ParentingTipsPage = () => {
  const categories = [
    { name: 'Newborn Care', icon: HeartIcon, tips: 25 },
    { name: 'Education', icon: AcademicCapIcon, tips: 18 },
    { name: 'Nutrition', icon: CakeIcon, tips: 32 },
    { name: 'Family Bonding', icon: UserGroupIcon, tips: 15 },
  ]

  const featuredArticles = [
    {
      title: '10 Ways to Strengthen Family Bonds',
      excerpt: 'Discover simple daily rituals that bring your family closer together...',
      readTime: '5 min',
      imageUrl: 'https://img.freepik.com/free-vector/social-media-cover-template-international-day-families_23-2150310693.jpg?t=st=1741811594~exp=1741815194~hmac=30656058335868369a3d34fb96100f94084faec0ae4f06767115bddcfad36c6d&w=2000' // Image for this article
    },
    {
      title: 'Healthy Meal Planning for Kids',
      excerpt: 'Nutritionist-approved recipes that kids will actually eat...',
      readTime: '8 min',
      imageUrl: 'https://img.freepik.com/free-photo/composition-delicious-thanksgiving-day-dinner_23-2149129477.jpg?t=st=1741811710~exp=1741815310~hmac=edc6f86cf59e2c213f0e4fc0ecee874e4e6418e3f8196555267345c71e0dad1a&w=1380'
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with new colors */}
      <header className="bg-gradient-to-r from-[#FEBE20]/20 to-[#E546E3]/20  pb-16 px-4">
        <div className="max-w-6xl mx-auto mt-[10%] text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Parenting Wisdom,<br />
            <span className="text-[#E546E3]">Made Simple</span>
          </h1>
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search parenting tips..."
              className="w-full px-6 py-4 rounded-full border-0 shadow-lg focus:ring-2 focus:ring-[#FEBE20]"
            />
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 absolute right-6 top-4" />
          </div>
        </div>
      </header>

      {/* Categories Grid with new accent color */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Explore by Category</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
            >
              <category.icon className="h-12 w-12 text-[#FEBE20] mb-6 group-hover:text-[#FEBE20]/90 transition-colors" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
              <p className="text-gray-600">{category.tips} expert tips</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Articles */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <div key={index} className=" rounded-xl p-8 bg-[#E546E3]/10 transition-colors">
                {/* Using distinct image URL for each card */}
                <div className="h-48 bg-gray-200 rounded-lg mb-6 relative">
                  <Image 
                    src={article.imageUrl} // Dynamic image URL from the article object
                    alt={`Image for ${article.title}`}
                    layout="fill" // Ensures the image fills the div
                    className="object-cover rounded-lg" // Ensures the image maintains aspect ratio while covering the div
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center text-[#E546E3] font-medium">
                  <BookOpenIcon className="h-5 w-5 mr-2" />
                  {article.readTime} read
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with profile image */}
      <section className="bg-[#E546E3]/10 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">What Parents Say</h2>
          <div className="space-y-8">
            <blockquote className="bg-white p-8 rounded-xl shadow-md">
              <p className="text-gray-600 text-lg mb-4">"The meal planning tips transformed our family dinners. Finally getting veggies into picky eaters!"</p>
              <div className="flex items-center justify-center space-x-4">
                <Image 
                  src="https://img.freepik.com/free-photo/young-african-american-woman-wearing-basketball-uniform-showing-pointing-up-with-fingers-number-ten-while-smiling-confident-happy_839833-28698.jpg?t=st=1741811109~exp=1741814709~hmac=9bf3bc33c82f6a0a2a8586165d3b9f707fba46e308dfb1877ed6df93c8a719b9&w=1380" 
                  alt="Sarah Johnson" 
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full border-2 border-[#FEBE20] object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-gray-600">Mom of 2</p>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Newsletter CTA with new colors */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Parenting Community</h2>
          <p className="text-gray-300 mb-8">Get weekly expert tips and connect with other parents</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full text-gray-900 flex-grow"
            />
            <button className="bg-[#E546E3] text-white px-8 py-3 rounded-full hover:bg-[#E546E3]/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ParentingTipsPage