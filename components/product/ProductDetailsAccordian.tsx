import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ProductDetailsAccordianProps {
  description: string;
  longDescription: string;
  benefits: { name: string }[];
  ingredients: { name: string }[];
}

const ProductDetailsAccordian = ({
  description,
  longDescription,
  benefits,
  ingredients,
}: ProductDetailsAccordianProps) => {
  return (
    <Accordion type="single" collapsible className="w-full mb-[20px]">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg font-semibold">
          DESCRIPTION
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <p>{description}</p>
            <div dangerouslySetInnerHTML={{ __html: longDescription }} />
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg font-semibold">
          BENEFITS
        </AccordionTrigger>
        <AccordionContent>
          {benefits.length > 0 ? (
            <ul className="list-disc pl-4 space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit.name}</li>
              ))}
            </ul>
          ) : (
            <p>No benefits listed for this product.</p>
          )}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg font-semibold">
          INGREDIENTS
        </AccordionTrigger>
        <AccordionContent>
          {ingredients.length > 0 ? (
            <ul className="list-disc pl-4 space-y-2">
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.name}</li>
              ))}
            </ul>
          ) : (
            <p>No ingredients listed for this product.</p>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductDetailsAccordian;
