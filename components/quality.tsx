import { Award } from "lucide-react"

export function Quality() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="h-16 w-16 text-primary mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground">الجودة والالتزام</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            تحرص ذات العماد على تنفيذ جميع المشروعات وفق أعلى معايير الجودة، مع الالتزام الكامل بمواعيد التسليم،
            واستخدام مواد معتمدة، وتطبيق أنظمة متابعة دقيقة في جميع مراحل التنفيذ.
          </p>
        </div>
      </div>
    </section>
  )
}
