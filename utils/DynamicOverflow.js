import React from "react";
import PropTypes from "prop-types";
import throttle from "lodash.throttle";

class DynamicOverflow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfVisibleElements: Infinity
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);


    /*
     * All elements in props.list are rendered on the screen.
     *
     * Then, the containerNode and tabNode are measured to calculate how many
     * elements we can display.
     *
     * If elements need to be hidden, everything is rerendered.
     */
    this.calculateSize();
    setTimeout(() => this.calculateSize(), 300)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  calculateSize = () => {
    const containerWidth = this.containerNode && this.containerNode.clientWidth;
    let moreNodeWidth = 0;
    if (this.moreNode) {
      const moreNodeStyle = window.getComputedStyle(this.moreNode);
      const moreNodeMarginWidth = parseInt(moreNodeStyle.marginLeft || 0) + parseInt(moreNodeStyle.marginRight || 0);
      moreNodeWidth = this.moreNode.offsetWidth + moreNodeMarginWidth;
    }
    console.log("moreNodeWidth", moreNodeWidth, this.moreNode);

    let maximumChildrenAllowed = 0;
    let nodeWidthSum = 0;
    console.log("maximumChildrenAllowedInit",maximumChildrenAllowed);
    this.listNodes.filter(node => node !== null).forEach(
      (node) => {
        let nodeStyle = window.getComputedStyle(node);
        let nodeWidth = node.offsetWidth;
        let nodeMarginWidth =  parseInt(nodeStyle.marginLeft || 0) + parseInt(nodeStyle.marginRight || 0);

        if(nodeWidth === 0){
          return;
        }
        nodeWidthSum += (nodeWidth + nodeMarginWidth);
        console.log("nodeWidth", nodeWidth, node,nodeMarginWidth,nodeStyle.marginLeft, nodeStyle.marginRight, nodeWidthSum, containerWidth, nodeWidthSum  < containerWidth, nodeWidthSum + moreNodeWidth < containerWidth)
        if (nodeWidthSum + moreNodeWidth < containerWidth) {
          maximumChildrenAllowed += 1;
        }
      }
    )

    console.log("maximumChildrenAllowed",maximumChildrenAllowed);

    const currentChildrenCount = this.listNodes.length;

    let numberOfVisibleElements = Infinity;
    if (currentChildrenCount > maximumChildrenAllowed) {
      // by default, one element is always shown
      numberOfVisibleElements = Math.max(maximumChildrenAllowed, 1);
    }

    this.setState({ numberOfVisibleElements });
  };

  handleResize = throttle(this.calculateSize, this.props.throttle);

  containerRef = node => {
    if (this.containerNode === undefined) {
      this.containerNode = node;
    }
  };

  moreNodeRef = node => {
    if (this.moreNode === undefined) {
      this.moreNode = node;
    }
  }

  nodeRef = node => {
    if (this.listNodes === undefined) {
      this.listNodes = [];
    }
    if(!node){
      return;
    }
    console.log("nodeRef", node, this.listNodes.length);
    const index = this.listNodes.findIndex(item => item.isEqualNode(node))
    if(index >= 0) {
      this.listNodes[index] = node;
    }else{
      this.listNodes.push(node);
    }
  }

  render() {
    const { numberOfVisibleElements } = this.state;
    const { list, children } = this.props;
    const { containerRef, moreNodeRef, nodeRef } = this;

    const elements = list({ nodeRef });
    const visibleElements = elements.slice(0, numberOfVisibleElements);
    const overflowElements = elements.slice(numberOfVisibleElements);

    return children({
      visibleElements,
      overflowElements,
      containerRef,
      moreNodeRef
    });
  }
}

DynamicOverflow.propTypes = {
  children: PropTypes.func,
  list: PropTypes.func,
  throttle: PropTypes.number
};

DynamicOverflow.defaultProps = {
  throttle: 200
};

export default DynamicOverflow;
