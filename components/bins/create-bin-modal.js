import React, { Component } from 'react'
import { Button, Form, Icon, Input, Message, Modal, TextArea } from 'semantic-ui-react'
import axios from 'axios'

class CreateBinModal extends Component {
    state = {
        name: '',
        description: '',
        open: false,
        loading: false,
        disabled: false,
        createContent: 'Create',
        hiddenMessage: true,
        hiddenMessageContent: '',
        binLink: '',
    }

    closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
        this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
    }

    close = () => this.setState({ open: false })

    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        const { name, description } = this.state
        this.setState({
            submittedName: name,
            submittedDescription: description,
            loading: true,
            disabled: true
        })
        axios.post('http://localhost:8081/bins', {
            data: {
                attributes: {
                    name: name,
                    description: description,
                }
            }
        })
            .then((response) => {
                let binLink = 'http://localhost:3000/bins/' + response.data.data.id
                console.log(binLink)
                this.setState({
                    loading: false,
                    createContent: 'Created',
                    hiddenMessage: false,
                    hiddenMessageContent: `<a href="${binLink}">bin</a>`
                })
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        const {
            open,
            closeOnEscape,
            closeOnDimmerClick,
            name,
            description,
            loading,
            disabled,
            createContent,
            hiddenMessage,
            hiddenMessageContent
        } = this.state

        return (
            <div>
                <Button positive
                    onClick={this.closeConfigShow(true, false)}
                >
                    <Icon name='add' />
                    Create a Bin
                </Button>
                <Modal
                    size='tiny'
                    centered={false}
                    open={open}
                    closeOnEscape={closeOnEscape}
                    closeOnDimmerClick={closeOnDimmerClick}
                    onClose={this.close}
                    closeIcon
                >
                    <Modal.Header>
                        Create a Bin
                    </Modal.Header>
                    <Modal.Content>
                        {/* <Message icon warning>
                            <Icon name='info circle' />
                            <Message.Content>
                                <Message.Header>Bins are public!</Message.Header>
                                <p>When you create a bin, it is publicly available. If you need additional privacy, you can roll your own deployment or <a href="/contact">contact us</a>.</p>
                            </Message.Content>
                        </Message> */}
                        <Form>
                            <Form.Field
                                value={name}
                                name='name'
                                control={Input}
                                placeholder='Bin Name'
                                onChange={this.handleChange}
                                disabled={disabled}
                            />
                            <Form.Field
                                value={description}
                                name='description'
                                control={TextArea}
                                placeholder='an optional description'
                                onChange={this.handleChange}
                                disabled={disabled}
                            />
                            <Button
                                loading={loading}
                                disabled={disabled}
                                onClick={this.submit}
                                positive
                                content={createContent}
                                onClick={this.handleSubmit}
                            />
                        </Form>
                        <Message
                            hidden={hiddenMessage}
                            success
                            header='Huzzah!'
                            content={hiddenMessageContent}
                        />
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}

export default CreateBinModal
