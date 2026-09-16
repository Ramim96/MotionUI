// Components
import { Page, PageContent, PageHeader } from "../../design-system/layouts/Page";
// Client
import { GlobalSettingsClient } from "./client";
// Utils
import { cn } from "@utils/css";

export default function Main () {

    return (
        <Page>
            <PageHeader />
            <PageContent>
              <GlobalSettingsClient />
            </PageContent>
        </Page>
    );
};