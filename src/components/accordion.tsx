import * as Accordion from "@radix-ui/react-accordion";
import clsx from "clsx";
import React, { FC, forwardRef, ReactElement, RefAttributes } from "react";
import { FaChevronDown } from "react-icons/fa";

type ItemProps = {
  children: [
    title: ReactElement<
      Accordion.AccordionTriggerProps & RefAttributes<HTMLButtonElement>,
      "button"
    >,
    content: ReactElement<
      Accordion.AccordionContentProps & RefAttributes<HTMLDivElement>,
      "div"
    >,
  ];
};

const AccordionTrigger = forwardRef<
  HTMLButtonElement,
  Accordion.AccordionTriggerProps
>(({ children, ...props }, forwardedRef) => (
  <Accordion.Header className="w-full group">
    <Accordion.Trigger
      {...props}
      className={clsx(
        "flex justify-between items-center w-full",
        "[&[data-state=open]>svg]:scale-[-1]",
        "group-hover:[&>svg]:scale-x-[-1]",
        props.className
      )}
      ref={forwardedRef}
    >
      {children}
      {/* Chevrão */}
      <FaChevronDown className="ml-auto" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionItem: FC<
  ItemProps & Accordion.AccordionItemProps & RefAttributes<HTMLDivElement>
> = ({ children, ...props }) => {
  const [title, content] = children;

  return (
    <Accordion.Item {...props}>
      <AccordionTrigger {...title.props} />
      <Accordion.Content
        className={clsx(
          "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
          "overflow-hidden",
          content.props.className
        )}
        {...content.props}
      />
    </Accordion.Item>
  );
};

export const AccordionDemo = ({ className }: { className?: string }) => (
  <Accordion.Root
    className={clsx(
      "p-2 shadow bg-[#F6F7F9]",
      "odd:[&>*]:bg-white",
      "flex flex-col gap-2 my-4 rounded-lg",
      "[&_*]:transition-all [&_*]:duration-[400ms] [&_*]:ease-in-out",
      className
    )}
    type="single"
    collapsible
  >
    <AccordionItem value="item-1" className="rounded-lg shadow">
      <div>O que é A Programmer Girl2?</div>

      <div>
        A Programmer Girl é uma comunidade inclusiva e colaborativa criada para
        apoiar mulheres interessadas em tecnologia. Oferecemos um espaço seguro
        para troca de conhecimentos, suporte emocional, networking e aprendizado
        técnico.
      </div>
    </AccordionItem>

    <AccordionItem value="item-2" className="p-4 rounded-lg shadow">
      <div>O que é A Programmer Girl2?</div>

      <div>
        A Programmer Girl é uma comunidade inclusiva e colaborativa criada para
        apoiar mulheres interessadas em tecnologia. Oferecemos um espaço seguro
        para troca de conhecimentos, suporte emocional, networking e aprendizado
        técnico.
      </div>
    </AccordionItem>

    <AccordionItem value="item-3" className="p-4 rounded-lg shadow">
      <div>O que é A Programmer Girl2?</div>

      <div>
        A Programmer Girl é uma comunidade inclusiva e colaborativa criada para
        apoiar mulheres interessadas em tecnologia. Oferecemos um espaço seguro
        para troca de conhecimentos, suporte emocional, networking e aprendizado
        técnico.
      </div>
    </AccordionItem>
  </Accordion.Root>
);

AccordionTrigger.displayName = "AccordionTrigger";
AccordionItem.displayName = "AccordionItem";
