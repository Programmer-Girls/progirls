import TextComponent from "./TextComponent";

export const SubTitle: React.FC = () => {
return (
    <div
        style={{
        backgroundColor: "#f0f0f0",
    }}
    >
        <TextComponent
        text={<h2>A TECNOLOGIA FEITA POR MULHERES</h2>}
        style={{
            fontFamily: "Inter",
            fontSize: "14px",
            lineHeight: "20",
            fontWeight: 500,
            color: "#F13579",
        }}
        />
    </div>
        );
    };
    
    export default SubTitle;