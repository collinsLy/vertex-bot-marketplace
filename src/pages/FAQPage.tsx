
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQPage = () => {
  const faqSections = [
    {
      title: "Bot Functionality",
      questions: [
        {
          question: "How do trading bots work?",
          answer: "Trading bots are software programs that connect to a trading platform via API and execute trades automatically based on predefined parameters and strategies. They analyze market data, identify trading opportunities, and place orders without human intervention."
        },
        {
          question: "Do I need programming knowledge to use these bots?",
          answer: "No, our bots are designed to be user-friendly and do not require any programming knowledge. They come with detailed setup instructions and pre-configured settings that can be adjusted through a simple interface."
        },
        {
          question: "Can I customize the trading parameters?",
          answer: "Yes, all our bots allow customization of key parameters such as risk level, trading pairs, and time frames. The degree of customization varies by bot, with more advanced bots offering more extensive options."
        }
      ]
    },
    {
      title: "Payment and Pricing",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept M-Pesa, credit/debit cards, and select cryptocurrencies. All payment options are displayed during checkout."
        },
        {
          question: "Are there any recurring fees?",
          answer: "Most of our bots are sold with a one-time payment that includes lifetime access and updates. Some premium bots may offer subscription options with additional benefits, which will be clearly indicated on the product page."
        },
        {
          question: "Do you offer refunds?",
          answer: "We offer a 30-day money-back guarantee for most bots if they do not perform as described. Please review our refund policy for specific terms and conditions."
        }
      ]
    },
    {
      title: "Setup and Installation",
      questions: [
        {
          question: "How will I receive my bot after purchase?",
          answer: "After completing your purchase, you will receive an email with download links and detailed setup instructions. The email will typically arrive within minutes of payment confirmation."
        },
        {
          question: "What platforms are compatible with your bots?",
          answer: "Most of our bots are compatible with MetaTrader 4 (MT4) and MetaTrader 5 (MT5). Some bots may also support cTrader or other platforms. The compatible platforms are listed on each bot's product page."
        },
        {
          question: "How long does setup take?",
          answer: "Setup typically takes 15-30 minutes, depending on your familiarity with the trading platform. Our comprehensive guides walk you through each step, and our support team is available to assist if needed."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h1>
          <p className="text-white/70 text-lg mb-12 text-center">
            Find answers to common questions about our trading bots, payment options, and more.
          </p>
          
          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
              <Accordion type="single" collapsible className="glass-effect rounded-lg overflow-hidden">
                {section.questions.map((faq, faqIndex) => (
                  <AccordionItem key={faqIndex} value={`item-${sectionIndex}-${faqIndex}`}>
                    <AccordionTrigger className="px-6 text-white hover:text-white/80">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-white/70">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQPage;
