import { contentUtils } from "../utils/contentUtils.js";
import { tabUtils } from "../utils/tabUtils.js";

const init = () => {
    console.log("Init background.js");
    openTabAndReadContent();
};

let openTabAndReadContent = async () => {
    const URL =
        "data:text/plain;base64,SWYgeW91IHNlZSB0aGlzLCBpdCBtZWFucyB0aGUgQmFja2dyb3VuZCBzY3JpcHQgZm9yIHlvdXIgQ2hyb21lIGV4dGVuc2lvbiBoYXMgc3VjY2Vzc2Z1bGx5IHJ1biE=";

    try {
        const responseTab = await tabUtils.openLinkInNewTab(URL);

        // console.log("responseTab ", responseTab);
        // const responseContent = await contentUtils.getContentOfTab(
        //     responseTab.id
        // );

        // console.log("responseContent ", responseContent);
        // await tabUtils.close(responseTab.id);
    } catch (error) {
        // console.error("error ", error);
    }
};

window.onload = init;
