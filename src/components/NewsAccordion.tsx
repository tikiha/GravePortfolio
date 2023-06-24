import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const NewsAccordion = ({ className }) => {
  return (
    <div className={`  ${className}`}>
      <motion.h2
        className="text-lp w-full"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
      >
        ニュース
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        <Accordion
          type="single"
          collapsible
          className="xl:w-[1024px] mx-auto w-full my-10"
        >
          <AccordionItem value="item-1" className="border-slate-400 border-t">
            <AccordionTrigger className="group text-p font-normal">
              <div className="space-x-2">
                <span>2022.12.05</span>
                <span className=" bg-teal-200 p-1 text-p">独居ケア</span>
                <span className="group-hover:underline">
                  独居ケアアシスタントのサービスページをリニューアル
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-p/loose px-16">
              本日、独居ケアアシスタントのサービスページをリニューアルいたしました。
              新しいサービスページでは、独居ケアアシスタントをご検討のビジネスパートナーさま向けに、ご利用シーンなどの充実に加え、自治体のご担当者さま向けのページ「自治体向けプラン」を追加しています。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-slate-400 border-t">
            <AccordionTrigger className="group text-p font-normal">
              <div className="space-x-2">
                <span>2022.12.05</span>
                <span className=" bg-teal-200 p-1 text-p">独居ケア</span>
                <span className="group-hover:underline">
                  独居ケアアシスタントのサービスページをリニューアル
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-p/loose px-16">
              本日、独居ケアアシスタントのサービスページをリニューアルいたしました。
              新しいサービスページでは、独居ケアアシスタントをご検討のビジネスパートナーさま向けに、ご利用シーンなどの充実に加え、自治体のご担当者さま向けのページ「自治体向けプラン」を追加しています。
            </AccordionContent>
          </AccordionItem>{" "}
          <AccordionItem value="item-3" className="border-slate-400 border-t">
            <AccordionTrigger className="group text-p font-normal">
              <div className="space-x-2">
                <span>2022.12.05</span>
                <span className=" bg-teal-200 p-1 text-p">独居ケア</span>
                <span className="group-hover:underline">
                  独居ケアアシスタントのサービスページをリニューアル
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-p/loose px-16">
              本日、独居ケアアシスタントのサービスページをリニューアルいたしました。
              新しいサービスページでは、独居ケアアシスタントをご検討のビジネスパートナーさま向けに、ご利用シーンなどの充実に加え、自治体のご担当者さま向けのページ「自治体向けプラン」を追加しています。
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </div>
  );
};

export default NewsAccordion;
