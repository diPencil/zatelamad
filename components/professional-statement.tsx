export function ProfessionalStatement() {
    return (
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-8 border border-white/20">
                        شريككم في بناء المستقبل
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                        نحن لا نبني منشآت فحسب، بل نبني تاريخاً هندسياً يجمع بين الأصالة والحداثة
                    </h2>
                    <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed mb-12">
                        من قلب القاهرة وبأيادٍ مصرية خبيرة، نلتزم بتقديم حلول هندسية متكاملة تتجاوز التوقعات، لنكون دائماً الخيار الأول في تشكيل ملامح الجيل القادم من المشروعات العمرانية في مصر.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-1">+10</div>
                            <div className="text-sm opacity-60">سنوات من الخبرة</div>
                        </div>
                        <div className="h-12 w-[1px] bg-white/20 hidden sm:block" />
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-1">+50</div>
                            <div className="text-sm opacity-60">مشروعاً ناجحاً</div>
                        </div>
                        <div className="h-12 w-[1px] bg-white/20 hidden sm:block" />
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-1">100%</div>
                            <div className="text-sm opacity-60">التزام بالمواصفات</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-black/5 rounded-full blur-3xl" />
        </section>
    )
}
