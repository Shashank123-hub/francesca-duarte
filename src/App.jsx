import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Phone, Mail, MapPin, Home, Users, TrendingUp, Award, Star, ChevronRight, Facebook, Instagram, Linkedin } from 'lucide-react'
import './App.css'

// Import images
import fortWorthSkyline from './assets/fort-worth-skyline.jpg'
import luxuryInterior from './assets/luxury-interior.jpg'
import texasHome from './assets/texas-home.jpg'
import businessCardBack from './assets/business-card-back.png'

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">
            Francesca Duarte
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Reviews</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${fortWorthSkyline})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-6 bg-primary/20 text-white border-white/20">
            #1 Real Estate Agent in Fort Worth & Crowley
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Turning Dreams Into <span className="text-primary">Keys</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Your trusted bilingual real estate professional serving Fort Worth, Crowley, and the DFW area. 
            From first-time buyers to luxury investments, I make your real estate dreams a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
              <Home className="w-5 h-5 mr-2" />
              Find Your Dream Home
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black text-lg px-8 py-4">
              <TrendingUp className="w-5 h-5 mr-2" />
              Get Home Valuation
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">8+</div>
              <div className="text-gray-300">Homes Sold Recently</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">4+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">About Francesca</Badge>
              <h2 className="text-4xl font-bold mb-6">Your Dedicated Real Estate Professional</h2>
              <p className="text-lg text-muted-foreground mb-6">
                With a background in corporate contract management and a passion for helping people achieve their 
                homeownership dreams, I bring a unique combination of professional expertise and personal dedication 
                to every transaction.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                As a bilingual agent serving the Fort Worth and Crowley communities, I understand the local market 
                and pride myself on providing superior personal service before, during, and after your transaction.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-primary mr-2" />
                  <span>Licensed REALTOR®</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-primary mr-2" />
                  <span>Bilingual Service</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-primary mr-2" />
                  <span>Contract Management Expert</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary mr-2" />
                  <span>Local Market Expert</span>
                </div>
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                Learn More About My Story
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src={businessCardBack} 
                alt="Francesca Duarte - Real Estate Professional" 
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">4.9★</div>
                <div className="text-sm">Client Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Services</Badge>
            <h2 className="text-4xl font-bold mb-6">Comprehensive Real Estate Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From buying your first home to luxury investments, I provide full-service real estate solutions 
              tailored to your unique needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Home className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Home Buying</CardTitle>
                <CardDescription>
                  Find your perfect home with expert guidance through every step of the buying process.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Market analysis and property search</li>
                  <li>• Negotiation and contract management</li>
                  <li>• First-time buyer assistance</li>
                  <li>• Investment property guidance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Home Selling</CardTitle>
                <CardDescription>
                  Maximize your home's value with strategic marketing and expert pricing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Professional market valuation</li>
                  <li>• Strategic marketing campaigns</li>
                  <li>• Professional photography</li>
                  <li>• Negotiation expertise</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Luxury Properties</CardTitle>
                <CardDescription>
                  Specialized service for high-end properties and discerning clients.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Luxury market expertise</li>
                  <li>• Exclusive property access</li>
                  <li>• White-glove service</li>
                  <li>• Confidential transactions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Investment Properties</CardTitle>
                <CardDescription>
                  Build wealth through strategic real estate investments.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• ROI analysis and projections</li>
                  <li>• Market trend insights</li>
                  <li>• Portfolio diversification</li>
                  <li>• Property management connections</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Relocation Services</CardTitle>
                <CardDescription>
                  Seamless transitions for families moving to the DFW area.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Area orientation and tours</li>
                  <li>• School district information</li>
                  <li>• Community resources</li>
                  <li>• Moving coordination</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Bilingual Support</CardTitle>
                <CardDescription>
                  Professional service in both English and Spanish.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• English and Spanish fluency</li>
                  <li>• Cultural understanding</li>
                  <li>• Document translation assistance</li>
                  <li>• Community connections</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Featured Properties</Badge>
            <h2 className="text-4xl font-bold mb-6">Recently Sold & Available Homes</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore some of our recent successes and current listings in the Fort Worth and Crowley areas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={luxuryInterior} 
                  alt="Luxury Home Interior" 
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-green-500">SOLD</Badge>
              </div>
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">$485,000</div>
                <div className="text-lg font-semibold mb-2">Modern Luxury Home</div>
                <div className="text-muted-foreground mb-4">Historic Southside, Fort Worth</div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>4 beds</span>
                  <span>3 baths</span>
                  <span>2,850 sq ft</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={texasHome} 
                  alt="Texas Style Home" 
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-blue-500">FOR SALE</Badge>
              </div>
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">$325,000</div>
                <div className="text-lg font-semibold mb-2">Texas Ranch Style</div>
                <div className="text-muted-foreground mb-4">Crowley, TX</div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>3 beds</span>
                  <span>2 baths</span>
                  <span>1,950 sq ft</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={fortWorthSkyline} 
                  alt="Downtown Condo" 
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-orange-500">UNDER CONTRACT</Badge>
              </div>
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">$185,000</div>
                <div className="text-lg font-semibold mb-2">Downtown Condo</div>
                <div className="text-muted-foreground mb-4">Arlington, TX</div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>2 beds</span>
                  <span>1 bath</span>
                  <span>963 sq ft</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Client Reviews</Badge>
            <h2 className="text-4xl font-bold mb-6">What My Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take my word for it - hear from satisfied clients who trusted me with their real estate journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Francesca made our first home buying experience seamless and stress-free. Her bilingual skills 
                  and local knowledge were invaluable. Highly recommend!"
                </p>
                <div className="font-semibold">Maria & Carlos Rodriguez</div>
                <div className="text-sm text-muted-foreground">First-Time Homebuyers</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Professional, knowledgeable, and truly cares about her clients. Francesca sold our home 
                  above asking price in just two weeks. Amazing results!"
                </p>
                <div className="font-semibold">Jennifer Thompson</div>
                <div className="text-sm text-muted-foreground">Home Seller</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Francesca's expertise in luxury properties is unmatched. She understood our vision and 
                  found us the perfect investment property. Excellent service!"
                </p>
                <div className="font-semibold">Robert & Sarah Kim</div>
                <div className="text-sm text-muted-foreground">Luxury Property Investors</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Get In Touch</Badge>
            <h2 className="text-4xl font-bold mb-6">Ready to Make Your Move?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're buying, selling, or investing, I'm here to help you achieve your real estate goals. 
              Let's start the conversation today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-primary mr-4" />
                  <div>
                    <div className="font-semibold">Primary Phone</div>
                    <div className="text-muted-foreground">(210) 316-4625</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-primary mr-4" />
                  <div>
                    <div className="font-semibold">Secondary Phone</div>
                    <div className="text-muted-foreground">(817) 734-1053</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-primary mr-4" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">franchesca.realtor@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-primary mr-4" />
                  <div>
                    <div className="font-semibold">Office Location</div>
                    <div className="text-muted-foreground">
                      4900 SE Loop 820 Ste 204<br />
                      Fort Worth, TX 76140
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon">
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Instagram className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>
                  Ready to get started? Fill out the form below and I'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">I'm interested in...</label>
                    <select className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
                      <option>Buying a home</option>
                      <option>Selling a home</option>
                      <option>Investment properties</option>
                      <option>Market valuation</option>
                      <option>General consultation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows="4" 
                      className="w-full p-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Tell me about your real estate goals..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Francesca Duarte</h3>
              <p className="text-primary-foreground/80 mb-4">
                Your trusted real estate professional serving Fort Worth, Crowley, and the DFW area. 
                Turning dreams into keys, one home at a time.
              </p>
              <div className="text-sm text-primary-foreground/60">
                Licensed REALTOR® | AmbitionX Real Estate LLC
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Reviews</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Fort Worth, TX</li>
                <li>Crowley, TX</li>
                <li>Arlington, TX</li>
                <li>Historic Southside</li>
                <li>North Arlington</li>
                <li>Greater DFW Area</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2025 Francesca Duarte Real Estate. All rights reserved. | Equal Housing Opportunity</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

