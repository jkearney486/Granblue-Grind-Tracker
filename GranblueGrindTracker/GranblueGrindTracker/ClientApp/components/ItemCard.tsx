import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

type ItemProps = RouteComponentProps<{
    name: string;
    amountHeld: number;
    amountRequired: number;
}>;

class Item extends React.Component<ItemProps, {}> {
    public render() {
        return <div>
            <div>
                {this.props.match.params.name}
            </div>
            <div>
                {this.props.match.params.amountHeld}
                /
                {this.props.match.params.amountRequired}
            </div>
        </div>;
    }
}

