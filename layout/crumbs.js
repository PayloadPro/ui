import { Breadcrumb } from 'semantic-ui-react'

const Crumbs = () => (
    <Breadcrumb size='large'>
        <Breadcrumb.Section href='/'>Home</Breadcrumb.Section>
        <Breadcrumb.Divider icon='right chevron' />
        <Breadcrumb.Section>Page</Breadcrumb.Section>
    </Breadcrumb>
)

export default Crumbs
