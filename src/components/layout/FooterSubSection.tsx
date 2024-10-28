import React from "react";

type TFooterSubSection = {
    footerData: {
        id: number;
        heading: string;
        subHeadings: {
            id: number;
            text: string;
        }[];
    }[];
}

export default function FooterSubSection(props: TFooterSubSection) {
    const { footerData } = props;
    return <div className="">
        {
            footerData.map(({ id, heading, subHeadings }) => (
                <div key={id} className="mb-5">
                    <h2 className="text-lg font-bold text-white mb-6">{heading}</h2>
                    <div className="flex flex-wrap sm:flex-row gap-5">

                    {
                        subHeadings.map(({ id, text }) => (
                            <p key={id} className="text-sm font-normal text-GreyText">
                                {text}
                            </p>
                        ))
                    }
                    </div>
                </div>
            ))
        }

    </div>;
}
