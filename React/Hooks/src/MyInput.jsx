import React, { forwardRef } from "react";

function MyInput(props: any, ref: any): Element {
    return (
        <>
            <input type="text" ref={ref} {...props} />
        </>
    );
}

export default forwardRef(MyInput);
