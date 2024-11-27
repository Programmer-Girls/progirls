import TextComponent from "./TextComponent";

export const TitleHome: React.FC = () => {
return (
    <div
        style={{
        backgroundColor: "#f0f0f0",
    }}
    >
        <TextComponent
        text={<h1>Code, Conecte-se e <br />
            Cresça com a ProGirls</h1>}
        style={{
            fontFamily: "Inter",
            fontSize: "64px",
            lineHeight: "1",
            fontWeight: 500,
            color: "#000000",
        }}
        />
    </div>
    );
};

export default TitleHome;
