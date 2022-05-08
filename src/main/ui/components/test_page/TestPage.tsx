import React from 'react';
import {Input} from "../../common/input/Input";
import {Button} from "../../common/button/Button";
import {Checkbox} from "../../common/checkbox/Checkbox";

export const TestPage = () => {
    return (
        <div>
            <Input/>
            <Button red>red </Button>
            <Button >default </Button>
            <Button disabled>disabled </Button>
            <Checkbox/>
        </div>
    );
};
