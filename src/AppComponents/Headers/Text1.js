import Button from "./button";
import List from "./list";
import React from 'react';
import Heart from "./Heart";

function Text1() {
    return (
        <div style={{ display: "flex" }}>
            <Heart />
            <Button />
            <List />
        </div>
    );
}

export default Text1;
