import { Button, Dialog, Form, FormInput, FormButton } from '@fluentui/react-northstar'
import { AddIcon } from '@fluentui/react-icons-northstar'

function AddVideoForm() {
    return(
        <Form
            onSubmit={() => {
            alert('Form submitted')
            }}
        >
            <FormInput
            label="Video URL"
            name="videlUrl"
            id="video-url"
            required
            fluid
            showSuccessIndicator={false}
            />
            <FormInput
            label="Description"
            name="description"
            id="description"
            fluid
            showSuccessIndicator={false}
            />
            <FormButton content="Submit" />
        </Form>);
}

export function AddVideo() {

    const onConfirm = () => { alert('juan');}

    return(
        <Dialog 
            cancelButton='Cancel'
            confirmButton='Add'
            onConfirm={onConfirm}
            content={<AddVideoForm/>}
            header='Add video'
            trigger={<Button icon={<AddIcon />} content="Add video" primary />}
            />
    );
}