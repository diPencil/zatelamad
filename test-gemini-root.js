const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = "AIzaSyCqYkFUFprYprWoMrD0b5XCHkKomSEMDEc";
const genAI = new GoogleGenerativeAI(apiKey);

async function list() {
  try {
    // Note: listModels is on the genAI object in some versions, or requires a different approach
    // In newer SDK versions, it's genAI.getGenerativeModel({ model: "..." }).listModels()? No.
    // Actually, listing models might not be available in the simplified SDK.
    // Let's try the fetch approach to see what's wrong.
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (e) {
    console.log("Error:", e.message);
  }
}

list();
