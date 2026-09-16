// Components
import { Page, PageContent, PageHeader } from "../../../design-system/layouts/Page";
// Client
import { GlobalAppRolesClient } from "./client";

export default function GlobalAppRolesPage () {

    return (
        <Page>
            <PageHeader
                title="App roles"
                description="Create and manage the page accessibility and permissions to manipulate data"
                enableBreadcrumbs
            />
            <PageContent>
                <GlobalAppRolesClient />
            </PageContent>
        </Page>
    );
};