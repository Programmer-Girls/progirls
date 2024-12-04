import Text from "./TextComponent";

export const TextFaq: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <Text
        style={{
          fontFamily: "Inter",
          fontSize: "56px",
          lineHeight: "72",
          fontWeight: 600,
          color: "#23272E",
        }}
      >
        Perguntas Frequentes
      </Text>
    </div>
  );
};

export default TextFaq;
