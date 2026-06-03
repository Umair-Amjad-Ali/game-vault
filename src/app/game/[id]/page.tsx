'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Star, 
  Zap, 
  MessageSquare, 
  Mail, 
  Send, 
  Phone,
  ArrowRight,
  TrendingUp,
  Award,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { GAME_PLATFORMS, CONTACT_INFO } from '@/lib/constants';

export default function GameDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  // State to hold the current game details
  const [game, setGame] = useState(() => GAME_PLATFORMS.find(g => g.id === id));

  // Carousel State - Filters out current game
  const relatedGames = GAME_PLATFORMS.filter(g => g.id !== id);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Monitor screen size to determine items per view responsively
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play interval effect (loops back smoothly to index 0)
  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => 
        prev >= relatedGames.length - itemsPerView ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(timer);
  }, [relatedGames.length, itemsPerView, id]);

  const handlePrev = () => {
    setCarouselIndex((prev) => 
      prev === 0 ? Math.max(0, relatedGames.length - itemsPerView) : prev - 1
    );
  };

  const handleNext = () => {
    setCarouselIndex((prev) => 
      prev >= relatedGames.length - itemsPerView ? 0 : prev + 1
    );
  };

  const getTransformStyle = () => {
    if (itemsPerView === 3) {
      return `translateX(calc(-${carouselIndex} * (33.333% + 8px)))`;
    }
    if (itemsPerView === 2) {
      return `translateX(calc(-${carouselIndex} * (50% + 12px)))`;
    }
    return `translateX(calc(-${carouselIndex} * (100% + 24px)))`;
  };

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    communication: 'WhatsApp',
    phone: '',
    email: '',
    tier: 'Store',
    gameId: id,
    points: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync game and form selection when parameter changes
  useEffect(() => {
    const foundGame = GAME_PLATFORMS.find(g => g.id === id);
    if (foundGame) {
      setGame(foundGame);
      setFormData(prev => ({
        ...prev,
        gameId: id,
        points: foundGame.rates[0] ? `${foundGame.rates[0].points} points = $${foundGame.rates[0].price}` : 'Custom points inquiry'
      }));
    }
  }, [id]);

  // When user changes the game select field, update both the active rates and the points dropdown
  const handleGameSelectChange = (selectedId: string) => {
    // Force blur on the select element to auto-close the option dropdown in all browsers
    if (typeof document !== 'undefined' && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    const newGame = GAME_PLATFORMS.find(g => g.id === selectedId);
    if (newGame) {
      setGame(newGame);
      setFormData(prev => ({
        ...prev,
        gameId: selectedId,
        points: newGame.rates[0] ? `${newGame.rates[0].points} points = $${newGame.rates[0].price}` : 'Custom points inquiry'
      }));
      // Route user smoothly to the new game url without page refresh to keep it pristine
      router.push(`/game/${selectedId}`);
    }
  };

  if (!game) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center py-20 px-4">
        <h1 className="text-2xl font-black text-gray-900">Platform Not Found</h1>
        <p className="text-sm text-gray-600 mt-2">The requested game platform data does not exist.</p>
        <Link href="/" className="mt-4 text-pink-600 font-extrabold flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>
    );
  }

  // Handle submit - triggers direct support contact message via WhatsApp
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email) {
      alert('Please fill out all required fields marked with *');
      return;
    }

    // Format a beautiful pre-filled message for WhatsApp leads
    const whatsappMessage = `Hello SDC! I want to set up an account:
- *Platform:* ${game.name}
- *Name:* ${formData.fullName}
- *Contact method:* ${formData.communication}
- *Phone:* ${formData.phone}
- *Email:* ${formData.email}
- *Account Level:* ${formData.tier}
- *Selected Package:* ${formData.points}
- *Message:* ${formData.message || 'None'}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/14706385664?text=${encodedMessage}`;
    
    setIsSubmitted(true);
    
    // Open in a new tab to initiate lead chat immediately
    window.open(whatsappUrl, '_blank');
  };

  // Resolve specific styling color profiles for cards
  const getDynamicGradient = (gameId: string) => {
    const gradients: Record<string, string> = {
      vblink: 'from-purple-600 via-fuchsia-600 to-pink-600',
      'game-vault-999': 'from-amber-600 via-yellow-500 to-amber-700',
      'orion-stars': 'from-indigo-900 via-purple-900 to-pink-900',
      'fire-kirin': 'from-red-600 via-orange-500 to-yellow-600',
      'juwa-777': 'from-blue-600 via-indigo-600 to-pink-600',
      'juwa-2': 'from-blue-600 via-indigo-700 to-pink-600',
      'ultra-panda': 'from-emerald-600 via-teal-500 to-green-600',
      milkyway: 'from-indigo-900 via-purple-800 to-pink-850',
      'vegas-sweeps': 'from-indigo-600 via-fuchsia-600 to-pink-500',
      'panda-master': 'from-emerald-700 via-green-600 to-yellow-500',
    };
    return gradients[gameId] || 'from-pink-500 via-pink-600 to-pink-700';
  };

  return (
    <div className="min-h-screen bg-white bg-grid-pattern pt-24 pb-16">
      
      {/* Decorative spheres */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-pink-100/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-rose-50/50 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Breadcrumb */}
        <Link
          href="/#game-platforms"
          className="inline-flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-pink-600 mb-6 transition-colors group focus:outline-none"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to All Platforms</span>
        </Link>

        {/* Dynamic Game Landscape Hero Header */}
        <div className={`relative w-full rounded-3xl bg-gradient-to-r ${getDynamicGradient(game.id)} p-8 sm:p-10 shadow-xl overflow-hidden mb-10 text-white`}>
          {/* Cover grid backdrop */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-white/5 blur-2xl" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-col items-start gap-3">
              {/* Badge & Category */}
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-black tracking-widest uppercase bg-white/90 text-gray-900 px-3 py-1 rounded-full shadow-xs">
                  {game.badge || 'Supplies'}
                </span>
                <span className="text-[9px] font-black tracking-widest uppercase bg-pink-500/80 text-white border border-pink-400 px-3 py-1 rounded-full">
                  {game.category}
                </span>
              </div>

              {/* Dynamic Title */}
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight drop-shadow-md">
                {game.name} Platform
              </h1>
              <p className="text-sm text-white/90 font-medium max-w-xl leading-relaxed">
                {game.description}
              </p>
            </div>

            {/* Account Levels Pills */}
            <div className="flex flex-col items-start md:items-end gap-2 text-left md:text-right shrink-0">
              <span className="text-[10px] font-black text-white bg-black/25 px-2 py-0.5 rounded uppercase tracking-widest">Available Account Tiers</span>
              <div className="flex flex-wrap gap-1.5 mt-0.5">
                {game.levels.map((level, index) => (
                  <span
                    key={index}
                    className="text-xs font-black uppercase bg-black/40 border border-white/35 text-white px-3 py-1 rounded-xl shadow-xs"
                  >
                    {level}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Desktop 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Rates Table & Platform Details (5/12) */}
          <div className="col-span-1 lg:col-span-5 flex flex-col gap-6 text-left">
            
            {/* Rates Dashboard Card */}
            <div className="bg-white rounded-none border border-zinc-200 p-6 shadow-xs relative group">
              {/* Unique L-shaped Crop Marks */}
              <span className="border-zinc-800 absolute -left-px -top-px block size-2.5 border-l-2 border-t-2 z-20 transition-colors group-hover:border-pink-500"></span>
              <span className="border-zinc-800 absolute -right-px -top-px block size-2.5 border-r-2 border-t-2 z-20 transition-colors group-hover:border-pink-500"></span>
              <span className="border-zinc-800 absolute -bottom-px -left-px block size-2.5 border-b-2 border-l-2 z-20 transition-colors group-hover:border-pink-500"></span>
              <span className="border-zinc-800 absolute -bottom-px -right-px block size-2.5 border-b-2 border-r-2 z-20 transition-colors group-hover:border-pink-500"></span>

              <div className="absolute top-0 right-0 w-24 h-24 bg-pink-50/30 rounded-full blur-xl pointer-events-none" />
              
              <h3 className="text-base font-black text-gray-900 flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-pink-650" />
                <span>Distributor Credit Rates</span>
              </h3>

              {/* Custom dynamic rates listing */}
              <div className="flex flex-col gap-3">
                {game.rates.map((rate, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-pink-50/20 border border-pink-100/50 hover:bg-pink-50/50 transition-all group/rate"
                  >
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Points package</span>
                      <span className="text-sm font-black text-gray-900">{rate.points} Points</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">distributor price</span>
                      <span className="text-sm font-extrabold text-pink-650 group-hover/rate:scale-105 transition-transform">${rate.price} USD</span>
                    </div>
                  </div>
                ))}
                
                {game.rates.length === 0 && (
                  <div className="p-4 text-center text-xs text-gray-500 font-bold bg-gray-50 rounded-2xl">
                    No fixed rates loaded. Contact WhatsApp for custom quotes.
                  </div>
                )}
              </div>

              {/* Bullets */}
              <div className="flex flex-col gap-2 mt-5 pt-5 border-t border-gray-100 text-xs text-gray-650 font-semibold leading-relaxed">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-pink-650 shrink-0" />
                  <span>Credits loaded directly to master admin portal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-pink-650 shrink-0" />
                  <span>Best rates to maximize agent commissions</span>
                </div>
              </div>

            </div>

            {/* Direct Instant Contact Box */}
            <div className="bg-gradient-to-r from-pink-50/70 to-rose-50/40 border border-zinc-200 rounded-none p-6 flex flex-col items-start gap-3 relative group">
              {/* Unique L-shaped Crop Marks */}
              <span className="border-zinc-800 absolute -left-px -top-px block size-2.5 border-l-2 border-t-2 z-20 transition-colors group-hover:border-pink-500"></span>
              <span className="border-zinc-800 absolute -right-px -top-px block size-2.5 border-r-2 border-t-2 z-20 transition-colors group-hover:border-pink-500"></span>
              <span className="border-zinc-800 absolute -bottom-px -left-px block size-2.5 border-b-2 border-l-2 z-20 transition-colors group-hover:border-pink-500"></span>
              <span className="border-zinc-800 absolute -bottom-px -right-px block size-2.5 border-b-2 border-r-2 z-20 transition-colors group-hover:border-pink-500"></span>

              <h4 className="text-sm font-black text-gray-900 uppercase tracking-wide">Prefer Direct Contact?</h4>
              <p className="text-xs text-gray-700 leading-relaxed font-semibold">
                Skip the form! Connect instantly with SDC representatives on official support channels for rapid account setups.
              </p>
              <Button
                variant="primary"
                size="md"
                href={CONTACT_INFO.whatsapp.url}
                className="gap-2 w-full text-xs font-black uppercase py-2.5 shadow-md shadow-pink-500/10 mt-1"
              >
                <span>Chat On WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

          </div>

          {/* Right Column: Lead Capture Agent Form (7/12) */}
          <div className="col-span-1 lg:col-span-7 relative">
            <div className="bg-white rounded-none border border-zinc-200 p-6 sm:p-8 shadow-md relative z-10 glass-card group">
              {/* Unique L-shaped Crop Marks */}
              <span className="border-zinc-800 absolute -left-px -top-px block size-2.5 border-l-2 border-t-2 z-20 transition-colors group-hover:border-pink-500"></span>
              <span className="border-zinc-800 absolute -right-px -top-px block size-2.5 border-r-2 border-t-2 z-20 transition-colors group-hover:border-pink-500"></span>
              <span className="border-zinc-800 absolute -bottom-px -left-px block size-2.5 border-b-2 border-l-2 z-20 transition-colors group-hover:border-pink-500"></span>
              <span className="border-zinc-800 absolute -bottom-px -right-px block size-2.5 border-b-2 border-r-2 z-20 transition-colors group-hover:border-pink-500"></span>
              
              <div className="text-left border-b border-gray-100 pb-4 mb-6">
                <h3 className="text-lg font-black text-gradient-pink">Agent Setup Form</h3>
                <p className="text-xs text-gray-700 mt-1 leading-relaxed font-semibold">
                  Register as an SDC distributor, sub-distributor, or store manager. Fill out the fields to receive portal setups.
                </p>
              </div>

              {isSubmitted ? (
                /* Success state */
                <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center text-green-500 border border-green-200">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h4 className="text-base font-black text-gray-900">Setup Request Compiled!</h4>
                  <p className="text-xs text-gray-700 font-semibold max-w-sm leading-relaxed">
                    We have compiled your agent setup request. If the WhatsApp chat did not open automatically, please click below to chat with an authorized representative.
                  </p>
                  <Button
                    variant="primary"
                    size="md"
                    href={CONTACT_INFO.whatsapp.url}
                    className="mt-2 text-xs font-black uppercase px-6 py-2.5"
                  >
                    <span>Launch Chat Manually</span>
                  </Button>
                </div>
              ) : (
                /* Interactive Form Form */
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  
                  {/* Row 1: Full Name & Communication Method */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-extrabold text-gray-800">
                        Full Name <span className="text-pink-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter Your Full Name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-gray-900 focus:outline-none focus:border-pink-500 focus:bg-white transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-extrabold text-gray-800">
                        Preferred method of communication <span className="text-pink-600">*</span>
                      </label>
                      <select
                        value={formData.communication}
                        onChange={(e) => setFormData({ ...formData, communication: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-gray-900 focus:outline-none focus:border-pink-500 focus:bg-white transition-all cursor-pointer"
                      >
                        <option value="WhatsApp">WhatsApp</option>
                        <option value="Telegram">Telegram</option>
                        <option value="Phone Number">Phone Number</option>
                        <option value="Email">Email</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 2: Phone Number & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-extrabold text-gray-800">
                        Phone Number <span className="text-pink-600">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Enter Your Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-gray-900 focus:outline-none focus:border-pink-500 focus:bg-white transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-extrabold text-gray-800">
                        Email <span className="text-pink-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Enter Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-gray-900 focus:outline-none focus:border-pink-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: Account Level & Game Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-extrabold text-gray-800">
                        Store or Distributer <span className="text-pink-600">*</span>
                      </label>
                      <select
                        value={formData.tier}
                        onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-gray-900 focus:outline-none focus:border-pink-500 focus:bg-white transition-all cursor-pointer"
                      >
                        <option value="Store">Store</option>
                        <option value="Distributor">Distributor</option>
                        <option value="Sub-Distributor">Sub-Distributor</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-extrabold text-gray-800">
                        Games Interested In <span className="text-pink-600">*</span>
                      </label>
                      <select
                        value={formData.gameId}
                        onChange={(e) => handleGameSelectChange(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-gray-900 focus:outline-none focus:border-pink-500 focus:bg-white transition-all cursor-pointer"
                      >
                        {GAME_PLATFORMS.map((g) => (
                          <option key={g.id} value={g.id}>
                            {g.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Point packages Dropdown */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-extrabold text-gray-800">
                      How many points do you want to get? <span className="text-pink-600">*</span>
                    </label>
                    <select
                      value={formData.points}
                      onChange={(e) => setFormData({ ...formData, points: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-gray-900 focus:outline-none focus:border-pink-500 focus:bg-white transition-all cursor-pointer"
                    >
                      {game.rates.map((rate, index) => (
                        <option key={index} value={`${rate.points} points = $${rate.price}`}>
                          {rate.points} points = ${rate.price} USD
                        </option>
                      ))}
                      <option value="Custom points inquiry">Custom / Other Point Inquiry</option>
                    </select>
                  </div>

                  {/* Row 5: Your Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-extrabold text-gray-800">
                      Your Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Type Your Message Here"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-gray-900 focus:outline-none focus:border-pink-500 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* Submit Trigger */}
                  <button
                    type="submit"
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-xl shadow-md shadow-pink-500/10 cursor-pointer hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Become a Distributor / Agent</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* SDC Official Disclaimer - Exactly as screenshot */}
                  <div className="pt-2 border-t border-gray-100 mt-4 text-[10px] text-amber-600 font-extrabold leading-relaxed text-center">
                    Disclaimer: SDC is not an employer. We are not seeking employees. SDC is an account/credit supplier.
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

        {/* Related Game Platforms Carousel */}
        <div className="mt-16 pt-12 border-t border-gray-200 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-black uppercase text-pink-600 tracking-widest leading-none">Explore More Systems</span>
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight mt-1.5">
                Related Gaming Platforms
              </h2>
            </div>
            
            {/* Navigation buttons - Styled uniquely with crop-marks */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 border border-zinc-200 bg-white hover:border-pink-500 hover:bg-pink-50 text-gray-800 hover:text-pink-650 flex items-center justify-center transition-all duration-200 active:scale-95 relative"
                aria-label="Previous platform"
              >
                <span className="border-zinc-800 absolute -left-px -top-px block size-1.5 border-l border-t z-20 transition-colors group-hover:border-pink-500"></span>
                <span className="border-zinc-800 absolute -right-px -top-px block size-1.5 border-r border-t z-20 transition-colors group-hover:border-pink-500"></span>
                <span className="border-zinc-800 absolute -bottom-px -left-px block size-1.5 border-b border-l z-20 transition-colors group-hover:border-pink-500"></span>
                <span className="border-zinc-800 absolute -bottom-px -right-px block size-1.5 border-b border-r z-20 transition-colors group-hover:border-pink-500"></span>
                <ChevronLeft className="w-4.5 h-4.5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 border border-zinc-200 bg-white hover:border-pink-500 hover:bg-pink-50 text-gray-800 hover:text-pink-650 flex items-center justify-center transition-all duration-200 active:scale-95 relative"
                aria-label="Next platform"
              >
                <span className="border-zinc-800 absolute -left-px -top-px block size-1.5 border-l border-t z-20 transition-colors group-hover:border-pink-500"></span>
                <span className="border-zinc-800 absolute -right-px -top-px block size-1.5 border-r border-t z-20 transition-colors group-hover:border-pink-500"></span>
                <span className="border-zinc-800 absolute -bottom-px -left-px block size-1.5 border-b border-l z-20 transition-colors group-hover:border-pink-500"></span>
                <span className="border-zinc-800 absolute -bottom-px -right-px block size-1.5 border-b border-r z-20 transition-colors group-hover:border-pink-500"></span>
                <ChevronRight className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>

          {/* Sliding Grid Container - Added py-4 and px-2 to prevent cards hover scale clipping */}
          <div className="relative overflow-hidden w-full py-4 px-2">
            {/* Flex container tracking index transformations */}
            <div 
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: getTransformStyle()
              }}
            >
              {relatedGames.map((rg) => (
                <Link
                  key={rg.id}
                  href={`/game/${rg.id}`}
                  className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 group relative flex flex-col justify-between p-6 rounded-none border border-zinc-200 bg-white hover:border-pink-400 hover:shadow-md hover:shadow-pink-500/5 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Unique L-shaped Crop Marks */}
                  <span className="border-zinc-800 absolute -left-px -top-px block size-2.5 border-l-2 border-t-2 z-20 transition-colors group-hover:border-pink-500"></span>
                  <span className="border-zinc-800 absolute -right-px -top-px block size-2.5 border-r-2 border-t-2 z-20 transition-colors group-hover:border-pink-500"></span>
                  <span className="border-zinc-800 absolute -bottom-px -left-px block size-2.5 border-b-2 border-l-2 z-20 transition-colors group-hover:border-pink-500"></span>
                  <span className="border-zinc-800 absolute -bottom-px -right-px block size-2.5 border-b-2 border-r-2 z-20 transition-colors group-hover:border-pink-500"></span>

                  <div className="flex flex-col gap-3">
                    {/* Badge & Category */}
                    <div className="flex items-center gap-2">
                      {rg.badge && (
                        <span className="text-[8px] font-black uppercase tracking-wider bg-pink-500 text-white px-2 py-0.5 rounded-full leading-none">
                          {rg.badge}
                        </span>
                      )}
                      <span className="text-[8px] font-bold uppercase tracking-wider bg-gray-55 text-gray-600 border border-gray-200 px-2 py-0.5 rounded-full leading-none">
                        {rg.category}
                      </span>
                    </div>
                    <h3 className="text-base font-black text-gray-900 group-hover:text-pink-650 transition-colors">
                      {rg.name}
                    </h3>
                    <p className="text-xs text-gray-650 font-semibold leading-relaxed line-clamp-2">
                      {rg.description}
                    </p>
                  </div>

                  {/* Footer rates snippet */}
                  <div className="mt-4 pt-4 border-t border-zinc-200 flex items-center justify-between">
                    <span className="text-[10px] text-gray-500 font-extrabold uppercase tracking-wide">Starting from</span>
                    <span className="text-xs font-black text-pink-650 group-hover:scale-105 transition-transform">
                      ${rg.rates[0]?.price || 110} USD
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Indicator dots */}
          <div className="flex items-center justify-center gap-1.5 mt-8 select-none">
            {Array.from({ length: Math.max(1, relatedGames.length - itemsPerView + 1) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCarouselIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  carouselIndex === idx 
                    ? 'w-6 bg-pink-500 shadow-sm shadow-pink-500/20' 
                    : 'w-1.5 bg-gray-200 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
export const dynamic = 'force-static';
