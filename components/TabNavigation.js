import React, { useState } from "react";
import TabContentCards from "./TabContentCards"; // CardListのインポート

export default function TabNavigation({ sectionId }) {
    const contentMap = {
        works: {
            tab01: "Case",
            tab02: "Service",
            tab03: "Music",
        },
        services: {
            tab01: "Top",
            tab02: "Test",
            tab03: "AAA",
        },
    };

    const defaultContent = {
        tab01: "01",
        tab02: "02",
        tab03: "03",
    };

    const tabs = contentMap[sectionId] || defaultContent;

    const [activeTab, setActiveTab] = useState(Object.keys(tabs)[0]);

    return (
        <nav className="bl_tabNav" role="tablist">
            <ul className="bl_tabNav_inner">
                {Object.entries(tabs).map(([key, value]) => (
                    <li key={key}>
                        <span
                            role="tab"
                            tabIndex={key === activeTab ? 0 : -1}
                            aria-selected={key === activeTab}
                            className={`bl_tabNav_link ${
                                key === activeTab ? "is_active" : ""
                            }`}
                            onClick={() => setActiveTab(key)}
                        >
                            {value}
                        </span>
                    </li>
                ))}
            </ul>
            <div className="bl_tab_content">
                <TabContentCards sectionId={sectionId} tabId={activeTab} />
            </div>
        </nav>
    );
}
