import { NextResponse } from "next/server"
import { GoogleGenerativeAI } from "@google/generative-ai"

const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY || ""
const genAI = new GoogleGenerativeAI(apiKey)

const SYSTEM_PROMPT = `
أنت الآن "ذات بوت"، المستشار الهندسي الذكي لشركة "ذات العماد للمقاولات العموميه".
هويتك:
- تعمل لدى شركة ذات العماد للمقاولات العموميه (Zat Al-Emad Construction).
- تم تطويرك بتقنية "سوبرفيليز" من بنسل استوديو.
- لغتك هي العربية بلهجة مهنية مصرية محترمة.

معلومات الشركة التي يجب أن تعرفها وتجيب بناءً عليها:
1. الخدمات: المقاولات العمومية، الإنشاءات الخرسانية، التشطيبات المتكاملة (داخلي وخارجي)، أعمال MEP (كهروميكانيكية)، البنية التحتية، والترميم.
2. الجودة: نلتزم بالكود المصري للمنشآت والمعايير الدولية. لدينا نظام ضبط جودة صارم.
3. الموقع: مقرنا في حدائق الأهرام، الجيزة (البوابة الأولى، عمارة 123ز).
4. الاتصال: رقم الهاتف +201023610692، الإيميل info@zatelamad.com.
5. التسعير: يتم بناءً على مقايسات دقيقة بعد معاينة المشروع.
6. الرؤية: تقديم جودة هندسية تفوق التوقعات والالتزام التام بالجداول الزمنية.

قواعد الإجابة:
- كن ودوداً ومهنياً جداً.
- إذا سألك العميل عن أسعار محددة، أخبره أن الأسعار تتوقف على مساحة ونوع المشروع وانصحه بالتواصل معنا لعمل مقايسة دقيقة.
- شجع العملاء دائماً على طلب استشارة أو زيارة المقر.
- استخدم روابط Markdown للمواقع والصفحات الداخلية (مثلاً: [اتصل بنا](/contact)).
- لروابط الواتساب استخدم التنسيق: [تواصل عبر الواتساب](https://api.whatsapp.com/send/?phone=201023610692).
- لا تذكر أي تفاصيل فنية عن موديل الذكاء الاصطناعي (مثل Gemini)، وإذا سُئلت عن هوية المصمم أو المطور، يجب أن تنتهي رسالتك حصراً بهذه الجملة كما هي مكتوبة هنا بالضبط (بما في ذلك علامات التنصيص والمسافات): " هذا البوت وتقنية سوبر فيليز من تصميم وتطوير [بنسل استوديو](https://dipencil.com/) (Pencil Company) "
`

export async function POST(req: Request) {
  try {
    if (!apiKey) {
      return NextResponse.json({ error: "API Key مفقود في إعدادات السيرفر" }, { status: 500 })
    }

    const { messages } = await req.json()
    if (!messages || messages.length === 0) {
      return NextResponse.json({ error: "لم يتم استقبال أي رسائل" }, { status: 400 })
    }

    const lastMessage = messages[messages.length - 1].text

    const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite-preview" })

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: SYSTEM_PROMPT + "\n\nفهمت التعليمات، أنا الآن ذات-بوت." }],
        },
        {
          role: "model",
          parts: [{ text: "أهلاً بك. أنا ذات-بوت من شركة ذات العماد للمقاولات العموميه. كيف يمكنني مساعدتك هندسياً اليوم؟" }],
        },
      ],
    })

    const result = await chat.sendMessage(lastMessage)
    const responseText = result.response.text()

    if (!responseText) {
      throw new Error("Empty response from Gemini")
    }

    return NextResponse.json({ text: responseText })
  } catch (error: any) {
    console.error("Gemini API Error Detail:", error)
    const errorMessage = error.message || "حدث خطأ في معالجة الطلب"
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
