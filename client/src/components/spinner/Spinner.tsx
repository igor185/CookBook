import React from "react";
import {Dimmer, Loader} from "semantic-ui-react";

const Spinner = () => (
        <Dimmer active>
            <Loader size='massive' inline='centered'>Loading</Loader>
        </Dimmer>
);

export default Spinner;