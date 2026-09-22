// Components
import { PageContainer, PageContainerContent, PageContainerHeader } from "@design-system/layouts/page-container";
// Client
import { GlobalAppRolesClient } from "./client";

export default function GlobalAppRolesPage () {

    return (
        <PageContainer>
            <PageContainerHeader
                title="App roles"
                description="Create and manage the page accessibility and permissions to manipulate data"
                enableBreadcrumbs
            />
            <PageContainerContent>
                <GlobalAppRolesClient />
            </PageContainerContent>
        </PageContainer>
    );
};