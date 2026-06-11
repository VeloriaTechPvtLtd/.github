import {
    Car,
    Bike,
    Armchair,
    Palette,
    Box,
    HardHat,
    Laptop,
    Users,
    Store,
    Wallet,
    ArrowRight
} from 'lucide-react';

export function ArenzoSection() {
    const categories = [
        { icon: Car, name: 'Automobiles' },
        { icon: Bike, name: '2-Wheelers' },
        { icon: Armchair, name: 'Home Furniture' },
        { icon: Palette, name: 'Decoration' },
        { icon: Box, name: 'Storage Spaces' },
        { icon: HardHat, name: 'Construction' },
        { icon: Laptop, name: 'Electronics' },
    ];

    return (
        <section className="py-10 lg:py-16 bg-[#000000] relative overflow-hidden w-full max-w-full select-none touch-pan-y" id="arenzo">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-[-10%] w-[40%] h-[40%] bg-[#FF7E5F]/10 rounded-full blur-[80px]" />
                <div className="absolute bottom-0 left-[-10%] w-[40%] h-[40%] bg-[#FF7E5F]/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

                    {/* Left Panel */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start min-w-0">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FF7E5F]/10 border border-[#FF7E5F]/20 text-[#FF7E5F] text-[9px] font-black uppercase tracking-widest mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7E5F]" />
                            <span>A Veloria Tech Brand</span>
                        </div>

                        <h2 className="text-5xl sm:text-7xl lg:text-9xl font-black text-white mb-8 leading-[0.9] tracking-tight">
                            Arenzo <br />
                            <span className="bg-gradient-to-r from-[#FF7E5F] via-[#feb47b] to-[#FF7E5F] bg-clip-text text-transparent italic font-serif text-[0.8em]">
                                Rental Reimagined.
                            </span>
                        </h2>

                        <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-medium">
                            The world's most versatile rental ecosystem. We've simplified the platform where premium providers meet global customers for a frictionless experience.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl mb-10">
                            <div className="flex flex-col p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm shadow-xl">
                                <div className="p-3 bg-[#FF7E5F]/20 rounded-2xl w-fit mb-4">
                                    <Store className="w-7 h-7 text-[#FF7E5F]" />
                                </div>
                                <h4 className="text-white font-black text-lg mb-2">For Providers</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">Scale your business with our enterprise rental tools.</p>
                            </div>
                            <div className="flex flex-col p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm shadow-xl">
                                <div className="p-3 bg-white/10 rounded-2xl w-fit mb-4">
                                    <Users className="w-7 h-7 text-white/70" />
                                </div>
                                <h4 className="text-white font-black text-lg mb-2">For Users</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">Rent anything in seconds with verified security.</p>
                            </div>
                        </div>

                        <a
                            href="https://arentzo.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto flex items-center justify-center px-8 py-4 font-bold text-white bg-[#FF7E5F] rounded-xl text-xs uppercase tracking-widest shadow-lg shadow-[#FF7E5F]/20"
                        >
                            <Wallet className="w-4 h-4 mr-2" />
                            Explore Market Place
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                    </div>

                    {/* Right Panel */}
                    <div className="w-full lg:w-1/2 relative flex flex-col items-center">
                        <div className="w-full max-w-[380px]">
                            <div className="relative rounded-[24px] overflow-hidden shadow-2xl border border-white/10 bg-black aspect-[5/6] w-full">
                                <img
                                    src="/images/arenzo.png"
                                    alt="Arenzo"
                                    className="w-full h-full object-cover pointer-events-none"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0d1117] to-transparent" />

                                <div className="absolute top-4 right-4 px-2 py-1 rounded bg-black/60 backdrop-blur-sm border border-white/10 text-[#FF7E5F] text-xs font-black italic">
                                    4.9/5
                                </div>

                                <div className="absolute bottom-4 inset-x-4 p-3 rounded-xl bg-white/[0.05] backdrop-blur-md border border-white/10 flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-6 h-6 rounded bg-[#FF7E5F] flex items-center justify-center font-black text-[10px] text-white">A</div>
                                        <p className="text-white text-[10px] font-bold">Arenzo Pro</p>
                                    </div>
                                    <span className="text-gray-500 text-[8px] font-bold">VERIFIED</span>
                                </div>
                            </div>

                            {/* Significantly Expanded Category Tags */}
                            <div className="mt-8 flex flex-wrap gap-3 justify-center">
                                {categories.map((cat, idx) => (
                                    <div key={idx} className="flex items-center space-x-3 px-5 py-2.5 rounded-2xl bg-white/[0.04] border border-white/10 transition-all hover:bg-white/[0.08] hover:border-[#FF7E5F]/40 shadow-lg">
                                        <cat.icon className="w-5 h-5 text-[#FF7E5F] flex-shrink-0" />
                                        <span className="text-xs sm:text-sm text-gray-300 font-extrabold uppercase tracking-widest whitespace-nowrap">{cat.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Enhanced Trust Ticker */}
            <div className="mt-16 py-6 border-y border-white/10 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-x-12 gap-y-4 opacity-70">
                    {['Global Payments', 'Instant Verification', 'Secure Hosting', 'Smart Contracts'].map(text => (
                        <span key={text} className="text-white font-extrabold tracking-[0.2em] text-[10px] sm:text-xs uppercase whitespace-nowrap">{text}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}
