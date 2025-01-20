import {
  AccordionContentProps,
  AccordionItemProps,
  AccordionTriggerProps,
  Content,
  Header,
  Item,
  Root,
  Trigger,
} from "@radix-ui/react-accordion";
import clsx from "clsx";
import React, { FC, forwardRef, ReactElement, RefAttributes } from "react";
import { FaChevronDown } from "react-icons/fa";

type ItemProps = {
  children: [
    title: ReactElement<
      AccordionTriggerProps & RefAttributes<HTMLButtonElement>,
      "button"
    >,
    content: ReactElement<
      AccordionContentProps & RefAttributes<HTMLDivElement>,
      "div"
    >,
  ];
};

const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, ...props }, forwardedRef) => (
    <Header>
      <Trigger
        {...props}
        className={clsx("flex justify-between", props.className)}
        ref={forwardedRef}
      >
        {children}
        <FaChevronDown aria-hidden />
      </Trigger>
    </Header>
  )
);

const AccordionItem: FC<
  ItemProps & AccordionItemProps & RefAttributes<HTMLDivElement>
> = ({ children, ...props }) => {
  const [title, content] = children;

  return (
    <Item {...props}>
      <AccordionTrigger {...title.props} />
      <Content {...content.props} />
    </Item>
  );
};

export const AccordionDemo = ({ className }: { className?: string }) => (
  <Root
    className={clsx(
      "p-2 shadow bg-[#F6F7F9]",
      "odd:[&>*]:bg-white",
      "flex flex-col gap-2 my-4 rounded-lg",
      className
    )}
    type="single"
    collapsible
  >
    <AccordionItem value="item-1" className="p-4 rounded-lg shadow">
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
  </Root>
);

AccordionTrigger.displayName = "AccordionTrigger";
AccordionItem.displayName = "AccordionItem";
