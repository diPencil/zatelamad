import { Award, Target, Users, TrendingUp } from "lucide-react"

const values = [
    {
        icon: Award,
        title: "الجودة والالتزام",
        description: "نحرص على تنفيذ جميع المشروعات وفق أعلى معايير الجودة، مع الالتزام الصارم بمواعيد التسليم واستخدام مواد معتمدة كلياً.",
    },
    {
        icon: Users,
        title: "فلسفة العمل",
        description: "نؤمن بأن العمل الجماعي والتواصل الفعّال هما أساس النجاح، حيث ندمج الخبرة الهندسية بروح التعاون المبدع.",
    },
    {
        icon: Target,
        title: "رؤيتنا المستقبلية",
        description: "نسعى للريادة في سوق المقاولات المصري من خلال التوسع في المشروعات القومية الكبرى وتطوير أدواتنا التقنية.",
    },
]

export function CompanyValues() {
    return (
        <section className="py-24 md:py-32 bg-[#001F3F] relative overflow-hidden" id="values">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5">
               <div className="absolute inset-0 bg-[url('/heroslider/Gemini_Generated_Image_vcfegjvcfegjvcfe.png')] bg-cover bg-center grayscale" />
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A023]/10 border border-[#C5A023]/20 text-[#C5A023] text-xs font-bold tracking-wider uppercase">
                        مبادئنا
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white">قيمنا <span className="text-[#C5A023]">وجوهر</span> عملنا</h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">نحن نبني بأساس متين من القيم والاحترافية لضمان مستقبل أفضل في كل مشروع</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((item, index) => (
                        <div
                            key={index}
                            className="group p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-[#C5A023]/10 hover:border-[#C5A023]/30 transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#C5A023] flex items-center justify-center mb-8 shadow-lg shadow-black/20 transform group-hover:rotate-12 transition-transform">
                                <item.icon className="w-8 h-8 text-[#001F3F]" />
                            </div>
                            <h3 className="text-2xl font-black mb-4 text-white group-hover:text-[#C5A023] transition-colors">{item.title}</h3>
                            <p className="text-white/70 leading-relaxed text-lg group-hover:text-white transition-colors">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#C5A023]/30 to-transparent" />
        </section>
    )
}

