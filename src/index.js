import React from "react";
import ReactDOM from "react-dom";
import { Button } from "./lib";
import "./index.scss";
/**
 * The code below renders some types of button  like primary and secondary
 * To render the  the different buttons with different size provide the props to the button component
 *
 *  example
 * <Button
 type="primary"
 size="small"
 label="Regular"
 ></Button>

 To render button with Icon import IconLeft and IocnRight then pass IconLeft=<IconLeft/> or IconRight=<IconRight/> as a prop to button component.
 */
ReactDOM.render(
  <div className="demo-container">
    <div className="sub-container">
      <h4>Primary buttons</h4>
      <Button type="primary" size="regular" label="Regular" />
      <br />
      <Button type="primary" size="small" label="Small" />
      <br />
      <Button type="primary" size="large" label="large" />
    </div>
    <div className="sub-container">
      <h4>Secondary buttons</h4>
      <Button type="secondary" size="regular" label="Regular" />
      <br />
      <Button type="secondary" size="small" label="Small" />
      <br />
      <Button type="secondary" size="large" label="large" />
    </div>
    <div className="sub-container">
      <h4>Primary With Left Icon </h4>
      <Button
        type="primary"
        size="regular"
        label="Regular"
        iconLeft={<span>$</span>}
      />
      <br />
      <Button
        type="primary"
        size="small"
        label="Small"
        iconLeft={<span>$</span>}
      />
      <br />
      <Button
        type="primary"
        size="large"
        label="large"
        iconLeft={<span>$</span>}
      />
    </div>
    <div className="sub-container">
      <h4>Secondary With Left Icon </h4>
      <Button
        type="secondary"
        size="regular"
        label="Regular"
        iconLeft={<span>$</span>}
      />
      <br />
      <Button
        type="secondary"
        size="small"
        label="Small"
        iconLeft={<span>$</span>}
      />
      <br />
      <Button
        type="secondary"
        size="large"
        label="large"
        iconLeft={<span>$</span>}
      />
    </div>
    <div className="sub-container">
      <h4>Primary With Right Icon </h4>
      <Button
        type="primary"
        size="regular"
        label="Regular"
        iconRight={<span>$</span>}
      />
      <br />
      <Button
        type="primary"
        size="small"
        label="Small"
        iconRight={<span>$</span>}
      />
      <br />
      <Button
        type="primary"
        size="large"
        label="large"
        iconRight={<span>$</span>}
      />
    </div>
    <div className="sub-container">
      <h4>Secondary With Right Icon </h4>
      <Button
        type="secondary"
        size="regular"
        label="Regular"
        iconRight={<span>$</span>}
      />
      <br />
      <Button
        type="secondary"
        size="small"
        label="Small"
        iconRight={<span>$</span>}
      />
      <br />
      <Button
        type="secondary"
        size="large"
        label="large"
        iconRight={<span>$</span>}
      />
    </div>
    <div className="sub-container">
      <h4>Disabled primary buttons</h4>
      <Button type="primary" size="regular" label="Regular" disabled={true} />
      <br />
      <Button type="primary" size="small" label="Small" disabled />
      <br />
      <Button type="primary" size="large" label="large" disabled />
    </div>
    <div className="sub-container">
      <h4>Disabled secondary buttons</h4>
      <Button type="secondary" size="regular" label="Regular" disabled={true} />
      <br />
      <Button type="secondary" size="small" label="Small" disabled />
      <br />
      <Button type="secondary" size="large" label="large" disabled />
    </div>
    <div className="sub-container">
      <h4>Disabled icon buttons</h4>
      <Button
        type="primary"
        size="regular"
        label="Primary Regular"
        disabled={true}
        iconLeft={<span>$</span>}
      />
      <br />
      <Button
        type="secondary"
        size="small"
        label="Secondary small"
        disabled
        iconLeft={<span>$</span>}
      />
      <br />
      <Button
        type="secondary"
        size="large"
        label="Secondary large"
        disabled
        iconRight={<span>$</span>}
      />
      <br />
      <Button
        type="primary"
        size="small"
        label="Primary small"
        disabled
        iconRight={<span>$</span>}
      />
    </div>
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
