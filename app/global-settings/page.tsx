// Components
import { PageContainer, PageContainerContent, PageContainerHeader } from "@design-system/layouts/page-container";
// Client
import { GlobalSettingsClient } from "./client";

export default function Main () {

    return (
        <PageContainer>
            <PageContainerHeader />
            <PageContainerContent>
              <GlobalSettingsClient />
            </PageContainerContent>
        </PageContainer>
    );
};