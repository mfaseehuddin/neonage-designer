import { Sidebar, Textarea } from "flowbite-react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Textfit } from "react-textfit";

import React from "react";

type Props = {};

export default function Designer({}: Props) {
    const [text, setText] = React.useState("Neonage");

    const [font, setFont] = React.useState("Manifestly");

    const [background, setBackground] = React.useState(1);

    const [dimensions, setDimensions] = React.useState<
        "small" | "medium" | "large"
    >("small");

    const [alignment, setAlignment] = React.useState<
        "left" | "center" | "right"
    >("left");

    const colors = [
        "#CA2E1F",
        "#E5B360",
        "#0A1DC6",
        "#71EE52",
        "#AD3398",
        "#D253E0",
        "#59A0B6",
        "#D64724",
        "#D0F0F2",
        "#F3E786",
        "#F2E587",
        "#E2D249",
    ];
    const [color, setColor] = React.useState(colors[0]);

    const fonts = [
        // "Manifestly",
        // "AbsolutelySilent",
        // "MostlyFloral",
        "SenjaSantuy",
        "CoffeeSigns",
        "Bastinson",
        "BetterLett",
        "Solustion",
        // "SweetlyScented",
        "Hendrickson",
        "Better Grade",
        "Violante",
        "Biancha",
        "Rafaella Signature",
        "Retro Signature",
        "Agreement Signature",
        "Romantica",
        "Anything",
        "Neon Bines",
        "Bastinson",
        "Gillmore",
        "Billmore",
    ];

    return (
        <div className="w-[80vw] h-[80vh] flex justify-center">
            <Sidebar className="w-2/5">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <DesignerSidebarComponent
                            title="Custom Text"
                            childrenVisible
                        >
                            <Textarea
                                id="large"
                                value={text}
                                onChange={(e) => {
                                    setText(e.target.value);
                                }}
                            />
                        </DesignerSidebarComponent>
                        <DesignerSidebarComponent title="Font Family">
                            <div>
                                {fonts.map((font, index) => (
                                    <div onClick={() => setFont(font)}>
                                        <Texti
                                            text={text.split(" ")[0]}
                                            font={font}
                                            key={index}
                                        />
                                    </div>
                                ))}
                            </div>
                        </DesignerSidebarComponent>
                        <DesignerSidebarComponent title="Dimensions">
                            <div className="text-black py-2 px-5 flex flex-col space-y-4 justify-center items-start">
                                <button onClick={() => setDimensions("small")}>
                                    small
                                </button>
                                <button onClick={() => setDimensions("medium")}>
                                    medium
                                </button>
                                <button onClick={() => setDimensions("large")}>
                                    large
                                </button>
                            </div>
                        </DesignerSidebarComponent>
                        <DesignerSidebarComponent title="Alignment">
                            <div className="text-black py-2 px-5 flex flex-col space-y-4 justify-center items-start">
                                <button onClick={() => setAlignment("left")}>
                                    left
                                </button>
                                <button onClick={() => setAlignment("center")}>
                                    center
                                </button>
                                <button onClick={() => setAlignment("right")}>
                                    right
                                </button>
                            </div>
                        </DesignerSidebarComponent>
                        <DesignerSidebarComponent title="Font Color">
                            <div className="flex flex-wrap py-2 px-3 gap-2">
                                {colors.map((color, index) => (
                                    <div
                                        className="w-10 h-10 rounded-full"
                                        style={{
                                            backgroundColor: color,
                                        }}
                                        key={index}
                                        onClick={() => setColor(color)}
                                    ></div>
                                ))}
                            </div>
                        </DesignerSidebarComponent>
                        <DesignerSidebarComponent title="Scene">
                            <div className="flex flex-col gap-2">
                                {new Array(7).fill(0).map((_, index) => (
                                    <img
                                        src={`./scenes/Background-Scenes-${
                                            index + 1
                                        }.jpeg`}
                                        className="w-full aspect-square object-cover rounded-md"
                                        onClick={() => setBackground(index + 1)}
                                    />
                                ))}
                            </div>
                        </DesignerSidebarComponent>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
            <div
                className="w-3/5 h-full bg-gray-100 flex justify-center"
                style={{
                    backgroundImage: `url(./scenes/Background-Scenes-${background}.jpeg)`,
                    backgroundSize: "cover",
                }}
            >
                <div
                    className={`
                    text-black mt-36
                    ${dimensions === "small" && "text-[16px]"}
                    ${dimensions === "medium" && "text-[24px]"}
                    ${dimensions === "large" && "text-[32px]"}`}
                    style={{
                        fontFamily: font,
                        color: color,
                        textAlign: alignment,
                        //make the text glow!
                        textShadow: `0 0 50px ${color}`,
                    }}
                >
                    {
                        //split the text into 12 characters to wrap
                        text.split("").map((char, index) => (
                            <>
                                <span className="inline-block" key={index}>
                                    {char}
                                </span>
                                {char === "\n" && (
                                    <>
                                        <br />
                                        <br />
                                        <br />
                                    </>
                                )}
                                {char === " " && (
                                    <span className="ml-1"> </span>
                                )}
                                {index % 12 === 0 && index !== 0 && (
                                    <>
                                        <br />
                                        <br />
                                        <br />
                                    </>
                                )}
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

interface SideBarComponentProps {
    children: React.ReactNode;
    childrenVisible?: boolean;
    className?: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    title?: string;
}

function DesignerSidebarComponent({
    children,
    childrenVisible,
    title,
}: SideBarComponentProps) {
    const [isOpen, setIsOpen] = React.useState(childrenVisible ?? false);

    return (
        <div>
            <div
                className="relative h-fit select-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Sidebar.Item>{title}</Sidebar.Item>
                <ChevronDownIcon
                    className={`
                    w-5 h-5 
                    fill-black absolute right-3 
                    top-[0.7rem] 
                    pointer-events-none
                    transition-all duration-300 ease-in-out
                    ${isOpen ? "transform rotate-180" : ""}
                    `}
                />
            </div>
            {isOpen && <div className="p-2">{children}</div>}
        </div>
    );
}

function Texti({ text, font }: any) {
    return (
        <div className="my-10 w-full h-10 flex items-center justify-center">
            <Textfit
                mode="single"
                style={{ fontFamily: font }}
                forceSingleModeWidth={true}
                className={`
                text-black w-full h-10 whitespace-nowrap cursor-pointer hover:text-pink-500 transition-colors duration-200 ease-in-out
                `}
            >
                {"Neonage Pk"}
            </Textfit>
        </div>
    );
}
