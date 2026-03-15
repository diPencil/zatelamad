export function ThankYou() {
    return (
        <footer className="py-24 bg-background border-t">
            <div className="container mx-auto px-4 text-center">
                <div className="mb-12">
                    <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-4xl">🤝</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">شكراً لثقتكم</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        فخورون بكوننا جزءاً من مسيرتكم، ونتطلع دائماً للمزيد من النجاحات المشتركة في بناء وتطوير وطننا الغالي.
                    </p>
                </div>

                <div className="pt-12 border-t border-zinc-100 dark:border-zinc-800 flex flex-col items-center">
                    <img
                        src="/zatlogo.png"
                        alt="Zat Logo"
                        className="h-20 lg:h-24 w-auto mb-8 grayscale hover:grayscale-0 transition-all duration-500 opacity-80"
                    />
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} ذات العماد للمقاولات العامة. جميع الحقوق محفوظة.
                    </p>
                </div>
            </div>
        </footer>
    )
}
