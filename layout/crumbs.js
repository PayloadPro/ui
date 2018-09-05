import { Breadcrumb } from 'semantic-ui-react'

const Crumbs = () => (
    <Breadcrumb size='large'>
        <Breadcrumb.Section link>Payload Pro</Breadcrumb.Section>
        <Breadcrumb.Divider icon='right chevron' />
        <Breadcrumb.Section link>Bin</Breadcrumb.Section>
        <Breadcrumb.Divider icon='right chevron' />
        <Breadcrumb.Section link>Jamie's Bin</Breadcrumb.Section>
        <Breadcrumb.Divider icon='right chevron' />
        <Breadcrumb.Section active>Request</Breadcrumb.Section>
    </Breadcrumb>
)

export default Crumbs
