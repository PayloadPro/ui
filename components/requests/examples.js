
import { SegmentedControl } from "evergreen-ui";

export default class ReqRes extends React.Component {
    state = {
        currentOption: "post"
    };

    render() {
        const { examples } = this.props;
        const { currentOption } = this.state;

        const request = examples[currentOption];
        const options = Object.keys(examples).map(k => ({
            label: k.toUpperCase(),
            value: k
        }));

        return (
            <React.Fragment>
                <SegmentedControl
                    name="interval"
                    width={240}
                    options={options}
                    value={currentOption}
                    onChange={currentOption => this.setState({ currentOption })}
                />

                <pre>{request}</pre>
            </React.Fragment>
        );
    }
}

